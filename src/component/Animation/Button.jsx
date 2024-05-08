import { motion } from "framer-motion";

export default function Button() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.button
        whileTap={{ scale: 3.5 , rotate: "25deg"}}
        transition={{ duration: 0.5 , ease: "easeInOut"}}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me
      </motion.button>
      <motion.button
        whileTap={{ scale: 3.5 , rotate: "-25deg"}}
        transition={{ duration: 0.5 }}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ms-2"
      >
        Click me
      </motion.button>
    </div>
  );
}
