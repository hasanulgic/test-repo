import { motion } from "framer-motion";

const shapeVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
      type: "spring",
    },
  },
};

const childVariants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 2,
    transition: {
      duration: 3,
    },
  },
};

export default function Variants() {
  return (
    <div>
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className="bg-sky-600 h-32 w-32 rounded-md border-2 border-black m-4"
      >
        <motion.div
          variants={childVariants}
          className="bg-red-500 h-12 w-12 rounded-full border m-2"
        ></motion.div>
      </motion.div>
    </div>
  );
}
