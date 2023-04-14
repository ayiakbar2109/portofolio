import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.div
        className=" mt-28 lg:mt-52"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <article className="flex flex-col gap-3 justify-center items-center">
          <motion.h2
            className="text-primary text-center font-semibold text-4xl md:text-6xl 2xl:text-8xl"
            variants={textVariant(0.9)}
          >
            About
          </motion.h2>
          <motion.p
            className="text-third text-center md:text-lg 2xl:text-4xl max-w-4xl 2xl:max-w-[81rem] text-base"
            variants={textVariant(1.2)}
          >
            Hello, perkenalkan nama saya Ayi Akbar Maulana. Saya adalah seorang
            Self-Taught Web Developer dan juga seorang suami. Perjalanan sebagai
            seorang programmer saya awali dari sebuah hobby, lalu mendapat
            pekerjaan pertama sebagai front-end developer pada tahun 2016.
            <br />
            <br />
            Industri ini selalu berubah dan berkembang dengan cepat, namun saya
            merasa siap untuk menerima tantangan dan mempelajari hal-hal baru
            setiap harinya. Saya yakin bahwa dengan semangat dan dedikasi yang
            saya miliki, saya dapat mencapai segala tujuan yang saya impikan.
          </motion.p>
        </article>
      </motion.div>
    </section>
  );
}
