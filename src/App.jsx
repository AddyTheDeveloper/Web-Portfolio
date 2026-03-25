import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Initial loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className={`App ${theme}-mode`} 
      onMouseMove={handleMouseMove}
      style={{ position: 'relative', overflowX: 'hidden' }}
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <CustomCursor />
      <BackgroundParticles />
      
      {/* Dynamic Background Mesh */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--primary-glow) 0%, transparent 50%)`,
        opacity: theme === 'dark' ? 0.15 : 0.08,
        pointerEvents: 'none',
        zIndex: 0
      }} />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary)',
          transformOrigin: '0%',
          zIndex: 1001,
          scaleX
        }}
      />
      {/* Background Glows */}
      <div style={{ 
        position: 'fixed', 
        top: '10%', 
        left: '5%', 
        width: '400px', 
        height: '400px', 
        background: 'var(--primary)', 
        filter: 'blur(150px)', 
        opacity: 0.1,
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>
      <div style={{ 
        position: 'fixed', 
        bottom: '10%', 
        right: '5%', 
        width: '500px', 
        height: '500px', 
        background: 'var(--secondary)', 
        filter: 'blur(180px)', 
        opacity: 0.08,
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <SectionWrapper><Hero /></SectionWrapper>
        <SectionWrapper><About /></SectionWrapper>
        <SectionWrapper><Skills /></SectionWrapper>
        <SectionWrapper><Projects /></SectionWrapper>
        <SectionWrapper><Education /></SectionWrapper>
        <SectionWrapper><Contact /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

const SectionWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for premium feel
    }}
  >
    {children}
  </motion.div>
);

export default App;
