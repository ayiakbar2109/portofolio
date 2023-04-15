import { staggerContainer, textVariant } from "../utils/motion";
import AboutImage from "./../assets/heroImage.webp";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
export default function About() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <section id="about">
      <motion.div
        className="flex flex-col-reverse xl:grid xl:grid-cols-2 xl:gap-8 justify-start items-start mt-28 lg:mt-52"
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <article className="flex flex-col gap-3 justify-start items-start">
          <motion.h2
            className="text-primary text-left font-semibold text-4xl md:text-6xl 2xl:text-8xl"
            variants={textVariant(0.6)}
          >
            About
          </motion.h2>
          <motion.article
            className="text-third text-left md:text-lg 2xl:text-3xl text-base"
            variants={textVariant(0.8)}
          >
            <p className="xl:max-h-[21rem] 2xl:max-h-[29.5rem] xl:overflow-hidden">
              Hello, perkenalkan nama saya Ayi Akbar Maulana. Saya adalah
              seorang Self-Taught Web Developer dan juga seorang suami.
              Perjalanan sebagai seorang programmer saya awali dari sebuah
              hobby, lalu mendapat pekerjaan pertama sebagai front-end web
              developer pada tahun 2016.
              <br />
              <br />
              Pada saat itu, saya harus menghadapi kenyataan yang pahit ketika
              di-PHK secara massal setelah hanya bekerja selama satu tahun
              sebagai front-end web developer. Semua cita-cita dan impian saya
              hancur begitu saja. Saya terpaksa kembali ke kota asal dan
              bergabung dengan usaha keluarga di bidang Food & Beverages.
              <br />
              <br />
              Saya merasa sangat berat hati dan kehilangan semangat untuk
              mengejar karir sebagai seorang web developer. Namun, setelah
              berjuang selama lima tahun di dunia usaha kecil menengah,
              tiba-tiba mimpi itu kembali muncul dalam hati saya.
              <br /> <br />
              Saat itulah saya menemukan konten Pak Dhika di Youtube Web
              Programming Unpas. Melihat Pak Dhika berbicara dengan penuh
              semangat dan passion tentang dunia web programming membuat hati
              saya terinspirasi dan semangat saya kembali membara.
              <br />
              <br />
              Saya merasa sangat terkesan dan terharu melihat betapa luar biasa
              dunia programming dan web development ini. Saya merasa yakin dan
              percaya bahwa di dunia ini masih banyak peluang yang tersedia bagi
              saya untuk mengembangkan karir di bidang yang selama ini menjadi
              impian saya.
              <br />
              <br />
              Sekarang, setelah beberapa tahun berlalu, saya merasa sangat
              bersyukur dan bangga telah mengambil langkah untuk kembali
              mengejar mimpi saya. Saya berharap dapat terus belajar dan
              berkembang di dunia web development dan suatu hari nanti mencapai
              tujuan dan impian saya yang selama ini saya nantikan dengan penuh
              semangat.
            </p>
            <Button
              variant="outlined"
              onClick={openModal}
              className="hidden xl:flex items-center mt-3 font-mono gap-2 py-1.5 px-3.5 2xl:py-4 2xl:px-6 text-lg 2xl:text-4xl font-normal border-2 border-third text-primary hover:bg-third/10 hover:-translate-y-1"
            >
              Read more
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-4xl 2xl:max-w-7xl transform overflow-hidden rounded-2xl bg-[#EEEEEE] p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-base 2xl:text-3xl font-medium  mb-4 leading-6 text-primary"
                        >
                          ...
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-base 2xl:text-3xl text-primary">
                            Saya merasa sangat berat hati dan kehilangan
                            semangat untuk mengejar karir sebagai seorang web
                            developer. Namun, setelah berjuang selama lima tahun
                            di dunia usaha kecil menengah, tiba-tiba mimpi itu
                            kembali muncul dalam hati saya.
                            <br /> <br />
                            Saat itulah saya menemukan konten Pak Dhika di
                            Youtube Web Programming Unpas. Melihat Pak Dhika
                            berbicara dengan penuh semangat dan passion tentang
                            dunia web programming membuat hati saya terinspirasi
                            dan semangat saya kembali membara.
                            <br />
                            <br />
                            Saya merasa sangat terkesan dan terharu melihat
                            betapa luar biasa dunia programming dan web
                            development ini. Saya merasa yakin dan percaya bahwa
                            di dunia ini masih banyak peluang yang tersedia bagi
                            saya untuk mengembangkan karir di bidang yang selama
                            ini menjadi impian saya.
                            <br />
                            <br />
                            Sekarang, setelah beberapa tahun berlalu, saya
                            merasa sangat bersyukur dan bangga telah mengambil
                            langkah untuk kembali mengejar mimpi saya. Saya
                            berharap dapat terus belajar dan berkembang di dunia
                            web development dan suatu hari nanti mencapai tujuan
                            dan impian saya yang selama ini saya nantikan dengan
                            penuh semangat.
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border 2xl:text-3xl border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Close
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </motion.article>
        </article>
        <motion.div variants={textVariant(1)}>
          <img src={AboutImage} className="inline-flex" alt="profile pic" />
        </motion.div>
      </motion.div>
    </section>
  );
}
