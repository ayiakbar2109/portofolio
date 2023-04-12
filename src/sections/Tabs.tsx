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
      <Tabs value="projects" className="mt-28">
        <TabsHeader
          className="bg-transparent flex lg:max-w-[45rem] text-primary"
          indicatorProps={{
            className: "bg-gray-400/10  shadow-none text-primary rounded-md",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
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
