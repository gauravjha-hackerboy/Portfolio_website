import React, { useState } from "react";
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

const Resume = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const dir1 = getRandomDirection();
  const dir2 = getRandomDirection();

  const skills = {
    languages: ["C/C++", "JavaScript", "Java"],
    frontend: ["HTML", "CSS", "React", "Next.js"],
    backend: ["Node.js", "Express.js", "REST API", "php"],
    database: ["MySQL", "MongoDB"],
    cloud: ["Docker", "Kubernetes", "CI/CD"],
    tools: ["VS Code", "Git", "Postman", "IntelliJ"],
  };

  const experience = [
    {
      title: "Web Developer Intern",
      company: "Smart Knower",
      period: "June - July 2023",
      achievements: [
        "Boosted conversion rates by 10%",
        "Increased user engagement by 30%",
        "Reduced bounce rate by 25%",
      ],
    },
  ];

  const projects = [
    {
      title: "AI-Powered PaaS Platform",
      period: "Feb 2025 - Present",
      tech: "MongoDB, React, Node.js, Docker, Kubernetes",
      status: "In Development",
    },
    {
      title: "AI Travel Recommendation System",
      period: "Oct 2024 - Dec 2024",
      tech: "React, Gemini AI, OpenWeather API, Google Maps API",
      status: "Completed",
    },
    {
      title: "LiveConferencing Platform",
      period: "Feb 2024 - Apr 2024",
      tech: "React, Stream SDK, Clerk Authentication",
      status: "Completed",
    },
    {
      title: "AI Chatbot",
      period: "Oct 2023 - Dec 2023",
      tech: "HTML, CSS, MySQL, php, JavaScript, Xampp, phpMyAdmin",
      status: "Completed",
    },
    {
      title: "Student Result Management System",
      period: "May 2024 - Aug 2024",
      tech: "React, Gemini AI, Node.js, Express.js, MongoDB, JWT",
      status: "Completed",
    },
  ];

  const certifications = [
    "Steganography in Python - IBM Skill Build",
    "Cloud Computing Foundations - Google Cloud",
    "AI Bootcamp - Microsoft Learn Student Ambassador",
    "Kubernetes Essentials",
  ];

  return (
    <motion.section
      className="p-8 max-w-6xl mx-auto"
      initial={{ x: dir1.x, y: dir1.y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-8"
        initial={{ x: dir2.x, y: dir2.y, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-teal-300">Resume</h2>
        <p className="text-gray-300 mb-6">
          Software Developer | Full-Stack Developer
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">3+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">4+</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">10+</div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-2xl font-bold text-teal-300">2025</div>
            <div className="text-sm text-gray-400">Graduation</div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.button
          {/* onClick={() => setShowPDFViewer(true)}*/}
            onclick ={() => (window.location.href = "https://example.com/")}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            initial={{ x: -dir2.x, y: -dir2.y, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 View Resume
          </motion.button>
          <motion.button
            onClick={() => {
              const subject = encodeURIComponent(
                "Resume Request - Gaurav Kumar Jha"
              );
              const body = encodeURIComponent(`Hi Gaurav,

I found your portfolio website and I'm interested in learning more about your background and experience.

Could you please send me your latest resume? I'd love to discuss potential opportunities.

Best regards,
[Your Name]
[Your Company/Organization]
[Your Contact Information]`);

              window.location.href = `mailto:gauravjha7493@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            initial={{ x: dir2.x, y: dir2.y, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email Resume
          </motion.button>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 bg-gray-800 rounded-lg p-1">
        {["overview", "skills", "experience", "projects", "certifications"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg p-6"
      >
        {activeTab === "overview" && (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-teal-300">
              Professional Overview
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-blue-400">Education</h4>
                <p className="text-gray-300">
                  BTech Computer Science & Engineering
                </p>
                <p className="text-sm text-gray-400">
                  Panipat Institute of Engineering and Technology (2025)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-400">
                  Specialization
                </h4>
                <p className="text-gray-300">Full-Stack Development</p>
                <p className="text-sm text-gray-400">
                  AI Integration & Cloud Technologies
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-300 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-3 text-blue-400 capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-300 text-center">
              Work Experience
            </h3>
            {experience.map((job, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6 mb-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400">
                      {job.title}
                    </h4>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-teal-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-300 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-blue-400">
                      {project.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        project.status === "Completed"
                          ? "bg-green-600"
                          : "bg-yellow-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{project.period}</p>
                  <p className="text-sm text-gray-300">{project.tech}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "certifications" && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-300 text-center">
              Certifications & Training
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-4 flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <span className="text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://drive.google.com/drive/folders/1XrXDPDqU2sFPL7-Ab_bJHP8UqKNG-kAZ?usp=sharing"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                View All Certifications →
              </a>
            </div>
          </div>
        )}
      </motion.div>

      {/* PDF Viewer Modal */}
      {showPDFViewer && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                Resume - Gaurav Kumar Jha
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Gaurav_kumar_Jha_Resume.pdf";
                    link.download = "Gaurav_kumar_Jha_Resume.pdf";
                    link.click();
                  }}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  📥 Download
                </button>
                <button
                  onClick={() => setShowPDFViewer(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300"
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="h-[70vh] overflow-auto">
              <iframe
                src="/Gaurav_Kumar_Jha_Resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                width="100%"
                height="100%"
                title="Resume PDF"
                className="border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Resume;
