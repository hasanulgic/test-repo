import { motion } from "framer-motion";

export default function Simple() {
  return (
    <div className="flex h-screen justify-center items-center">
      {/* <motion.div className="rounded-full bg-teal-600 p-16 w-32 h-32" 
      initial={{opacity: 0, scale: 0.1}}
      animate={{opacity:1, scale: 1}}
      transition={{duration: 1, delay: 1}}
      /> */}
      <motion.div
        className="bg-teal-600 border-2 border-black p-16 w-32 h-32"
        animate={{
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 90, 180, 270, 0],
          scale: [1, 1, 1.5, 1.5, 1]
        }}
        transition={{duration: 2}}
      />
    </div>
  );
}
