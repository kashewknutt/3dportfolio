// Import necessary libraries from React Three Fiber and Drei
import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Preload } from "@react-three/drei";
import { gsap } from "gsap";
import * as THREE from "three"; // Ensure you import THREE
import { servicesData } from "../constants";

const BeeModel = React.forwardRef((props, ref) => {
  const { scene, animations } = useGLTF("/tour_ia.glb");
  const mixer = new THREE.AnimationMixer(scene);

  useEffect(() => {
    if (animations.length > 0) {
      mixer.clipAction(animations[0]).play();
    }
    return () => {
      mixer.stopAllAction(); // Stop all actions on unmount
    };
  }, [animations, mixer]);

  // Animation loop for React Three Fiber
  useFrame(() => {
    mixer.update(0.02);
  });

  return <primitive object={scene} ref={ref} />;
});

const Services = () => {
  const beeRef = useRef();
  
  useEffect(() => {
    const arrPositionModel = [
      {
        id: "banner",
        position: { x: 0, y: -1, z: 0 },
        rotation: { x: 0, y: 1.5, z: 0 },
      },
      {
        id: "intro",
        position: { x: 1, y: -1, z: -5 },
        rotation: { x: 0.5, y: -0.5, z: 0 },
      },
      {
        id: "description",
        position: { x: -1, y: -1, z: -5 },
        rotation: { x: 0, y: 0.5, z: 0 },
      },
      {
        id: "contact",
        position: { x: 0.8, y: -1, z: 0 },
        rotation: { x: 0.3, y: -0.5, z: 0 },
      },
    ];

    const modelMove = () => {
      const sections = document.querySelectorAll(".section");
      let currentSection;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });
      let position_active = arrPositionModel.findIndex(
        (val) => val.id === currentSection
      );
      if (position_active >= 0) {
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(beeRef.current.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out",
        });
        gsap.to(beeRef.current.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("scroll", modelMove);

    return () => {
      window.removeEventListener("scroll", modelMove);
    };
  }, []);

  return (
    <section className="min-h-screen p-10 flex" style={{ background: "#e6f7f4" }}>
      <div className="w-1/2 p-5">
        <h2 className="text-3xl font-bold mb-10 text-[#3a91a3]">Our Services</h2>
        <ul>
          {servicesData.map((service) => (
            <li key={service.id} className="mb-6">
              <h3 className="text-2xl font-semibold">{service.name}</h3>
              <p>{service.description}</p>
              <p className="mt-2">
                <strong>Estimated Time:</strong> {service.estimatedTime}
              </p>
              <p>
                <strong>Price:</strong> {service.price}
              </p>
              <p>
                <strong>Expertise Level:</strong> {service.expertiseLevel}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 h-full">
        <Canvas
          camera={{ position: [0, 0, 13], fov: 10 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={1.3} />
          <directionalLight intensity={1} position={[500, 500, 500]} />
          <Float>
            <BeeModel ref={beeRef} />
          </Float>
          <OrbitControls />
          <Preload all />
        </Canvas>
      </div>
    </section>
  );
};

export default Services;
