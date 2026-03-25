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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleMouseMove = (e) => {
    if (isMobile) return;
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

      {!isMobile && <CustomCursor />}
      <BackgroundParticles />
      
      {/* Dynamic Background Mesh - Disabled on mobile for performance */}
      {!isMobile && (
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
      )}
      
      {/* Scroll Progress Bar - Only one instance */}
      <motion.div
        className="scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--primary-gradient)',
          transformOrigin: '0%',
          zIndex: 2000,
          scaleX,
          boxShadow: '0 0 15px var(--primary-glow)'
        }}
      />

      {/* Background Glows */}
      <div style={{ 
        position: 'fixed', 
        top: '10%', 
        left: '5%', 
        width: isMobile ? '200px' : '400px', 
        height: isMobile ? '200px' : '400px', 
        background: 'var(--primary)', 
        filter: 'blur(100px)', 
        opacity: 0.05,
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <Navbar theme={theme} toggleTheme={toggleTheme} isMobile={isMobile} />
      
      <main>
        <SectionWrapper isMobile={isMobile}><Hero isMobile={isMobile} /></SectionWrapper>
        <SectionWrapper isMobile={isMobile}><About isMobile={isMobile} /></SectionWrapper>
        <SectionWrapper isMobile={isMobile}><Skills isMobile={isMobile} /></SectionWrapper>
        <SectionWrapper isMobile={isMobile}><Projects isMobile={isMobile} /></SectionWrapper>
        <SectionWrapper isMobile={isMobile}><Education isMobile={isMobile} /></SectionWrapper>
        <SectionWrapper isMobile={isMobile}><Contact isMobile={isMobile} /></SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

const SectionWrapper = ({ children, isMobile }) => (
  <motion.div
    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
    whileInView={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
    transition={{ 
      duration: isMobile ? 0.1 : 0.8, 
      ease: [0.16, 1, 0.3, 1]
    }}
  >
    {children}
  </motion.div>
);

export default App;
