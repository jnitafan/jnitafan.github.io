import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { CubeCanvas } from "./canvas";
import { technologies } from "../constants";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";

const Tech = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={styles.sectionSubText}>
          What building blocks do I have at my disposal?
        </p>
        <h2 className={styles.sectionHeadText}>Technical skills</h2>
      </motion.div>

      <div className="bg-tertiary h-96 relative mt-8">
        <CubeCanvas cubes={technologies} />
        <div className="absolute flex items-center gap-4 top-8 left-8 pointer-events-none">
          <CubeTransparentIcon className="w-12 h-12 text-secondary" />
          <p className="hidden sm:block text-">
            Click on the cubes to see what skills I have. <br />
            Click and drag to rotate.
          </p>
          <p className="block sm:hidden text-">
            Tap on the cubes to see what skills I have. <br />
            Use two fingers to navigate.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
