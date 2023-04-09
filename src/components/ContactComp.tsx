import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

export default function ContactComp() {
  const form: any = useRef();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vbx7v5t",
        "template_uh10y3j",
        form.current,
        "-RfC6dn9ad_rgqCfU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="mt-12">
      <motion.div
        className="flex flex-col"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.p
          className="text-sm lg:text-lg text-primary font-light text-center"
          variants={textVariant(0.5)}
          id="contact"
        >
          | Contact
        </motion.p>

        <form ref={form} onSubmit={sendEmail}>
          <motion.div className="mt-12" variants={fadeIn("up", "spring", 1, 1)}>
            <motion.label
              htmlFor="price"
              className="text-lg font-medium leading-6 text-primary items-start justify-start"
            >
              Name:
            </motion.label>
            <motion.input
              type="text"
              name="user_name"
              required
              className="block mt-1 rounded-lg border-0 py-1.5 pl-4 w-full text-primary ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-lg"
              placeholder="your name"
            />
          </motion.div>
          <motion.div
            className="mt-6"
            variants={fadeIn("up", "spring", 1.4, 1)}
          >
            <label
              htmlFor="price"
              className="text-lg font-medium leading-6 text-primary items-start justify-start"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="block mt-1 rounded-lg border-0 py-1.5 pl-4 w-full text-primary ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-lg"
              placeholder="you@example.com"
            />
          </motion.div>
          <motion.div
            className="mt-6"
            variants={fadeIn("up", "spring", 1.8, 1)}
          >
            <label
              htmlFor="price"
              className="text-lg font-medium leading-6 text-primary items-start justify-start"
            >
              Message:
            </label>
            <textarea
              name="message"
              className="block mt-2 rounded-lg border-0 py-1.5 pl-4 w-full text-primary ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-lg"
              placeholder="message"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="block w-full bg-secondary text-[#EAEAEA] mt-6 py-2 text-lg rounded-lg"
            variants={fadeIn("up", "spring", 2.2, 1)}
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
