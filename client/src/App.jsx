import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Resume from './components/Resume';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
