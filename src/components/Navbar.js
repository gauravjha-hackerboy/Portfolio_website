// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <motion.nav
//       className="bg-white/10 backdrop-blur-md p-4 flex justify-around shadow-lg rounded-b-xl border-b border-white/20"
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {["/", "/about", "/projects", "/resume", "/contact"].map((path, i) => (
//         <Link
//           key={i}
//           to={path}
//           className={`text-white px-3 py-1 rounded-lg transition duration-300 hover:bg-white/20 ${
//             location.pathname === path ? "bg-white/20 font-bold" : ""
//           }`}
//         >
//           {path === "/"
//             ? "Home"
//             : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//         </Link>
//       ))}
//     </motion.nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
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

const Navbar = () => {
  const location = useLocation();
  const dir = getRandomDirection();

  return (
    <motion.nav
      className="bg-white/10 backdrop-blur-md p-4 flex justify-around shadow-lg rounded-b-xl border-b border-white/20"
      initial={{ x: dir.x, y: dir.y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {["/", "/about", "/projects", "/resume", "/contact"].map((path, i) => (
        <Link
          key={i}
          to={path}
          className={`text-white px-3 py-1 rounded-lg transition duration-300 hover:bg-white/20 ${
            location.pathname === path ? "bg-white/20 font-bold" : ""
          }`}
        >
          {path === "/"
            ? "Home"
            : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
        </Link>
      ))}
    </motion.nav>
  );
};

export default Navbar;
