import { useState } from "react";
import { Tab } from "@headlessui/react";
import TechnologyTab from "../components/TechnologyTab";
import ToolsTab from "../components/ToolsTab";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TabSection() {
  let [categories] = useState({
    Projects: [
      {
        content: <Projects />,
      },
    ],
    Technology: [
      {
        content: <TechnologyTab />,
      },
    ],
    Tools: [
      {
        content: <ToolsTab />,
      },
    ],
  });

  return (
    <motion.div
      variants={fadeIn("down", "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="project"
    >
      <div className="w-full px-2 py-16 sm:px-0 mt-16 lg:mt-28">
        <Tab.Group>
          <Tab.List className="flex max-w-xl rounded-xl bg-secondary/10 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                id="projects"
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm 2xl:text-2xl font-medium leading-5 text-primary",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-gray-500/20 hover:text-primary"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white/30 p-3 shadow-xl",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                {posts.map((content, index) => (
                  <div key={index}>{content.content}</div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </motion.div>
  );
}
