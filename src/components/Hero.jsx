import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowDown, Terminal, Cpu, Database, Globe } from 'lucide-react';

const Hero = ({ isMobile }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Developer | MERN Stack | DSA";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, isMobile ? 20 : 50);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section id="home" className="section-container" style={{ minHeight: isMobile ? '80vh' : '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. HUD Background Elements */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
        {/* Rotating Rings - Only one on mobile */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: isMobile ? '-150px' : '-400px', marginTop: isMobile ? '-150px' : '-400px', width: isMobile ? '300px' : '800px', height: isMobile ? '300px' : '800px', borderRadius: '50%', border: '1px dashed var(--primary)', opacity: 0.08 }}
        />
        {!isMobile && (
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', top: '50%', left: '50%', marginLeft: '-300px', marginTop: '-300px', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid var(--secondary)', opacity: 0.06 }}
          />
        )}
        
        {/* Grid Overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)', backgroundSize: isMobile ? '50px 50px' : '100px 100px', opacity: 0.4 }} />
      </div>

      {/* 2. Scanning Laser Effect - Disabled on mobile */}
      {!isMobile && (
        <motion.div 
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', opacity: 0.2, zIndex: 1, pointerEvents: 'none' }}
        />
      )}

      <div style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center' }}
        >
          {/* Tech Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              padding: '8px 20px', 
              borderRadius: '50px', 
              background: 'var(--glass-bg)', 
              border: '1px solid var(--border-glass)', 
              marginBottom: '20px',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            <Terminal size={16} className="gradient-text" />
            <span style={{ color: 'var(--text-main)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '12px' }}>
              System: Ready to Build
            </span>
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(1.8rem, 8vw, 6.5rem)', marginTop: '0px', lineHeight: 1.1, fontWeight: 900, letterSpacing: '-2px' }}>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              style={{ display: 'block' }}
            >
              {"I'm ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.5 + index * 0.05, 
                    duration: 0.8,
                    type: "spring"
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <span className="gradient-text">
                {"Aditya Hans".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.8 + index * 0.05, 
                      duration: 0.8,
                      type: "spring"
                    }}
                    style={{ display: 'inline-block' }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px' }}
          >
            <h2 style={{ fontSize: 'clamp(0.9rem, 4vw, 1.8rem)', color: 'var(--text-muted)', fontWeight: 500, fontFamily: 'monospace' }}>
              {typedText}<span style={{ color: 'var(--primary)', animation: 'blink 1s step-end infinite' }}>_</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            style={{ maxWidth: '650px', margin: '30px auto', color: 'var(--text-muted)', fontSize: 'clamp(14px, 4vw, 18px)', lineHeight: 1.6, padding: '0 20px' }}
          >
            Engineering scalable full-stack applications and solving complex algorithmic challenges with precision and creativity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="hero-btns"
            style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}
          >
            <motion.a 
              href="#projects" 
              className="glow-btn" 
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px var(--primary-glow)' }} 
              whileTap={{ scale: 0.95 }} 
            >
              View Projects
            </motion.a>
            <motion.a 
              href="/resume/Aditya_Resume.pdf" 
              download 
              className="glass" 
              whileHover={{ scale: 1.05, background: 'var(--glass-bg)' }} 
              whileTap={{ scale: 0.95 }} 
              style={{ 
                padding: '12px 28px', 
                borderRadius: '50px', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                border: '1px solid var(--border-glass)',
                boxShadow: 'var(--card-shadow)',
                color: 'var(--text-main)'
              }} 
            >
              Download Resume <FileDown size={20} />
            </motion.a>
          </motion.div>
          
          {/* Futuristic Stats Grid */}
          <div className="hero-stats" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: isMobile ? '10px' : 'clamp(15px, 5vw, 60px)', 
            marginTop: isMobile ? '40px' : '70px',
            flexWrap: 'wrap',
            width: '100%',
            maxWidth: '100%'
          }}>
            <style>{`
              @media (max-width: 600px) {
                .hero-stats { gap: 10px !important; }
                .hero-stats > div { min-width: 80px; flex: 1; }
                .hero-btns { flex-direction: column; align-items: center; gap: 15px !important; }
                .hero-btns > a { width: 100% !important; max-width: 300px; text-align: center; justify-content: center; }
              }
              @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
              }
            `}</style>
            
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }} style={{ textAlign: 'center' }}>
              <Cpu size={24} className="gradient-text" style={{ marginBottom: '10px' }} />
              <h3 className="gradient-text" style={{ fontSize: 'clamp(24px, 6vw, 32px)', fontWeight: 800 }}>500+</h3>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>DSA Solved</p>
            </motion.div>
            
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} style={{ textAlign: 'center' }}>
              <Database size={24} className="gradient-text" style={{ marginBottom: '10px' }} />
              <h3 className="gradient-text" style={{ fontSize: 'clamp(24px, 6vw, 32px)', fontWeight: 800 }}>10+</h3>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Projects</p>
            </motion.div>
            
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 2 }} style={{ textAlign: 'center' }}>
              <Globe size={24} className="gradient-text" style={{ marginBottom: '10px' }} />
              <h3 className="gradient-text" style={{ fontSize: 'clamp(24px, 6vw, 32px)', fontWeight: 800 }}>MERN</h3>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>Full Stack</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated Scroll Indicator */}
        <div style={{ position: 'absolute', bottom: '-80px', left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 10 }}>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 1, delay: 2 } }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer', color: 'var(--text-muted)' }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: 700 }}>Scroll Down</span>
            <ArrowDown size={14} className="gradient-text" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

