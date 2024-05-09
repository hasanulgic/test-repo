import Mobile from "../../assets/mobile.png"
import {motion} from 'framer-motion'

export default function Lavitating() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(0px)",
        }}
        animate={{
          transform: "translateZ(162px) translateY(-8px)",
        }}
        transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeOut"
        }}
      >
        <div
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          className="bg-green-900 h-72 w-72 shadow-inner"
        ></div>
      </motion.div>
    </div>
  );
}
