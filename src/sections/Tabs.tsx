import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TechnologyTab from "../components/TechnologyTab";
import ToolsTab from "../components/ToolsTab";
import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export default function TabSection() {
  const data = [
    {
      label: "Projects",
      value: "projects",
      desc: <Projects />,
    },

    {
      label: "Tech",
      value: "tech",
      desc: <TechnologyTab />,
    },
    {
      label: "Tools",
      value: "tools",
      desc: <ToolsTab />,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="project"
    >
      <Tabs id="custom-animation" value="projects">
        <TabsHeader
          className="bg-transparent md:max-w-sm mt-28"
          indicatorProps={{
            className: "bg-blue-500/10 shadow-none text-blue-500",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </motion.div>
  );
}
