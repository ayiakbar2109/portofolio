import React from "react";
import NewsHomepageImg from "./../assets/project-news.png";
import {
  CodeBracketIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
export default function Projects() {
  return (
    <section>
      <motion.div
        className="flex flex-col mt-12 lg:mt-28"
        id="projects"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.p
          className="text-sm lg:text-lg text-primary font-light text-center"
          variants={textVariant(0.5)}
        >
          | Projects
        </motion.p>
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-2 lg:gap-16 mt-16">
          <motion.div
            className="flex flex-col gap-3  "
            variants={fadeIn("up", "tween", 1.1, 1)}
          >
            <img src={NewsHomepageImg} />
            <article>
              <h2 className="text-primary text-2xl font-medium">
                News Homepage
              </h2>
              <p className="text-primary text-lg font-medium mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptate asperiores, nulla magnam vitae ipsum, excepturi
                voluptates labore laudantium ullam cumque, explicabo atque enim
                eveniet temporibus praesentium a culpa! Ea.
              </p>
            </article>
            <div className="flex mt-auto justify-end items-end gap-10">
              <a
                href="https://github.com/ayiakbar2109/news-homepage"
                target="_blank"
                className="justify-end items-end"
              >
                <CodeBracketIcon className="w-6 h-6" />
              </a>
              <a
                href="https://ayiakbar2109.github.io/news-homepage/"
                target="_blank"
                className="justify-end items-end"
              >
                <ComputerDesktopIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3  "
            variants={fadeIn("up", "tween", 1.5, 1)}
          >
            <img src={NewsHomepageImg} />
            <article>
              <h2 className="text-primary text-2xl font-medium">
                News Homepage
              </h2>
              <p className="text-primary text-lg font-medium mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptate asperiores, nulla
              </p>
            </article>
            <div className="flex mt-auto justify-end items-end gap-10">
              <a
                href="https://github.com/ayiakbar2109/news-homepage"
                target="_blank"
                className="justify-end items-end"
              >
                <CodeBracketIcon className="w-6 h-6" />
              </a>
              <a
                href="https://ayiakbar2109.github.io/news-homepage/"
                target="_blank"
                className="justify-end items-end"
              >
                <ComputerDesktopIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3  "
            variants={fadeIn("up", "tween", 1.9, 1)}
          >
            <img src={NewsHomepageImg} />
            <article>
              <h2 className="text-primary text-2xl font-medium">
                News Homepage
              </h2>
              <p className="text-primary text-lg font-medium mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptate asperiores, nulla magnam vitae ipsum, excepturi
                voluptates labore laudantium ullam
              </p>
            </article>
            <div className="flex mt-auto justify-end items-end gap-10">
              <a
                href="https://github.com/ayiakbar2109/news-homepage"
                target="_blank"
                className="justify-end items-end"
              >
                <CodeBracketIcon className="w-6 h-6" />
              </a>
              <a
                href="https://ayiakbar2109.github.io/news-homepage/"
                target="_blank"
                className="justify-end items-end"
              >
                <ComputerDesktopIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3  "
            variants={fadeIn("up", "tween", 2.3, 1)}
          >
            <img src={NewsHomepageImg} />
            <article>
              <h2 className="text-primary text-2xl font-medium">
                News Homepage
              </h2>
              <p className="text-primary text-lg font-medium mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                voluptate asperiores, nulla magnam e, explicabo atque enim
                eveniet temporibus praesentium a culpa! Ea.
              </p>
            </article>
            <div className="flex mt-auto justify-end items-end gap-10">
              <a
                href="https://github.com/ayiakbar2109/news-homepage"
                target="_blank"
                className="justify-end items-end"
              >
                <CodeBracketIcon className="w-6 h-6" />
              </a>
              <a
                href="https://ayiakbar2109.github.io/news-homepage/"
                target="_blank"
                className="justify-end items-end"
              >
                <ComputerDesktopIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
