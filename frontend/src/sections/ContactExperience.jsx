import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows, Html, useProgress } from "@react-three/drei";
import { Computer } from "../components/models/Computer-optimized";

// Optional: A simple loader
const Loader = () => {
  const { progress } = useProgress();
  return <Html center className="text-white">{progress.toFixed(0)}%</Html>;
};

const ContactExperience = () => {
  return (
    // Changed Tailwind bg to bg-black (though Canvas background overrides this now)
    <div className="w-full h-[50vh] xl:h-[60vh] card-border rounded-xl overflow-hidden relative bg-black">
      <Canvas
        // 1. CLOSER CAMERA: Reduced X, Y, Z distance and slightly tightened FOV
        camera={{ position: [-3, 3, 10], fov: 40 }}
        shadows
        dpr={[1, 2]}
      >
        {/* 2. SOLID BLACK BACKGROUND: Overrides environment background */}
        <color attach="background" args={['#000000']} />

        {/* --- LIGHTING FOR DARK MODE --- */}
        <ambientLight intensity={0.4} color="#000000" />
        
        {/* Warm key light */}
        <directionalLight 
          position={[5, 5, 3]} 
          intensity={1.5} 
          color="#000000"
          castShadow
        />

        {/* Added cool-toned Rim Light (backlight) to define edges against black bg */}
        <spotLight 
          position={[-5, 8, -5]} 
          angle={0.5} 
          penumbra={1} 
          intensity={2} 
          color="#000000" 
        />

        {/* --- CONTROLS --- */}
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2}
        />

        {/* Environment contributes reflections, but background={false} ensures it doesn't show the city image */}
        <Environment preset="city" background={false} blur={0.8} />

        {/* --- SCENE CONTENT --- */}
        <Suspense fallback={<Loader />}>
          <group position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
             {/* The Computer Model */}
            <group scale={0.03} castShadow>
              <Computer />
            </group>

            {/* The Stand/Base Mesh - darkened slightly for contrast */}
            <mesh position={[0, 0.1, 0]} receiveShadow castShadow>
              <boxGeometry args={[3.5, 0.15, 3.5]} />
              <meshStandardMaterial color="#222222" roughness={0.7} />
            </mesh>
          </group>

          <ContactShadows 
            opacity={0.7} 
            scale={10} 
            blur={2} 
            far={4} 
            color="#000000" 
          />

          {/* 3. BLACK FLOOR PLANE */}
          <mesh receiveShadow position={[0, -1.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            {/* Dark near-black floor with slight reflectivity */}
            <meshStandardMaterial color="#000000" roughness={0.6} metalness={0.2} />
          </mesh>

        </Suspense>
      </Canvas>
    </div>
  );
};

export default ContactExperience;