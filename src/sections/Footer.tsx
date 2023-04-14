import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

export default function Footer() {
  return (
    <motion.footer className="w-full bg-inherit p-8" variants={footerVariants}>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-inherit text-center md:justify-between">
        <a href="/" className="text-accent">
          <h1 className="text-2xl 2xl:text-4xl font-semibold">maulana.</h1>
        </a>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#about"
              className="font-normal transition-colors text-primary text-base xl:text-xl 2xl:text-2xl hover:text-secondary focus:text-secondary"
            >
              About
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#project"
              className="font-normal transition-colors text-primary text-base xl:text-xl 2xl:text-2xl hover:text-secondary focus:text-secondary"
            >
              Projects
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#contact"
              className="font-normal transition-colors text-primary text-base xl:text-xl 2xl:text-2xl hover:text-secondary focus:text-secondary"
            >
              Contact
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-primary" />
      <Typography className="text-center font-normal text-primary text-base xl:text-xl 2xl:text-2xl">
        &copy; 2023 All Right Reserved
      </Typography>
    </motion.footer>
  );
}
