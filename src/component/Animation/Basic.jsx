import { motion } from "framer-motion";
import { useState } from "react";

export default function Basic() {
    const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="m-4 mt-8 w-10/12 mx-auto">
      <motion.button
      drag="x"
       whileHover={{scale: 1.05}}
       whileTap={{scale: 0.9, rotate: "3deg"}}
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-4 py-2 bg-teal-800 rounded-md text-white font-bold"
      >
        Click
      </motion.button>
      <motion.div
        // initial={{ opacity: 0.2, scale: 1 }}
        animate={{
          opacity: isAnimating ? 1 : 0,
          x: isAnimating ? "800px" : 0,
          scale: isAnimating ? 1.1 : 1
        }}
        transition={{ duration: 2 }}
      >
        <div className="h-40 w-40 bg-green-700 rounded-sm"></div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 1, x: "800px", scale: 1.1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <div className="h-40 w-40 bg-sky-700 rounded-sm mt-8"></div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 1, x: "800px", scale: 1.1 }}
        transition={{ duration: 2, delay: 4 }}
      >
        <div className="h-40 w-40 bg-red-700 rounded-sm mt-8"></div>
      </motion.div>
    </div>
  );
}
