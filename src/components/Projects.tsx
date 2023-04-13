import React from "react";
import NewsHomepageImg from "./../assets/project-news.webp";
import SnapLandingPage from "./../assets/snap-landing-page.webp";
import TipCalculator from "./../assets/tip-calculator.webp";
import EcommercePage from "./../assets/ecommerce-page.webp";

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
            autoPlay={true}
            emulateTouch={true}
            swipeable={false}
            showArrows={true}
            showStatus={false}
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
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-center items-center lg:justify-start lg:items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Fake Store
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Di dalam project ini saya menggunakan library React dan API
                  public milik{" "}
                  <a
                    href="https://fakestoreapi.com/"
                    className="underline hover:text-secondary"
                    target="_blank"
                  >
                    Fake Store API
                  </a>
                  . Lalu, memanggilnya dengan metode fetch memakai library
                  axios. Setelah berhasil mendapatkan data dari API, saya
                  menampilkan data tersebut ke dalam HTML dan styling memakai
                  TailwindCSS.
                  <br />
                  <br />
                  Di project ini juga saya memakai library Redux untuk
                  mempermudah dalam management state.
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
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-center items-center lg:justify-start lg:items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Tip Calculator App
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Project kalkulator sederhana untuk menghitung persenan tip
                  yang harus dikeluarkan ketika makan di rumah makan.
                  <br />
                  <br />
                  Project ini merupakan salah satu tantangan dari website{" "}
                  <a
                    href="https://www.frontendmentor.io/"
                    target="_blank"
                    className="underline hover:text-secondary"
                  >
                    Front End Mentor.
                  </a>
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
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-center items-center lg:justify-start lg:items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  Snap Landing Page
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Project ini hanya dibuat dengan HTML, dan CSS. <br />
                  <br />
                  Project ini merupakan salah satu tantangan dari website{" "}
                  <a
                    href="https://www.frontendmentor.io/"
                    target="_blank"
                    className="underline hover:text-secondary"
                  >
                    Front End Mentor.
                  </a>
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
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-3 justify-center items-center lg:justify-start lg:items-start lg:px-3">
              <article>
                <h2 className="text-primary text-left text-3xl lg:text-4xl font-bold">
                  News Homepage
                </h2>
                <p className="text-third text-left text-lg mt-3">
                  Project ini dibuat dengana HTML, dan CSS. Di dalam project ini
                  saya belajar banyak tentang grid. <br />
                  <br />
                  Project ini merupakan salah satu tantangan dari website{" "}
                  <a
                    href="https://www.frontendmentor.io/"
                    target="_blank"
                    className="underline hover:text-secondary"
                  >
                    Front End Mentor
                  </a>
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
