import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-64 w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full blue-orange-gradient p-px rounded-2xl shadow-lg"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-2xl py-5 px-12 min-h-72 flex justify-center items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="size-42 object-contain rounded-xl shadow-lg"
          />
          <h3 className="text-white text-xl font-bold text-center mt-4">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div varients={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-lg max-w-3xl leading-8"
      >
        Hi, I'm Jacob. Thanks for checking out my portfolio. I
        specalize in front-end development, focused on creating websites of all
        different shapes, types and sizes. I also excel at multimedia creation
        as well as game design and development. Take a moment to look around and see my work
        history and all the things I have created and have been a part of.
      </motion.p>

      <div className="mt-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
