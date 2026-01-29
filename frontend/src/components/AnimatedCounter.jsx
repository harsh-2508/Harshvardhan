import React from "react";
import { counterItems } from "../constants";
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32 w-full">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item,index) => (
          <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 flex flex-col justify-center items-center hover:bg-zinc-900 transition-colors duration-300"
          key={item.id || index}>
            <div
              key={counterItems.label}
              className="counter-number text-white text-4xl md:text-5xl font-bold mb-3"
            >
              
             <CountUp end={item.value} duration={2.5} suffix={item.suffix} enableScrollSpy={true} scrollSpyOnce={true}/>
            </div>
            <div className="text-white-50 text-base md:text-lg font-medium text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
