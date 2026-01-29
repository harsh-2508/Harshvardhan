// import React from 'react'
// import { logoIconsList } from '../constants/index.js'

// const LogoIcon=({icon})=>{
//   return(
//     <div className="flex-none flex-center marquee-item">
//       <img src={icon.imgPath} alt={icon.name}/>
//     </div>
//   )
// }

// const LogoSection = () => {
//   return (
//     <div className='md:my-20 my-10 relative'>
//       <div className='gradient-edge'/>
//       <div className='gradient-edge'/>


//       <div className="marquee h-52">
//         <div className="marquee-box md:gap-12 gap-5">
//           {logoIconsList.map((icon)=>(
//             <LogoIcon key={icon.name} icon={icon }/>
            
//           ))}

//           {logoIconsList.map((icon)=>(
//             <LogoIcon key={icon.name} icon={icon }/>
            
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LogoSection


import React from 'react'

// Define your tech stack list directly here or import it
const techNames = [
  "Docker",
  "Kubernetes",
  "ReactJs",
  // "Three.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind CSS",
  "GSAP",
  "Python",
  "Java",
  "Git & GitHub",
  "Figma",
  "Next.js",
  "GenAI"
];

const TechTextItem = ({ text }) => {
  return (
    <div className="flex items-center gap-8 md:gap-16 px-4">
      {/* The Tech Name */}
      <span className="text-3xl md:text-6xl font-black text-white/30 uppercase tracking-tighter hover:text-white transition-colors duration-500 cursor-default whitespace-nowrap">
        {text}
      </span>
      
      {/* The Separator Dot */}
      <span className="size-2 md:size-3 rounded-full bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
    </div>
  )
}

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative overflow-hidden'>
      {/* Gradients to fade edges */}
      <div className='gradient-edge z-10'/>
      <div className='gradient-edge z-10'/>

      <div className="marquee h-32 md:h-40 flex items-center">
        {/* We map twice to ensure the infinite loop has enough content */}
        <div className="marquee-box gap-0">
          
          {/* Loop 1 */}
          {techNames.map((name, index) => (
            <TechTextItem key={`list-1-${index}`} text={name} />
          ))}

          {/* Loop 2 (Duplicate for seamless animation) */}
          {techNames.map((name, index) => (
            <TechTextItem key={`list-2-${index}`} text={name} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default LogoSection