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
  const data = [
    {
      id: 1,
      title: "Fake Store",
      desc: "Di dalam project ini saya menggunakan library React dan API public milik FakeStore API. Lalu, memanggilnya dengan metode fetch memakai library axios. Setelah berhasil mendapatkan data dari API, saya menampilkan data tersebut ke dalam HTML dan styling memakai TailwindCSS. Di project ini juga saya memakai library Redux untuk mempermudah dalam management state.",
      image: EcommercePage,
      repoLink: "https://github.com/ayiakbar2109/project-eccomerce",
      liveDemo: "https://fakestore-iota.vercel.app/",
    },
    {
      id: 2,
      title: "Tip Calculator App",
      desc: "Project kalkulator sederhana untuk menghitung persenan tip yang harus dikeluarkan ketika makan di rumah makan.",
      image: TipCalculator,
      repoLink: "https://github.com/ayiakbar2109/tip-calculator-app",
      liveDemo: "https://ayiakbar2109.github.io/tip-calculator-app/",
    },
    {
      id: 3,
      title: "Snap Landing Page",
      desc: "Project landing page sederhana dibuat dengan HTML, dan CSS.",
      image: SnapLandingPage,
      repoLink: "https://github.com/ayiakbar2109/intro-section-landpage",
      liveDemo: "https://ayiakbar2109.github.io/intro-section-landpage/",
    },
  ];
  return (
    <section>
      <motion.div
        className="flex flex-col"
        id="projects"
        // variants={fadeIn("right", "spring", 1, 1.5)}
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
            {data.map((project, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col xl:grid xl:grid-cols-2 gap-3 xl:gap-12 lg:px-4  xl:justify-start xl:items-start"
                >
                  <div className="flex flex-col justify-center items-center mb-6 lg:mb-12">
                    <img
                      src={project.image}
                      className="px-3 md:px-20 xl:px-0"
                    />
                  </div>
                  <article className="md:px-6">
                    <h2 className="text-primary text-left text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-7xl">
                      {project.title}
                    </h2>
                    <p className="text-third text-left text-base md:text-lg mt-3 2xl:mt-6 2xl:text-3xl">
                      {project.desc}
                    </p>
                    <div className="flex items-end justify-start mt-4 2xl:mt-5 text-left gap-5 mb-12 xl:mb-0">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <HiCode className="w-8 h-8 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        className="cursor-pointer"
                      >
                        <HiOutlineDesktopComputer className="w-8 h-8 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
}
