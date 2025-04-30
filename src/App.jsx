// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Verticals from './components/Verticals';
import Worldwide from './components/Worldwide';
import Contact from './components/Contact';

function FullHomePage() {
  return (
    <>
      <HeroSection />
      <About />
      <Projects />
      <Verticals />
      <Worldwide />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<FullHomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Verticals/>} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/worldwide" element={<Worldwide />} />
      </Routes>
    </div>
  );
}

export default App;
