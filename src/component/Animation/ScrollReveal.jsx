/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'

const Box = ({text}) => {
    return (
        <motion.div
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0, transition: { duration: 1}}}
        // viewport={{once: true}}
        className='h-32 w-48 border m-4 rounded-md bg-pink-500 text-black font-bold text-xl text-center flex justify-center items-center'>
            {text}
        </motion.div>
    )
}


export default function ScrollReveal() {
    const message =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, rem odio! In vitae, quo quos, assumenda ducimus consectetur quae omnis sint, dolorem labore accusamus veritatis ullam molestiae. Deleniti, debitis suscipit!";
    const words = message.split(" ")
  return (
    <div>
      {words.map((word, i) => (
        <Box key={i} text={word}></Box>
      ))}
    </div>
  );
}
