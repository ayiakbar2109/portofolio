import { stacks } from "../utils/data";
import CardAbout from "./CardAbout";
import { motion } from "framer-motion";
export default function TechnologyTab() {
  return (
    <motion.div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4 2xl:grid-cols-6 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
      {Object.keys(stacks).map((stack, index) => (
        <motion.div
          // variants={fadeIn("right", "spring", index * 0.2, 0.75)}
          key={index}
        >
          <CardAbout
            src={stacks[stack].src}
            name={stacks[stack].name}
            desc={stacks[stack].desc}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
