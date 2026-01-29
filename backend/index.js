import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {  GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/job-fit",async (req,res)=>{
  try{
    const {jobDescription} = req.body;
    if(!jobDescription){
      return res.status(400).json({error:"Job description is required"});
    }

    const model=genAI.getGenerativeModel({
      model:"gemini-2.5-flash"
    });

    const prompt = `
You are an AI job-fit analyzer.

Candidate Profile:
- Name: Harshvardhan Singh Thakur
- Role Focus: Full Stack Developer
- Tech Stack:
  - Frontend: React, Tailwind CSS, Framer Motion
  - Backend: Node.js, Express
  - Database: MongoDB
  - Programming: Java, JavaScript
  - DSA: Linked List, Queue, Binary Search
  - AI/ML: Beginner–Intermediate (GenAI projects)

Projects:
- Animated Portfolio Website
- AI-powered education tools
- MERN stack applications

Task:
Analyze the job description below and return STRICT JSON only.

Required JSON format:
{
  "fit_score": number,
  "overall_verdict": string,
  "strong_matches": [],
  "partial_matches": [],
  "missing_skills": [],
  "recommended_projects_to_highlight": [],
  "learning_recommendations": []
}

Job Description:
${jobDescription}
`;

    const result=await model.generateContent(prompt);
    const text=result.response.text();

    //Safety:Extract JSON even if model adds extra text
    const jsonStart=text.indexOf("{");
    const jsonEnd=text.lastIndexOf("}")+1;
    const jsonString=text.slice(jsonStart,jsonEnd);

    const parsed=JSON.parse(jsonString);
    res.json(parsed);
  }catch(err){
    console.error(err);
    res.status(500).json({error:"Gemini analysis failed"});
  }
});

app.get("/",(_,res)=>{
  res.send("Job Fit Analyzer API running")
});

app.post("/api/portfolio-abilities",async (req,res)=>{
  try{
    const {question,projects}=req.body;

    if(!question){
      return res.status(400).json({error:"Question is required"})
    }

    const model=genAI.getGenerativeModel({model:"gemini-2.5-flash"});

    const systemRole = `
You are PortfolioAI, an intelligent, professional assistant that represents Harshvardhan Singh Thakur, a software developer.

You must answer ONLY using the information provided in the portfolio data context.
If a question is outside the portfolio data, respond politely that the information is not available.

Your goals:
- Help recruiters, developers, and students understand the portfolio
- Explain projects clearly
- Highlight strengths honestly
- Never exaggerate or invent skills

NEVER hallucinate skills, experience, or companies.
If unsure, say:
"Based on the available portfolio data, this information is not specified."
`;

const developerContext = `
DEVELOPER PROFILE:
Name: Harshvardhan Singh Thakur
Primary Stack: MERN (MongoDB, Express, React, Node.js)

Other Skills:
- Python
- Java with DSA
- REST APIs
- Authentication (JWT)
- Git & GitHub
- Basic ML (Random Forest, Pandas, Scikit-learn)

Learning Focus:
- System Design
- Advanced Backend Engineering
- GenAI Integration (Gemini API)
`;

    const projectContext=`
    PROJECT DATA:${projects || "No project data provided."}`;

    const responseRules = `
RESPONSE RULES:
- Be clear, concise, and professional
- Use headings and bullet points
- Adjust explanation depth based on user intent:
  Recruiter → impact + fit
  Developer → architecture + decisions
  Student → simple explanations
- Do NOT invent missing information
- Mention gaps honestly if asked
`;

    const prompt=`
    ${systemRole}

    ${developerContext}

    ${projectContext}

    ${responseRules}

    USER QUESTION:
    ${question}
    `;

    const result=await model.generateContent(prompt);
    const text=result.response.text();

    res.json({answer:text})

  }catch(err){
    console.error(err);
    res.status(500).json({error: "PortfolioAI failed to respond"})
  }


});


const PORT = process.env.PORT || 8080;

app.listen(process.env.PORT,()=>
  console.log(`Server running on server ${PORT}`)
);