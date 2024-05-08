import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import RevelAnimation from './RevelAnimation';

export default function AnimationControl() {
  const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress);

  const lists = Array(40).fill(
    <RevelAnimation>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui temporibus
        suscipit iusto beatae debitis sit error iure, doloribus facilis amet
        praesentium eveniet, aperiam nihil. Sint quae officia suscipit possimus
        numquam? Soluta doloremque cupiditate libero. Officia tempora molestias
        sapiente velit corporis praesentium ratione, explicabo suscipit rem
        dolorem blanditiis, dicta accusamus nisi qui sint maiores hic, ex nam
        quia impedit quis sit.
      </p>
    </RevelAnimation>
  );

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(226, 223, 208)", "rgb(50, 1, 47)"]
  );

  return (
    <div className="max-w-xl mx-auto my-4">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          // scaleX,
          transformOrigin: "left",
          // background: "black",
          background,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div className="flex flex-col gap-y-8 mt-2">
        {
          lists.map(list=> list)
        }
      </div>
    </div>
  );
}
