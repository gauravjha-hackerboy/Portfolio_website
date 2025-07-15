import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const getRandomDirection = () => {
  const directions = [
    { x: -100, y: 0 }, // left
    { x: 100, y: 0 }, // right
    { x: 0, y: -100 }, // top
    { x: 0, y: 100 }, // bottom
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Home = () => {
  const dir1 = getRandomDirection();
  const dir2 = getRandomDirection();
  const dir3 = getRandomDirection();
  return (
    <motion.section
      className="p-8 text-center min-h-[80vh] flex flex-col justify-center items-center overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={800}
        scale={1.05}
        gyroscope={true}
        className="z-10"
      >
        <motion.h1
          className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 flex items-center justify-center gap-2"
          initial={{ x: dir1.x, y: dir1.y, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Hi, I'm Gaurav Kumar Jha 👋
        </motion.h1>
      </Tilt>

      <motion.p
        initial={{ x: dir2.x, y: dir2.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Software Developer | MERN Stack Developer
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ x: dir3.x, y: dir3.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <a
          href="https://lnk.ink/mrjha"
          className="hover:underline text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://lnk.ink/mrjha.linkedin"
          className="hover:underline text-blue-400"
        >
          LinkedIn
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
