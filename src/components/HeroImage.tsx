import React from "react";
import HeroImg from "./../assets/Image3.png";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import Typed from "typed.js";
import { motion } from "framer-motion";
import {
  textVariant,
  slideIn,
  staggerContainer,
  fadeIn,
} from "../utils/motion";

export default function HeroImage() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Front-end Dev.", "Husband."],
      startDelay: 400,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section>
      <motion.div
        className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col gap-3 lg:gap-5 items-center justify-center tracking-wide leading-relaxed">
          <motion.p
            className="text-primary font-medium text-xl lg:text-2xl"
            variants={textVariant(1.1)}
          >
            <span className="text-secondary">Hello World!</span> selamat datang.
          </motion.p>
          <motion.h1
            className="text-primary font-extrabold text-3xl lg:text-[2.15rem] xl:text-[2.65rem]"
            variants={textVariant(1.3)}
          >
            I am a <span ref={el}></span>
          </motion.h1>{" "}
          <motion.div
            className="relative my-12"
            variants={fadeIn("up", "tween", 1.8, 0.8)}
          >
            <a href="#about">
              <ArrowDownCircleIcon className="text-primary w-28 animate-bounce" />
            </a>
          </motion.div>
        </div>
        <motion.div
          className="flex items-center justify-end lg:h-[90%]"
          variants={fadeIn("down", "tween", 0.5, 0.8)}
        >
          <img src={HeroImg} className="h-[70%] lg:h-[95%]" alt="hero image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
