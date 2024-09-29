import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const CardModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} scale={0.5} position={[0, -1, 0]} />;
};

const ServiceCard = ({ service }) => {
  const cardRef = useRef();

  return (
    <motion.div
      ref={cardRef}
      className="rounded-lg shadow-lg p-6 m-4 bg-[#e6f7f4] cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 150 }}
      style={{
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Canvas className="w-full h-60 rounded-t-lg" style={{ background: "#3a91a3" }}>
        {/* Ensure proper lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} intensity={1.5} castShadow />

        {/* Adding model with suspense for lazy loading */}
        <Suspense fallback={null}>
          <CardModel modelPath={service.modelPath} />
        </Suspense>

        {/* Add controls to inspect the model */}
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.75} />
      </Canvas>
      <h3 className="text-xl font-bold mt-4 text-[#3a91a3]">{service.name}</h3>
      <p className="text-gray-700 mt-2">{service.description}</p>
      <p className="mt-2">
        <span className="font-bold">Estimated Time:</span> {service.estimatedTime}
      </p>
      <p className="mt-1">
        <span className="font-bold">Price:</span> {service.price}
      </p>
      <p className="mt-1">
        <span className="font-bold">Expertise Level:</span> {service.expertiseLevel}
      </p>
      <p className="mt-1">
        <span className="font-bold">Complexity:</span> {service.complexity}
      </p>
      <div className="mt-4">
        <span className="font-bold">Tools Used:</span>
        <ul className="list-disc ml-4 text-[#5975e6]">
          {service.toolsUsed.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
