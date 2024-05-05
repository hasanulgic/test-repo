/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function MotionValues() {
  const count = useMotionValue(0);
  const roundedValues = useTransform(count, Math.round);

  useEffect(()=> {
    const animation = animate(count, 100, {duration: 5, delay: 2})
    return animation.stop;
  },[])

  return <motion.div>{roundedValues}</motion.div>;
}
