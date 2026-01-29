import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcon from "../components/models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { logoItems } from "../constants";
import LogoSection from "./LogoSection";

const TechStack = () => {

  useGSAP(()=>{
    gsap.fromTo('.tech-card',{y:50,opacity:0},{
      y:0,
      opacity:1,
      duration:1,
      ease:'power2.inOut',
      stagger:0.2,
      scrollTrigger:{
        trigger:'#skills',
        start:'top center'
      }
    })
  })

  return (
    <div className="flex-center section-padding flex-col" id="skills">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Technical Expertise"
          sub="The Skills I Bring to the Table"
        />

        
      </div>
      
      <LogoSection/>
    </div>
  );
};

export default TechStack;
