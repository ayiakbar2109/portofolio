import React from "react";
import JavascriptIcon from "./../assets/js.png";
import TypescriptIcon from "./../assets/typescript.png";
import ReactIcon from "./../assets/react.svg";
import TailwindIcon from "./../assets/icons8-tailwindcss.svg";
import NextIcon from "./../assets/next.svg";
import ViteIcon from "./../assets/vite.svg";
import FramerIcon from "./../assets/icons8-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-48.png";
import ReduxIcon from "./../assets/icons8-redux.svg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

export default function AboutComp() {
  return (
    <section>
      <motion.div
        className="flex flex-col mt-12 lg:mt-28 w-auto"
        id="about"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col justify-center items-center">
          <motion.p
            className="text-sm lg:text-lg text-primary font-light text-center"
            variants={textVariant(0.5)}
          >
            | About
          </motion.p>
          <motion.p
            className="text-primary font-thin text-lg md:text-xl lg:text-2xl text-center lg:leading-relaxed mt-4"
            variants={textVariant(1)}
          >
            Hello, nama saya Ayi Akbar Maulana. Saya adalah seorang{" "}
            <span className="text-secondary">Self-Taught Web Developer.</span>{" "}
            Saya mengetahui dan menguasai bagaimana cara membuat web menjadi{" "}
            <span className="text-secondary">Responsive</span>, mengubah atau
            men-terjemahkan design <span className="text-secondary">Figma</span>{" "}
            ke dalam baris kode, dan fetch{" "}
            <span className="text-secondary">API</span> sederhana.
          </motion.p>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-none gap-10 lg:grid-cols-2 mt-7 lg:mx-auto leading-relaxed">
          <div className="justify-center items-center">
            <motion.p
              variants={textVariant(1.2)}
              className="text-primary text-lg md:text-xl font-thin lg:text-2xl text-left"
            >
              Language:
            </motion.p>
            <div className="flex items-center gap-5 mt-3.5">
              <motion.img
                src={JavascriptIcon}
                className="w-14 lg:w-16 rounded-lg"
                variants={fadeIn("up", "spring", 1.5, 1)}
              />
              <motion.img
                src={TypescriptIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.6, 1)}
              />
            </div>
          </div>
          <div>
            <motion.p
              variants={textVariant(1.2)}
              className="text-primary text-lg md:text-xl font-thin lg:text-2xl text-left"
            >
              Library/Framework:
            </motion.p>
            <div className="flex items-center gap-5 gap-y-7 mt-3.5">
              <motion.img
                src={ReactIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.5, 1)}
              />
              <motion.img
                src={TailwindIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.6, 1)}
              />
              <motion.img
                src={FramerIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.7, 1)}
              />

              <motion.img
                src={ReduxIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.8, 1)}
              />
              <motion.img
                src={ViteIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 1.9, 1)}
              />
              <motion.img
                src={NextIcon}
                className="w-14 lg:w-16"
                variants={fadeIn("up", "spring", 2, 1)}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-12 mx-auto">
          <motion.p
            className="text-primary font-thin text-lg md:text-xl lg:text-2xl text-center leading-relaxed"
            variants={textVariant(1.6)}
          >
            <span className="italic">
              "No one is dumb who is curious. The people who don't ask questions
              remain clueless throughout their lives."
            </span>
            {"  "}
            <span className="text-secondary">Neil deGrasse Tyson.</span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
