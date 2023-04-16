import HeroImg from "./../assets/Drawkit.png";

import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";
import { Button } from "@material-tailwind/react";
import { CgArrowRight } from "react-icons/cg";

export default function HeroImage() {
  return (
    <section>
      <motion.div
        className="flex flex-col gap-8 2xl:gap-24 md:grid md:grid-cols-2 justify-center items-center mt-32 2xl:mt-48"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col items-start justify-start gap-3 md:gap-4 lg:gap-3 xl:gap-5 2xl:gap-14">
          <motion.p
            className="text-secondary font-medium text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl mb-10"
            variants={textVariant(0.8)}
          >
            hello world!
          </motion.p>
          <motion.h1
            className="text-primary font-bold text-[2rem] md:text-4xl lg:text-[2.6rem] xl:text-[3.3rem] 2xl:text-[5.8rem] whitespace-nowrap"
            variants={textVariant(0.9)}
          >
            I build <span className="text-secondary">web</span> with love.
          </motion.h1>
          <motion.p
            className="text-third/90 text-lg lg:text-base xl:text-2xl 2xl:text-4xl"
            variants={textVariant(1)}
          >
            I'm Ayi Akbar Maulana, a Front-End Web Developer based in Indonesia.
          </motion.p>
          <motion.div variants={textVariant(1.1)} className="">
            <a href="#project">
              <Button
                variant="outlined"
                className="flex items-center font-mono gap-2 py-1.5 px-3.5 2xl:py-4 2xl:px-6 text-base lg:text-lg 2xl:text-4xl font-normal border-2 border-third text-primary hover:bg-third/10 hover:-translate-y-1"
              >
                Projects
                <CgArrowRight className="h-6 w-6 2xl:h-10 2xl:w-10 text-third" />
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="flex items-end justify-center w-full h-full"
          variants={textVariant(1.2)}
        >
          <img src={HeroImg} className="w-full h-full " alt="hero image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
