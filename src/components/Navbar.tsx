import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./../fonts/ROCK.ttf";
import github from "./../assets/github.png";
import linkedIn from "./../assets/linkedin.png";
import instagram from "./../assets/instagram.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative inset-x-0 top-0 z-50 glassmorphism p-7">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="px-3">
              <span className="sr-only">Your Company</span>
              <p className="text-3xl font-extrabold text-primary -tracking-wider logo-font">
                MAULANA
              </p>
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-normal leading-6 text-primary hover:text-secondary active:text-secondary focus:text-secondary"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">
            <a href="#">
              <img
                src={github}
                alt="github icon"
                className="w-7 text-primary"
              />
            </a>
            <a href="#">
              <img
                src={linkedIn}
                alt="linked in"
                className="w-7 text-primary"
              />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="instagram"
                className="w-7 text-primary"
              />
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-indigo-200 glassmorphism px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 flex justify-start gap-9">
                  <a href="#">
                    <img
                      src={github}
                      alt="github icon"
                      className="w-7 text-primary"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={linkedIn}
                      alt="linked in"
                      className="w-7 text-primary"
                    />
                  </a>
                  <a href="#">
                    <img
                      src={instagram}
                      alt="instagram"
                      className="w-7 text-primary"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
