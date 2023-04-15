import { useState, useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import resume from "./../assets/resume.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const previousCurrentScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsPageTop(currentScrollPosition === 0);
      if (
        previousCurrentScrollPosition.current < currentScrollPosition &&
        !isNavbarVisible
      ) {
        setIsNavbarVisible(true);
      } else if (
        previousCurrentScrollPosition.current > currentScrollPosition &&
        isNavbarVisible
      ) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarVisible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navbarText = [
    { text: "Home", href: "/#" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 z-[98] w-screen ${
        !isNavbarVisible
          ? !isPageTop
            ? `translate-y-0  bg-base_col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out ${
                !isOpen ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
              }`
            : " bg-base_col bg-opacity-80 py-3 transition-all"
          : `transition-all duration-300 ease-in-out ${
              !isPageTop ? "-translate-y-full" : "translate-y-0"
            } `
      }`}
    >
      <div className="flex h-24 items-center justify-between px-7 lg:px-14 2xl:px-20">
        <a href="/" className="text-accent">
          <h1
            className="text-2xl font-semibold 2xl:text-4xl"
            data-aos="fade-down"
            data-aos-once="true"
          >
            maulana.
          </h1>
        </a>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-30">
            {!isOpen ? (
              <FaHamburger className="h-9 w-9 fill-current text-primary" />
            ) : (
              <BiX className="h-10 w-10 fill-current text-primary" />
            )}
          </button>
        </div>

        {/* Navbar Text */}
        <div className="text-base-content hidden  gap-10 lg:flex lg:justify-center lg:items-center">
          {navbarText.map((item, index) => (
            <a
              href={item.href}
              className="flex flex-col items-end font-mono text-base  text-primary transition-all duration-300 hover:text-accent xl:text-base 2xl:text-xl"
              key={index}
            >
              <p>{item.text}</p>
            </a>
          ))}
          <a href={resume} target="_blank">
            <Button
              variant="outlined"
              className="flex items-center px-4 py-1  font-mono text-base  text-primary transition-all duration-300 xl:text-base 2xl:text-xl border-2 border-third hover:bg-third/10"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 bg-[#EEEEEE] drop-shadow-lg md:w-1/2">
          <div className="mt-44 flex flex-col items-center justify-center gap-12 text-base md:text-lg">
            {navbarText.map((item, index) => (
              <a
                href={item.href}
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
