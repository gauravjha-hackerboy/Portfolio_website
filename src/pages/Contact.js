import React from "react";
import { motion } from "framer-motion";

const getRandomDirection = () => {
  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 },
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Contact = () => {
  const dir1 = getRandomDirection();
  const dir2 = getRandomDirection();
  const dir3 = getRandomDirection();

  return (
    <motion.section
      className="p-8 max-w-xl mx-auto"
      initial={{ x: dir1.x, y: dir1.y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-4 text-teal-300"
        initial={{ x: dir2.x, y: dir2.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="mb-2 text-gray-300"
        initial={{ x: -dir2.x, y: -dir2.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Feel free to reach out to me at:
      </motion.p>
      <motion.p
        className="text-blue-400 text-lg font-mono"
        initial={{ x: dir3.x, y: dir3.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        gauravjha7493@gmail.com
      </motion.p>
      <motion.div
        className="mt-4 text-gray-400"
        initial={{ x: -dir3.x, y: -dir3.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-white/5 backdrop-blur-md p-6 rounded-xl space-y-4 border border-white/10"
        >
          <input
            type="hidden"
            name="access_key"
            value="6e38fc2b-2890-42fd-bbe1-c8d204052fee"
          />
          <input
            type="hidden"
            name="subject"
            value="New Contact from Portfolio"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 transition-colors text-white px-4 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
