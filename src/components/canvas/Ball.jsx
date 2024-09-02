import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Use the same texture for all faces
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='#fff8eb' flatShading />
        {/* Apply the same decal to all six faces */}
        <Decal
          position={[0, 0, 0.5]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -0.5]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0.5, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[-0.5, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, -0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ cursor: 'default' }} // Ensures that the cursor issue is handled
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
