# Use the updated Node 22 image to avoid version mismatch errors
FROM node:22-alpine

# Set the working directory for the backend
WORKDIR /app

# Copy backend package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the backend source code
COPY . .

# Set environment variables
ENV PORT=8080
ENV NODE_ENV=production

# Expose port and start the server
EXPOSE 8080
CMD ["node", "index.js"] 
# Note: If your main file is server.js, change the line above to CMD ["node", "server.js"]