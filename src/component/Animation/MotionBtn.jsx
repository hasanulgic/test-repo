import { motion } from "framer-motion";

export default function MotionBtn() {
  return (
    <div className="flex h-screen items-center gap-4 justify-center">
      {/* <motion.button
        className="bg-teal-700 px-4 py-2 border-2 border-black rounded-md "
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        Click me
      </motion.button> */}
      <motion.button
        className="bg-teal-700 px-4 py-2 border-2 border-black rounded-md"
        whileHover={{ scale: 1.1, transition: { yoyo: Infinity } }}
        whileTap={{ scale: 0.9 }}
      >
        Click me
      </motion.button>
    </div>
  );
}
