import FeatureCards from "./sections/FeatureCards";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Preloader from "./sections/Preloader";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AIShowcase from "./sections/AIShowcase";

import Certifications from "./sections/Certifications";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="h-full w-full">
            <NavBar />
            <Hero />
            <TechStack />
            <AIShowcase/>
            <ShowcaseSection />
            <Certifications />
            <Contact />
            <Footer />

            
            {/* <FeatureCards /> */}
            {/* <ExperienceSection /> */}
            {/* <Testimonials /> */}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
