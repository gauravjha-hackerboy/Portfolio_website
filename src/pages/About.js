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

const About = () => {
  const dir1 = getRandomDirection();
  return (
    <motion.section
      className="p-8 max-w-2xl mx-auto"
      initial={{ x: dir1.x, y: dir1.y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-4 text-teal-300"
        initial={{ x: -dir1.x, y: -dir1.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {[...Array(6)].map((_, i) => {
        const dir = getRandomDirection();
        const paragraphs = [
          "I'm Gaurav Kumar Jha, a passionate Software Engineer. With a strong foundation in full-stack development and emerging technologies, I specialize in building scalable web applications and innovative solutions that solve real-world problems.",
          "As a full-stack developer, I craft end-to-end solutions using modern technologies like React, Node.js, and cloud platforms. My expertise spans from creating intuitive user interfaces to designing robust backend systems and implementing containerized deployments with Docker and Kubernetes.",
          "I'm particularly passionate about integrating AI into applications to enhance user experiences. My recent projects showcase this vision, from developing an AI-powered travel recommendation system that provides personalized suggestions based on user preferences and real-time data, to building a comprehensive PaaS platform that will feature AI-assisted code generation and optimization.",
          "My development journey began during my internship at Smart Knower, where I honed my front-end skills and delivered measurable results – achieving a 30% increase in user engagement and 25% reduction in bounce rate through innovative component development. This experience solidified my commitment to creating user-centric applications that drive business value. Since then, I've continuously expanded my skill set through hands-on projects and professional certifications from industry leaders like IBM, Google Cloud, and Microsoft. I've earned specialized certifications in cloud computing, Kubernetes, and AI technologies, keeping myself at the forefront of industry trends.",
          "I believe in writing clean, maintainable code and following best practices in software development. My approach combines technical excellence with user-focused design, ensuring that applications are not only functional but also provide exceptional user experiences. I'm proficient in modern development workflows, including CI/CD pipelines, containerization, and cloud deployment strategies.",
          "When I'm not coding, I'm exploring the latest developments in AI and cloud technologies, contributing to open-source projects, and continuously learning new skills. I'm driven by the potential of technology to create meaningful impact and am always eager to collaborate on innovative projects that push the boundaries of what's possible. Ready to bring your next project to life? Let's connect and build something amazing together.",
        ];

        return (
          <motion.p
            key={i}
            className="text-gray-300 text-lg mt-4"
            initial={{ x: dir.x, y: dir.y, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          >
            {paragraphs[i]}
          </motion.p>
        );
      })}
    </motion.section>
  );
};

export default About;
