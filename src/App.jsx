import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ParticleBackground from "./components/Background";

const KeyboardNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "d" || event.key === "ArrowRight") {
        // Next page
        if (location.pathname === "/") {
          navigate("/skills");
        } else if (location.pathname === "/skills") {
          navigate("/about");
        } else if (location.pathname === "/about") {
          navigate("/contact");
        }
      } else if (event.key === "a" || event.key === "ArrowLeft") {
        // Previous page
        if (location.pathname === "/contact") {
          navigate("/about");
        } else if (location.pathname === "/about") {
          navigate("/skills");
        } else if (location.pathname === "/skills") {
          navigate("/");
        }
      } else if (event.key === "w" || event.key === "PageUp") {
        // Scroll up
        window.scrollBy({ top: -200, behavior: "smooth" });
      } else if (event.key === "s" || event.key === "PageDown") {
        // Scroll down
        window.scrollBy({ top: 200, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate, location]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Router>
      {/* bacground */}
      <ParticleBackground />
      <div className="relative  z-20 min-h-screen text-white">
        <Header />
        <KeyboardNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
};

export default App;
