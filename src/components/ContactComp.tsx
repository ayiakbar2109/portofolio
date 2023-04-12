import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";
import { Button } from "@material-tailwind/react";

export default function ContactComp() {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto max-w-[48rem] mt-36 lg:mt-64 mb-36"
      id="contact"
    >
      <div className="text-center">
        <motion.h2
          className="text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          variants={textVariant(0.5)}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          variants={textVariant(0.8)}
          className="mt-6 text-lg leading-8 text-third"
        >
          Saat ini saya sedang mencari kesempatan bekerja untuk mendapatkan
          lebih banyak pengalaman di dalam industri. Apabila Anda memiliki
          pertanyaan atau sekadar ingin menyapa, saya akan berusaha untuk segera
          membalasnya. Terima kasih.
        </motion.p>
        <motion.div
          variants={textVariant(1.1)}
          className="mt-10 flex items-center justify-center gap-x-6"
        >
          <a href="mailto:ayiakbarmaulana21@gmail.com">
            <Button
              variant="outlined"
              className="flex items-center gap-2 py-1.5 px-3.5 text-base font-normal border-2 border-third text-third hover:bg-third/10 hover:-translate-y-1"
            >
              Say hello
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
