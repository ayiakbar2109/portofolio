import React from "react";
import NewsHomepageImg from "./../assets/project-news.webp";
import SnapLandingPage from "./../assets/snap-landing-page.webp";
import TipCalculator from "./../assets/tip-calculator.webp";
import EcommercePage from "./../assets/ecommerce-page.webp";

import { motion } from "framer-motion";
import { HiOutlineDesktopComputer, HiCode } from "react-icons/hi";
import htmlIcon from "./../assets/icons8-html-5.svg";
import javascriptIcon from "./../assets/js.png";
import reactIcon from "./../assets/react.svg";
import reduxIcon from "./../assets/icons8-redux.svg";
import tailwindIcon from "./../assets/icons8-tailwindcss.svg";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "Fake Store",
      subtitle: "Fake Store API",
      desc: "Ini adalah sebuah mini website e-commerce. Di sini, pengguna dapat menambahkan produk ke dalam keranjang. Setelah produk ditambahkan ke dalam keranjang, pengguna dapat menambahkan jumlah barang yang ingin dibeli, dan secara otomatis, jumlah yang harus dibayar akan dihitung.",
      image: EcommercePage,
      repoLink: "https://github.com/ayiakbar2109/project-eccomerce",
      liveDemo: "https://fakestore-iota.vercel.app/",
      technology: [
        htmlIcon,
        javascriptIcon,
        reactIcon,
        reduxIcon,
        tailwindIcon,
      ],
    },
    {
      id: 2,
      title: "Tip Calculator App",
      subtitle: "Front-End Mentor",
      desc: "Sebuah project kalkulator sederhana untuk menghitung persentase tip yang harus diberikan saat makan di restoran. Pengguna dapat memasukkan total harga makanan dan persentase tip yang ingin diberikan, dan kalkulator akan secara otomatis menghitung jumlah tip yang harus diberikan. Dengan demikian, pengguna dapat dengan mudah mengetahui jumlah total yang harus dibayarkan, termasuk tip.",
      image: TipCalculator,
      repoLink: "https://github.com/ayiakbar2109/tip-calculator-app",
      liveDemo: "https://ayiakbar2109.github.io/tip-calculator-app/",
      technology: [htmlIcon, javascriptIcon, reactIcon, tailwindIcon],
    },
    {
      id: 3,
      title: "Snap Landing Page",
      subtitle: "Front-End Mentor",
      desc: "Project landing page sederhana yang dibuat dengan HTML dan CSS. Desain halaman ini didasarkan pada keindahan dan kemudahan penggunaan, dengan penggunaan warna, font, dan tata letak yang menarik perhatian. ",
      image: SnapLandingPage,
      repoLink: "https://github.com/ayiakbar2109/intro-section-landpage",
      liveDemo: "https://ayiakbar2109.github.io/intro-section-landpage/",
      technology: [htmlIcon, tailwindIcon],
    },
  ];
  return (
    <section>
      <div className="flex flex-col" id="projects">
        <div className="flex flex-col mt-10 lg:gap-16 lg:mt-16">
          {data.map((project, index) => {
            return (
              <div
                key={index}
                className="flex flex-col-reverse gap-3 lg:px-4  lg:justify-start lg:items-start border-b-2 last:border-b-0 border-third/50"
              >
                <article className="lg:grid lg:grid-cols-2 lg:gap-3 justify-start items-start">
                  <div>
                    <h2 className="text-primary text-left text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold 2xl:text-7xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 lg:mt-4 text-third/70 text-lg xl:text-xl 2xl:text-3xl">
                      {project.subtitle}
                    </p>
                  </div>
                  <div>
                    <p className="text-third text-left text-base md:text-lg mt-3 2xl:mt-6 2xl:text-3xl">
                      {project.desc}
                    </p>
                    <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:items-center mt-9 lg:mt-5 2xl:mt-8">
                      <div className="flex gap-5">
                        <a
                          href={project.repoLink}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <HiCode className="w-7 h-7 lg:w-9 lg:h-9 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          className="cursor-pointer"
                        >
                          <HiOutlineDesktopComputer className="w-7 h-7 lg:w-9 lg:h-9 2xl:w-12 2xl:h-12 font-semibold text-third hover:text-secondary transition-colors ease-in-out hover:-translate-y-1" />
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {project.technology?.map((item, index) => (
                          <img
                            src={item}
                            key={index}
                            className="w-8 h-8 lg:w-10 lg:h-10"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-10 text-left gap-5 lg:mb-12 xl:mb-0"></div>
                </article>
                <div className="flex flex-col mx-auto justify-center items-center mt-12 lg:mt-0 mb-6 lg:mb-12">
                  <img src={project.image} className="px-3 md:px-20 xl:px-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
