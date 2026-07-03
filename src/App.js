import React from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroAbout from './components/HeroAbout'; 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  
      <HeroAbout />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;