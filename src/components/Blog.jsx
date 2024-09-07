import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, body, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full beige-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

        <p className="text-white text-[10px] text-center">
          {body}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have to say</p>
        <h2 className={styles.sectionHeadText}>
          Blogs<span className="relative">.
            {/* Doodle and Label */}
            <span className="absolute doodle-container">
              <svg
                className="doodle-arrow"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 10c4 8 12-8 20 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="doodle-text">
                My opinions are unique and worth something, I feel.
              </span>
            </span>
          </span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        There is a lot of intelligence in the world, no doubt. I'm not even some super successful rich guy who's
        story will inspire thousands. I'm a regular dude who is morphed somehow between extrovertism and autism.
        I've got a perky eyesight and often a way to look at things that others around me don't. You might find my
        blogs interesting on reading and if you do, do share them and let me know your thoughts below. Happy reading!!
      </motion.p>
    </>
  );
};

export default SectionWrapper(Blog, "blog");