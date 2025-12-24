import React from 'react'

import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
      <spotLight position={[0,9,0]} intensity={100} 
      angle={0.15}
      penumbra={0.5}
      color="#fffff"
      />

      <primitive 
      object={new THREE.RectAreaLight('#A259FF',8,3,2)}
      position={[1,3,4]}
      intensity={20}
      rotation={[-Math.PI/4,Math.PI/4,0]}
      />

      <pointLight 
      position={[1,2,-2]}
      intensity={5}
      color="#7209b7"


      />
    </>
  )
}

export default HeroLights