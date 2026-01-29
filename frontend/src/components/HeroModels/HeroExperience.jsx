import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'
import { Suspense } from 'react'

export const HeroExperience = () => {
  // Breakpoints
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Responsive Scaling & Positioning
  const scale = isMobile ? 0.65 : isTablet ? 0.8 : 1.0;
  const position = isMobile ? [0, -2, 0] : [0, -3.5, 0];

  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      className="w-full h-full"
    >
      <Suspense fallback={null}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 4} // Slightly limited to prevent looking under the floor
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />
        <Particles count={isMobile ? 50 : 90} /> {/* Less particles on mobile for performance */}

        <group 
          scale={scale}
          position={position}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  )
}

export default HeroExperience