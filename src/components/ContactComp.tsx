import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import { Button } from "@material-tailwind/react";

export default function ContactComp() {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mt-36 lg:mt-64 mb-36"
      id="contact"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <motion.h2
          className="text-primary text-center font-semibold text-4xl md:text-6xl 2xl:text-8xl"
          variants={textVariant(0.6)}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={textVariant(0.8)}
          className="text-third text-center md:text-lg 2xl:text-4xl max-w-xl 2xl:max-w-[81rem] text-base"
        >
          Saat ini saya sedang mencari kesempatan bekerja untuk mendapatkan
          lebih banyak pengalaman di dalam industri. Apabila Anda memiliki
          pertanyaan atau sekadar ingin menyapa, saya akan berusaha untuk segera
          membalasnya. Terima kasih.
        </motion.p>
        <motion.div
          variants={textVariant(1.1)}
          className="mt-6 flex items-center justify-center gap-x-6"
        >
          <a href="mailto:ayiakbarmaulana21@gmail.com">
            <Button
              variant="outlined"
              className="flex items-center gap-2 py-1.5 px-3.5 2xl:py-4 2xl:px-6 text-lg 2xl:text-4xl font-normal border-2 border-third text-third hover:bg-third/10 hover:-translate-y-1"
            >
              Say hello
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
