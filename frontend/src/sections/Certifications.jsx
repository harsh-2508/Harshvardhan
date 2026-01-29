import React,{useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { certifications } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {

  const scrollContainerRef=useRef(null);

  //Gsap animation for fading in the section
  useGSAP(()=>{
    gsap.fromTo(
      ".cert-card",
      {y:50,opacity:0},
      {
        y:0,
        opacity:1,
        duration:0.8,
        stagger:0.1,
        scrollTrigger:{
          trigger:"certifications",
          start:"top 80%"
        }
      }
    );
  },[]);

  const scrollLeft=()=>{
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollBy({left:-300,behaviour:"smooth"});
    }
  }

  const scrollRight=()=>{
    if(scrollContainerRef.current){
      scrollContainerRef.current.scrollBy({left:300,behaviour:"smooth"})
    }
  };

  return (
    <section id="certifications" className="w-full py-20 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Heading with Navigation Buttons */}
        <div className="flex justify-between items-end mb-10">
          <div>
            {/* <p className="text-violet-400 font-semibold uppercase tracking-wider text-sm mb-2">
              Validations & Awards
            </p> */}
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              {/* Certifications & <br /> Licenses */}
              Certifications
            </h2>
          </div>

          {/* Scroll Buttons (Desktop Only) */}
          <div className="hidden md:flex gap-3">
            <button 
              onClick={scrollLeft} 
              className="p-3 rounded-full border border-white/10 bg-zinc-900 text-white hover:bg-violet-600 hover:border-violet-500 transition-all active:scale-95"
            >
              ←
            </button>
            <button 
              onClick={scrollRight} 
              className="p-3 rounded-full border border-white/10 bg-zinc-900 text-white hover:bg-violet-600 hover:border-violet-500 transition-all active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        {/* 'snap-x' enables CSS scroll snapping */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for clean look
        >
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="cert-card flex-none w-[300px] md:w-[350px] snap-center bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:border-violet-500/50 hover:bg-zinc-900/80 transition-all duration-300 group"
            >
              
              {/* Header: Logo & Date */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-15 h-13 rounded-lg bg-white/5 p-1 flex items-center justify-center border border-white/10 group-hover:border-violet-500/30 transition-colors">
                  {/* Using a generic placeholder if you don't have images yet */}
                  {cert.logo ? (
                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full " />
                  ) : (
                    <span className="text-xl">📜</span>
                  )}
                </div>
                <span className="text-xs font-medium text-white-50 border border-white/10 px-2 py-1 rounded-full">
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-white-50 mb-6">
                Issued by {cert.issuer}
              </p>

              {/* Link */}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white/30 pb-0.5 hover:text-violet-400 hover:border-violet-400 transition-all"
              >
                Show Credential 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Certifications