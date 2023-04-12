import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import Illustration from "./../assets/Drawkit.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.div
        className="flex flex-col gap-3 lg:grid lg:grid-cols-2 mt-20 lg:mt-28 lg:gap-5 justify-start items-stretch"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div>
          <motion.img
            variants={fadeIn("right", "spring", 1, 2)}
            src={Illustration}
            alt="Illustration image"
          />
        </div>
        <article className="flex flex-col gap-3">
          <motion.h2
            className="text-primary font-bold text-4xl lg:text-6xl"
            variants={textVariant(0.7)}
          >
            About
          </motion.h2>
          <motion.p className="text-third  text-lg" variants={textVariant(0.9)}>
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
