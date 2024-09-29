import React, { useEffect } from "react";
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'https://cdn.skypack.dev/gsap';
import { servicesData } from '../constants';
import { styles } from '../styles'; // Ensure you import styles
import { Tilt } from "react-tilt"; // Import Tilt for service cards
import { motion } from "framer-motion"; // Import motion for animations
import { fadeIn } from "../utils/motion"; // Import fadeIn for animations

const ServiceCard = ({ index, icon, name, description, estimatedTime, oldPrice, price, expertiseLevel, toolsUsed }) => (
  <Tilt className='w-full' style={{ height: '80vh' }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.15, 0.25)}
      className='w-full beige-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 h-full flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[25px] font-bold text-center'>{name}</h3>
        <p className="text-white text-[18px] text-center">{description}</p>
        <p className="text-white text-[18px] text-left"><strong>Estimated Time:</strong> {estimatedTime}</p>
        <p className="text-white text-[18px] text-left">
          <strong>Price:</strong> <span style={{ textDecoration: 'line-through', color: 'red' }}>{oldPrice}</span> {price}
        </p>
        <p className="text-white text-[18px] text-left"><strong>Tools Used:</strong></p>
        <ul className="text-white text-[18px] text-left">
          {toolsUsed.map((tool, index) => (
            <li key={index}>• {tool}</li>
          ))}
        </ul>
        <button 
          className="mt-4 bg-[#3a91a3] text-white py-2 px-4 rounded" 
          onClick={() => window.location.href='/#contact'} // Redirect to contact page
        >
          Contact Us
        </button>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  useEffect(() => {
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 13;

    // Set up scene
    const scene = new THREE.Scene();
    let robot;
    let mixer;
    const loader = new GLTFLoader();

    loader.load(
      '/tour_ia.glb',
      function (gltf) {
        robot = gltf.scene;
        robot.position.x = 1;
        robot.position.y = -0.5;
        robot.position.z = 3;
        robot.rotation.y = -0.25;
        scene.add(robot);
        robot.scale.set(0.005, 0.005, 0.005);

        mixer = new THREE.AnimationMixer(robot);
        if (gltf.animations.length > 0) {
          mixer.clipAction(gltf.animations[1]).play();
        }
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      function (error) {
        console.error('An error happened:', error);
      }
    );

    const existingCanvas = document.getElementById('container3D').querySelector('canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container3D').appendChild(renderer.domElement);

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0x978BB1, 1.3);
    scene.add(ambientLight);

    const topLight = new THREE.DirectionalLight(0xC7BEDC, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);

    const reRender3D = () => {
      requestAnimationFrame(reRender3D);
      renderer.render(scene, camera);
      if(mixer) mixer.update(0.0069);
    };
    reRender3D();

    let arrPositionModel = [
      {
          id: 'servicebanner',
          position: {x: 1, y: -0.5, z: 3},
          rotation: {x: 0, y: -0.25, z: 0}
      },
      {
          id: "service1",
          position: { x: -1, y: -0.5, z: 0 },
          rotation: { x: 0, y: 0.32, z: 0 },
      },
      {
          id: "service2",
          position: { x: 1, y: -0.5, z: 0 },
          rotation: { x: 0, y: -0.32, z: 0 },
      },
      {
          id: "service3",
          position: { x: -1, y: -0.5, z: 0 },
          rotation: { x: 0, y: 0.32, z: 0 },
      },
  ];

  const modelMove = () => {
    const servicesections = document.querySelectorAll('.servicesections');
    let currentSection;
    servicesections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 3) {
        currentSection = section.id;
      }
    });

    let position_active = arrPositionModel.findIndex(
      (val) => val.id == currentSection
    );

    if (position_active >= 0) {
      let new_coordinates = arrPositionModel[position_active];
      gsap.to(robot.position, {
          x: new_coordinates.position.x,
          y: new_coordinates.position.y,
          z: new_coordinates.position.z,
          duration: 3,
          ease: "power1.out"
      });
      gsap.to(robot.rotation, {
          x: new_coordinates.rotation.x,
          y: new_coordinates.rotation.y,
          z: new_coordinates.rotation.z,
          duration: 3,
          ease: "power1.out"
      })
    }
  }

  window.addEventListener('scroll', () => {
    if (robot) {
        modelMove();
    }
})
  }, []);

  return (
    <section className="min-h-screen flex flex-col pt-20" style={{ background: "#FFDDC2" }}>
      <div className='flex flex-col'>
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`servicesections flex flex-row ${index % 2 === 1 ? 'flex-row' : 'flex-row-reverse'} section h-full`}
          >
            <div className="w-1/2 h-full p-10 flex items-center justify-center">
              <ServiceCard index={index} {...service} />
            </div>
            <div className="w-1/2 h-full">
              <div id="container3D" className="w-full h-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
