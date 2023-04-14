import HeroImg from "./../assets/heroImage.webp";
import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";
import { Button } from "@material-tailwind/react";
import { CgArrowRight } from "react-icons/cg";

export default function HeroImage() {
  return (
    <section>
      <motion.div
        className="flex flex-col gap-8 2xl:gap-36 md:grid md:grid-cols-2 justify-start items-start mt-32 2xl:mt-48"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col items-start justify-start gap-5 md:gap-3 lg:gap-4 xl:gap-7 2xl:gap-16">
          <motion.p
            className="text-secondary font-medium text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl"
            variants={textVariant(0.5)}
          >
            hello world!
          </motion.p>
          <motion.h1
            className="text-primary font-bold text-[2rem] leading-[2rem] md:text-4xl lg:text-[2.7rem] xl:text-[3.5rem] 2xl:text-[5.8rem] whitespace-nowrap"
            variants={textVariant(0.7)}
          >
            ayi akbar maulana
          </motion.h1>
          <motion.h1
            className="text-third font-bold text-[2rem] leading-[2rem]  md:text-4xl lg:text-[2.7rem] xl:text-[3.5rem] 2xl:text-[5.8rem]  whitespace-nowrap lg:mt-0 xl:-mt-1.5"
            variants={textVariant(0.8)}
          >
            i build <span className="text-secondary">web</span> with love
          </motion.h1>
          <motion.p
            className="text-third md:text-base lg:text-base xl:text-2xl 2xl:text-4xl"
            variants={textVariant(0.9)}
          >
            saya menemukan minat saya dalam bidang web programming. Saat ini,
            saya mengkhususkan diri dalam beberapa bidang, termasuk front-end
            developer, desain UI/UX, web responsif, dan pengembangan visual.
          </motion.p>
          <motion.div variants={textVariant(1.1)} className="">
            <a href="#project">
              <Button className="flex items-center rounded-lg gap-1 2xl:gap-6 py-1.5 px-3.5 text-base xl:text-xl 2xl:text-3xl 2xl:py-3 2xl:px-5 font-normal bg-third text-[#EEEEEE] hover:-translate-y-0.5">
                Projects{" "}
                <CgArrowRight className="h-6 w-6 2xl:h-10 2xl:w-10 text-[#EEEEEE] font-no rmal" />
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="w-full"
          variants={fadeIn("right", "tween", 1.3, 0.8)}
        >
          <img src={HeroImg} className="w-full " alt="hero image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
