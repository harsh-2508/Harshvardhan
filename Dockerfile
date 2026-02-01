# --- Stage 1: Build Frontend ---
FROM node:18-alpine as frontend_build
WORKDIR /app/frontend

# Copy frontend dependencies and install
COPY frontend/package*.json ./
RUN npm install

# Copy frontend source
COPY frontend/ ./

# --- ADD EMAILJS KEYS FOR VITE BUILD ---
# These must be set BEFORE 'npm run build'
ENV VITE_APP_EMAILJS_SERVICE_ID=service_cjmf6ht
ENV VITE_APP_EMAILJS_TEMPLATE_ID=template_buafksh
ENV VITE_APP_EMAILJS_PUBLIC_KEY=iS0v3xFNh4nYIm5-L
# ---------------------------------------

# Build the React app
RUN npm run build

# --- Stage 2: Setup Backend & Serve ---
FROM node:18-alpine
WORKDIR /app/backend

# Copy backend dependencies
COPY backend/package*.json ./
# Add "type": "module" support if explicit flag needed, otherwise standard install
RUN npm install --production

# Copy backend source code
COPY backend/ ./

# COPY THE BUILT FRONTEND FROM STAGE 1
COPY --from=frontend_build /app/frontend/dist ./dist

# Environment variables
ENV PORT=8080
ENV NODE_ENV=production

# Expose port and start
EXPOSE 8080
CMD ["node", "index.js"]