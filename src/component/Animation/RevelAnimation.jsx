import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RevelAnimation({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const inInView = useInView(ref);
  const mainControls = useAnimation();
  const slidesControl = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
      slidesControl.start("visible");
    }
  }, [inInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slidesControl}
        transition={{ duration: 0.7, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 4,
          right: 0,
          background: "#0092C0",
          zIndex: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
