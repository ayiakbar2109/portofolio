import React from "react";
import NewsHomepageImg from "./../assets/project-news.png";
import SnapLandingPage from "./../assets/snap-landing-page.png";
import TipCalculator from "./../assets/tip-calculator.png";
import EcommercePage from "./../assets/ecommerce-page.png";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HiOutlineDesktopComputer, HiCode } from "react-icons/hi";

export default function Projects() {
  return (
    <section>
      <motion.div
        className="flex flex-col"
        id="projects"
        variants={fadeIn("right", "spring", 0.5, 0.75)}
      >
        <div className="flex flex-col mt-10 lg:gap-16 lg:mt-16">
          <Carousel
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            stopOnHover={true}
            infiniteLoop={true}
            showThumbs={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = {
                marginLeft: 10,
                color: "#00ADB5",
                cursor: "pointer",
              };
              const style = isSelected
                ? { ...defStyle, color: "#222831" }
                : { ...defStyle };
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  // value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                  className="text-3xl lg:text-4xl font-bold"
                >
                  .
                </span>
              );
            }}
          >
            {/* Fake Store Projects */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-start items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Fake Store
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  voluptate asperiores, nulla magnam vitae ipsum, excepturi
                  voluptates labore laudantium ullam cumque, explicabo atque
                  enim eveniet temporibus praesentium a culpa! Ea.
                </p>
                <div className="flex mt-3 text-left gap-5 mb-12 lg:mb-0">
                  <a
                    href="https://github.com/ayiakbar2109/project-eccomerce"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiCode className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://fakestore-iota.vercel.app/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiOutlineDesktopComputer className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                </div>
              </article>
              <div className="mb-6 lg:mb-12">
                <img src={EcommercePage} className="" />
              </div>
            </div>

            {/* Calculator App Projects */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-start items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Tip Calculator App
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  voluptate asperiores, nulla magnam vitae ipsum, excepturi
                  voluptates labore laudantium ullam cumque, explicabo atque
                  enim eveniet temporibus praesentium a culpa! Ea.
                </p>
                <div className="flex mt-3 text-left gap-5 mb-12 lg:mb-0">
                  <a
                    href="https://github.com/ayiakbar2109/tip-calculator-app"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiCode className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://ayiakbar2109.github.io/tip-calculator-app/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiOutlineDesktopComputer className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                </div>
              </article>
              <div className="mb-6 lg:mb-12">
                <img src={TipCalculator} className="" />
              </div>
            </div>

            {/* Snap Landing Page */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-start items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Snap Landing Page
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  voluptate asperiores, nulla magnam vitae ipsum, excepturi
                  voluptates labore laudantium ullam cumque, explicabo atque
                  enim eveniet temporibus praesentium a culpa! Ea.
                </p>
                <div className="flex mt-3 text-left gap-5 mb-12 lg:mb-0">
                  <a
                    href="https://github.com/ayiakbar2109/intro-section-landpage"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiCode className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://ayiakbar2109.github.io/intro-section-landpage/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiOutlineDesktopComputer className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                </div>
              </article>
              <div className="mb-6 lg:mb-12">
                <img src={SnapLandingPage} className="" />
              </div>
            </div>

            {/* News Homepage Projects */}
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-start items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  News Homepage
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                  voluptate asperiores, nulla magnam vitae ipsum, excepturi
                  voluptates labore laudantium ullam cumque, explicabo atque
                  enim eveniet temporibus praesentium a culpa! Ea.
                </p>
                <div className="flex mt-3 text-left gap-5 mb-12 lg:mb-0">
                  <a
                    href="https://github.com/ayiakbar2109/news-homepage"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiCode className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                  <a
                    href="https://ayiakbar2109.github.io/news-homepage/"
                    target="_blank"
                    className="cursor-pointer"
                  >
                    <HiOutlineDesktopComputer className="w-8 h-8 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                  </a>
                </div>
              </article>
              <div className="mb-6 lg:mb-12">
                <img src={NewsHomepageImg} className="" />
              </div>
            </div>
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
}
