// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-teal-400 border-dashed rounded-full animate-spin"></div>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/resume"
          element={
            <PageWrapper>
              <Resume />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen font-sans backdrop-blur-xl">
        {loading && <LoadingSpinner />}
        {!loading && (
          <>
            <Navbar />
            <AnimatedRoutes />
            <footer className="text-center text-gray-400 p-4 mt-8 text-sm animate-fadeIn border-t border-white/10">
              © {new Date().getFullYear()} Gaurav Kumar Jha — All rights
              reserved.
            </footer>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
