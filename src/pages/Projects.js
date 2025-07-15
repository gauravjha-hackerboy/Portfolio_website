import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Ai Journey Vista",
    description:
      "A Web app for planning your journey with airtificial intelligence.",
    tech: [
      "React",
      "Google-Gemini",
      "Trip-Advisior",
      "Tailwind CSS",
      "Wheather API",
      "Wheather based on the trip location",
    ],
    live: "https://ai-journey-vista.vercel.app/",
    github: "https://lnk.ink/mrjha.ai-journey-vista",
  },
  {
    title: "Live Conferencing App",
    description:
      "A High Quality Video Conferencing Platform for video meetings for personal and professional use.",
    tech: [
      "React",
      "SDK",
      "3rd Parrty Sign in",
      "Cleark authentication",
      "Meetings history",
    ],
    live: "https://liveconferencing.netlify.app/",
    github: "https://lnk.ink/mrjha.live-conferencing",
  },
  {
    title: "Ai Chatbot",
    description:
      "A Web app for connecting with artificial intelligence secured with JWT auth for secure connection.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Google Gemini Api",
      "Tailwind CSS",
      "Express.js",
    ],
    live: "https://ai-chat-bot-m1jb.onrender.com",
    github: "https://lnk.ink/mrjha.ai-chat-bot",
  },
  {
    title: "PaasIfy",
    description:
      "All in one Web application for deployment and monitoring. You can also clone the repository for deploying any private organisation application for your employee",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Grafana",
      "Tailwind CSS",
      "Docker",
      "Kebernets",
      "Nginx",
      "Aws",
      "Terraform",
      "Prometheus",
    ],
    // live: "https://example.com",
    // github: "https://github.com/yourgithub/excel-analytics",
  },
  {
    title: "Student Result Management System",
    description:
      "A Web application for managing student results, allowing teachers to input and manage student grades efficiently.",
    tech: [
      "HTML",
      "CSS",
      "MySQL",
      "php",
      "JavaScript",
      "Xampp",
      "phpMyAdmin",
      "Apache Server",
    ],
    live: "https://lnk.ink/mrjha.srms.live",
    github: "https://lnk.ink/mrjha.SRMS",
  },
  {
    title: "Steganography - Hiding Text in Image",
    description:
      "A Python-based steganography tool that implements digital steganography techniques to hide secret text messages within image files. The application uses LSB (Least Significant Bit) method to embed text data in image pixels, making it imperceptible to the human eye. Features both encryption (hiding messages) and decryption (retrieving messages) capabilities through an interactive command-line interface.",
    tech: [
      "Python 3.x",
      "OpenCV",
      "Computer Vision",
      "Image Processing",
      "Steganography Algorithm",
      "LSB Technique",
      "CLI Interface",
    ],
    // live: "https://example.com",
    github: "https://lnk.ink/mrjha.stegnography-project",
  },
];

const getRandomDirection = () => {
  const directions = [
    { x: -100, y: 0 },
    { x: 100, y: 0 },
    { x: 0, y: -100 },
    { x: 0, y: 100 },
  ];
  return directions[Math.floor(Math.random() * directions.length)];
};

const Projects = () => (
  <motion.section
    className="p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-semibold mb-6 text-teal-300">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => {
        const dir = getRandomDirection();
        return (
          <Tilt
            key={i}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={600}
            scale={1.02}
            gyroscope={true}
            className="w-full"
          >
            <motion.div
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 transform transition-transform hover:scale-[1.02]"
              whileHover={{ scale: 1.03 }}
              initial={{ x: dir.x, y: dir.y, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-blue-600/80 px-3 py-1 text-sm rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.live}
                className="text-blue-400 mr-4 hover:underline"
              >
                Live
              </a>
              <a href={proj.github} className="text-blue-400 hover:underline">
                Code
              </a>
            </motion.div>
          </Tilt>
        );
      })}
    </div>
  </motion.section>
);

export default Projects;
