import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Navbar from './components/Navigation/Navbar';
import Background from './components/Common/Background';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000); // 3 sec welcome
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[100%]">
      {/* <Background /> */}

      {/* Navbar fixed on top */}
      <div className="fixed top-0 left-0 z-[50] w-full">
        <Navbar />
      </div>

      {/* Welcome screen or main content */}
      {showWelcome ? (
        <Welcome />
      ) : (
        <div className="relative z-[10] pt-[5rem]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
