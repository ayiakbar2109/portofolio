import HeroImg from "./../assets/Drawkit.png";

import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";
import { Button } from "@material-tailwind/react";
import { CgArrowRight } from "react-icons/cg";

export default function HeroImage() {
  return (
    <section>
      <motion.div
        className="flex flex-col gap-8 2xl:gap-24 md:grid md:grid-cols-2 justify-end items-end mt-32 2xl:mt-48"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col items-start justify-start gap-5 md:gap-3 lg:gap-4 xl:gap-7 2xl:gap-14">
          <motion.p
            className="text-secondary font-medium text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl"
            variants={textVariant(0.4)}
          >
            hello world!
          </motion.p>
          <motion.h1
            className="text-primary font-bold text-[2rem] leading-[2rem] md:text-4xl lg:text-[2.6rem] xl:text-[3.3rem] 2xl:text-[5.8rem] whitespace-nowrap"
            variants={textVariant(0.5)}
          >
            ayi akbar maulana
          </motion.h1>
          <motion.h1
            className="text-third font-bold text-[2rem] leading-[2rem]  md:text-4xl lg:text-[2.6rem] xl:text-[3.3rem] 2xl:text-[5.8rem]  whitespace-nowrap  lg:-mt-1.5 2xl:mt-0"
            variants={textVariant(0.6)}
          >
            i build <span className="text-secondary">web</span> with love
          </motion.h1>
          <motion.p
            className="text-third md:text-base lg:text-base xl:text-lg 2xl:text-4xl"
            variants={textVariant(0.7)}
          >
            Saat ini, saya mengkhususkan diri dalam beberapa bidang, termasuk
            front-end developer, desain UI/UX, web responsif, dan pengembangan
            visual.
          </motion.p>
          <motion.div variants={textVariant(0.8)} className="">
            <a href="#project">
              <Button
                variant="outlined"
                className="flex gap-2 items-center px-4 py-1.5  font-mono text-base  text-primary transition-all duration-300 xl:text-base 2xl:text-xl border-2 border-third hover:bg-third/10 hover:-translate-y-1"
              >
                Projects{" "}
                <CgArrowRight className="h-6 w-6 2xl:h-10 2xl:w-10 text-primary" />
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="flex items-end justify-center w-full h-full"
          variants={fadeIn("down", "spring", 0.8, 1.5)}
        >
          <img src={HeroImg} className="w-full h-full " alt="hero image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
