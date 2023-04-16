import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function Sidenav() {
  const socialMedia = [
    {
      name: "Mail",
      icon: <FiMail size={20} />,
      link: "mailto:ayiakbarmaulana21@gmail.com",
    },
    {
      name: "Github",
      icon: <FiGithub size={20} />,
      link: "https://github.com/ayiakbar2109",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin size={20} />,
      link: "https://www.linkedin.com/in/ayi-akbar-maulana-919291272/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram size={20} />,
      link: "https://www.instagram.com/ayi4434/",
    },
  ];
  return (
    <motion.div
      variants={textVariant(0.5)}
      initial="hidden"
      animate="show"
      className="hidden lg:block"
    >
      <div className="fixed bottom-0 right-0 w-[105px]">
        <div className="flex flex-col items-center" data-aos="fade-up">
          {socialMedia.map((sosmed, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              data-aos-duration="600"
            >
              <div
                className="cursor-pointer px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                title={sosmed.name}
              >
                <a href={sosmed.link} target="_blank" rel="noreferrer">
                  {sosmed.icon}
                </a>
              </div>
            </div>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
    </motion.div>
  );
}
