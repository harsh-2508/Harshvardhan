import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
    if(projects.some(p => !p)) return;

    projects.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      )
    });
    
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
  }, []);

  return (
    <section ref={sectionRef} id="work" className='w-full py-20 flex flex-col items-center justify-center'>
      

      <div className="max-w-6xl w-full px-5 md:px-10 mb-12">
        
        <h2 className="head-text text-3xl md:text-5xl font-bold text-white">
          Projects
        </h2>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-5 md:px-10 flex flex-col xl:flex-row gap-8">
        
        {/* --- LEFT: MAIN FEATURE PROJECT (AgroMind) --- */}
        <div 
          className="xl:w-[55%] group relative rounded-2xl bg-zinc-900/80 border border-white/10 p-6 
            hover:border-purple-600/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] 
            transition-all duration-500 flex flex-col justify-between" 
          ref={project1Ref}
        >
          <div>
            {/* Image Area with Zoom Effect */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden relative mb-6 border border-white/5">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10"/>
              <img 
                src="/images/project1.png" 
                alt="AgroMind GenAI Project" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>

            {/* Content Area */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-violet-500 transition-colors">AgroMind</h2>
            <p className="text-white-50 text-sm md:text-base leading-relaxed mb-4">
              A GenAI-powered platform helping farmers identify crop diseases and providing real-time solutions using AI models.
            </p>

            {/* Tech Tags - Purple Theme */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['MERN', 'GenAI', 'Python', 'Tailwind'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <a 
              href="https://agromind-https://github.com.vercel.app" 
              
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 py-3 rounded-lg bg-white text-black font-bold text-sm text-center hover:bg-violet-100 transition-colors shadow-lg shadow-white/5"
            >
              Live Demo
            </a>
            <a 
              href="https://agromind-https://github.com.vercel.app"  
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm text-center hover:bg-white/10 hover:border-violet-400/50 transition-colors"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        {/* --- RIGHT: SECONDARY PROJECTS STACK --- */}
        <div className="xl:w-[45%] flex flex-col gap-6">
          
          {/* Card 2: VidyaDrishti */}
          <div 
            className="flex-1 group relative rounded-2xl bg-zinc-900/80 border border-white/10 p-5 
              hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] 
              transition-all duration-500 flex flex-row gap-4 items-center" 
            ref={project2Ref}
          >
            {/* Image with Zoom */}
            <div className="w-32 h-24 md:w-40 md:h-28 shrink-0 rounded-lg overflow-hidden relative border border-white/5">
               <img 
                src="/images/project2.png" 
                alt="VidyaDrishti" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
            </div>

            <div className="flex flex-col justify-center w-full">
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-violet-500 transition-colors">VidyaDrishti</h2>
              <p className="text-white-50 text-xs md:text-sm line-clamp-2 mb-3">
                Analytics dashboard for rural schools to track student performance visually.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-3 mt-1">
                <a href="https://github.com/harsh-2508/vidyaDrishti" className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-semibold text-white hover:bg-violet-600 hover:text-white transition-all">
                  Live Demo
                </a>
                <a href="https://github.com/harsh-2508/vidyaDrishti" className="px-3 py-1.5 rounded-md border border-white/10 text-xs font-semibold text-white-50 hover:text-white hover:border-violet-500/50 transition-all">
                  GitHub
                </a>
              </div>
            </div>
          </div>

           {/* Card 3: Smart Attendance */}
           <div 
            className="flex-1 group relative rounded-2xl bg-zinc-900/80 border border-white/10 p-5 
              hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] 
              transition-all duration-500 flex flex-row gap-4 items-center" 
            ref={project3Ref}
          >
            {/* Image with Zoom */}
            <div className="w-32 h-24 md:w-40 md:h-28 shrink-0 rounded-lg overflow-hidden relative border border-white/5">
               <img 
                src="/images/project3.png" 
                alt="Smart Attendance System" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
            </div>
            
            <div className="flex flex-col justify-center w-full">
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-violet-500 transition-colors">Shiksha-Saathi
</h2>
              <p className="text-white-50 text-xs md:text-sm line-clamp-2 mb-3">
                A facial recognition based attendance system built with the MERN stack.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-1">
                <a href="https://shiksha-saathi-lyart.vercel.app" className="px-3 py-1.5 rounded-md bg-white/10 text-xs font-semibold text-white hover:bg-violet-600 hover:text-white transition-all">
                  Live Demo
                </a>
                <a href="https://github.com/harsh-2508/shiksha-saathi" className="px-3 py-1.5 rounded-md border border-white/10 text-xs font-semibold text-white-50 hover:text-white hover:border-violet-600/50 transition-all">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection;