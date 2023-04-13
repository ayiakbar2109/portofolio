import HeroImg from "./../assets/heroImage.webp";
import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";
import { Button } from "@material-tailwind/react";
import { CgArrowLongRight } from "react-icons/cg";

export default function HeroImage() {
  return (
    <section>
      <motion.div
        className="flex flex-col gap-8 md:grid md:grid-cols-2 justify-start items-start mt-32"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col items-start justify-start gap-2 lg:gap-4">
          <motion.p
            className="text-primary font-medium text-lg lg:text-lg"
            variants={textVariant(0.5)}
          >
            <span className="text-secondary">hello world!</span>
          </motion.p>
          <motion.h1
            className="text-primary font-bold text-[2rem] leading-[2rem]  md:text-[2.7rem] md:leading-[1] lg:text-5xl xl:text-6xl whitespace-nowrap"
            variants={textVariant(0.7)}
          >
            ayi akbar maulana
          </motion.h1>
          <motion.h1
            className="text-third font-bold text-[2rem] leading-[2rem]  md:text-[2.55rem] md:leading-[1] lg:text-5xl xl:text-6xl whitespace-nowrap"
            variants={textVariant(0.8)}
          >
            i build <span className="text-secondary">web</span> with love
          </motion.h1>
          <motion.p
            className="text-third font-medium text-base md:text-lg w-[95%]"
            variants={textVariant(0.9)}
          >
            saya menemukan minat saya dalam bidang web programming. Saat ini,
            saya mengkhususkan diri dalam beberapa bidang, termasuk front-end
            developer, desain UI/UX, web responsif, dan pengembangan visual.
          </motion.p>
          <motion.div variants={textVariant(1.1)} className="">
            <a href="#project">
              <Button className="flex items-center gap-2 py-1.5 px-3.5 text-base font-normal bg-third text-[#EEEEEE] hover:-translate-y-0.5">
                Go to Project{" "}
                <CgArrowLongRight className="h-8 w-8 text-[#EEEEEE] font-normal" />
              </Button>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="w-full"
          variants={fadeIn("right", "tween", 1.3, 0.8)}
        >
          <img src={HeroImg} className="w-full" alt="hero image" />
        </motion.div>
      </motion.div>
    </section>
  );
}
