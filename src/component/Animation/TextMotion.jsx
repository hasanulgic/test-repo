import { motion } from "framer-motion";

export default function TextMotion() {
  const message =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae dolore ";
  const words = message.split(" ");
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-300 p-3">
        {/* <div className="font-bold text-center text-2xl">
          {words.map((word, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: index / 10,
              }}
              key={index}
            >
              {word} &nbsp;
            </motion.span>
          ))}
        </div> */}

        <div className="flex flex-col gap-y-4">
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quam eius sint repellat iste nihil veniam modi delectus eum
              suscipit maxime nesciunt fugit aspernatur, vero, hic quibusdam
              esse voluptatibus assumenda.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <h1 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quam eius sint repellat iste nihil veniam modi delectus eum
              suscipit maxime nesciunt fugit aspernatur, vero, hic quibusdam
              esse voluptatibus assumenda.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", bounce:0.3, duration: 2 }}
          >
            <h1 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quam eius sint repellat iste nihil veniam modi delectus eum
              suscipit maxime nesciunt fugit aspernatur, vero, hic quibusdam
              esse voluptatibus assumenda.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
