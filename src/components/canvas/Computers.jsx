// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
// <primitive
//   object={computer.scene}
// scale={isMobile ? 0.7 : 0.75}
// position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//   rotation={[-0.01, -0.2, -0.1]}
// />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
// const [isMobile, setIsMobile] = useState(false);

// useEffect(() => {
//   // Add a listener for changes to the screen size
//   const mediaQuery = window.matchMedia("(max-width: 500px)");

//   // Set the initial value of the `isMobile` state variable
//   setIsMobile(mediaQuery.matches);

//   // Define a callback function to handle changes to the media query
//   const handleMediaQueryChange = (event) => {
//     setIsMobile(event.matches);
//   };

//   // Add the callback function as a listener for changes to the media query
//   mediaQuery.addEventListener("change", handleMediaQueryChange);

//   // Remove the listener when the component is unmounted
//   return () => {
//     mediaQuery.removeEventListener("change", handleMediaQueryChange);
//   };
// }, []);

//   return (
//     <Canvas
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three';
import { OrbitControls, Preload, useGLTF, Center, Environment } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber'
import { AxesHelper } from 'three'
import { useFrame } from '@react-three/fiber'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./TraffLight/scene.gltf')

  useEffect(() => {
    if (computer && computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.castShadow = true;
          child.receiveShadow = true;
  
          const name = child.name;
          // console.log(name);
          
  
          if (name.includes("cylinder064") && name.includes("red")) {
            child.material.emissive = new THREE.Color("red");
            child.material.emissiveIntensity = 1;
            child.material.needsUpdate = true; // Trigger material update
          } 
          
          if (name.includes("yellow")) {
            child.material.emissive = new THREE.Color("yellow");
            child.material.emissiveIntensity = 1;
            child.material.needsUpdate = true; // Trigger material update
          }
          
          if (name.includes("green_on")) {
            child.material.emissive = new THREE.Color("green");
            child.material.emissiveIntensity = 1;
            child.material.needsUpdate = true; // Trigger material update
          }
        }
      });
    }
  }, [computer]);

  return (
    <mesh>
      {/* Debug helper */}
      {/* <primitive object={new AxesHelper(10)} /> */}

      {/* Lighting */}
      <ambientLight intensity={1.5} />

      <directionalLight position={[0.05, -0.1, 1]} intensity={0.2} castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      <hemisphereLight position={[0, 0, 1]} intensity={4} groundColor='black' />

      <spotLight
        position={[0, 0, 1]}
        angle={0.3}
        penumbra={0.5}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight
        position={[0, -1.1, 0]} // same as camera position
        intensity={2}
        color="#ffffff"
      />

      {/* Model with no rotation flip */}
      <Center position={isMobile ? [0, -1.3, 0] : [0, -1.25, 0]}>
        <primitive
          object={computer.scene}
          rotation={[0, 0, 0]} // Remove the 180° flip
          scale={isMobile ? 3 : 3.5}
        />
      </Center>
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [0, 3, 10], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
        <Environment preset="city" background={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
