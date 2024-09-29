import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
      id="servicebanner"
        className={`servicesections absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Need Help? <img src="https://readme-typing-svg.herokuapp.com?font=Rightous&size=60&duration=2500&pause=256&color=af25f7&background=FFFFFF00&vCenter=true&random=false&width=1000&height=70&lines=AI+Chatbots;ML+Models;Confusing+Projects" />
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Implementing AI research, Generative <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;