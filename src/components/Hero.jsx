import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { MeCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 pt-20 xs:pt-32 max-w-7xl mx-auto flex flex-row items-start lg:items-center gap-5 bg-gradient-to-r from-primary to-transparent lg:bg-none`}
      >
        <div>
          <motion.h1
            variants={fadeIn("up", "spring", 1, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-main font-serif">Jacob</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "spring", 2, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-main font-serif">Jacob</span>
          </motion.p>

          <motion.p
            variants={fadeIn("up", "spring", 3, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-offmain font-serif">Jacob</span>
          </motion.p>

          <motion.p
            variants={fadeIn("up", "spring", 4, 1)}
            initial="hidden"
            animate="show"
            className={`${styles.heroSubText} italic font-light mt-4`}
          >
            I'm crafting experiences for the{" "}
            <strong className="font-bold">digital world</strong>.
          </motion.p>
        </div>
      </div>

      <div className="h-screen lg:w-1/2 translate-y-48 lg:translate-y-0 lg:float-right">
        <MeCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ChevronDoubleDownIcon className="w-12 h-12 text-secondary" />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
