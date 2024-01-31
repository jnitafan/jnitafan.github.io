import React from "react";
import { EnvelopeOpenIcon, LinkIcon } from "@heroicons/react/24/outline";
import { styles } from "../styles";
import { RobotCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      className={`flex lg:flex-row flex-col-reverse overflow-hidden items-center justify-between`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl lg:m-8 w-full"
      >
        <p className={styles.sectionSubText}>Let's build some apps.</p>
        <h3 className={styles.sectionHeadText}>
          <nobr>Contact Me</nobr>
        </h3>

        <div className="flex flex-col gap-2 mt-4">
          <a className="underline" href="mailto:jacob.nitafan@gmail.com">
            jacob.nitafan@gmail.com
            <EnvelopeOpenIcon className="inline ml-2 mb-px w-4 h-4 text-white-100" />
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/jacob-nitafan"
          >
            Message me on linkedin
            <LinkIcon className="inline ml-2 mb-px w-4 h-4 text-white-100" />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="size-[32rem]"
      >
        <RobotCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
