import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const About = () => {
  // Mouse tracking for localized parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const imageRotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const imageRotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  return (
    <section id="about" className="section-container" onMouseMove={handleMouseMove}>
      <div className="glass about-glass-card" style={{ borderRadius: '24px', padding: '60px 40px', overflow: 'hidden', position: 'relative', border: '1px solid var(--border-glass)', width: '100%' }}>
        
        <style>{`
          @media (max-width: 991px) {
            .about-glass-card { padding: 40px 20px !important; }
            .about-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center !important; width: 100% !important; justify-items: center !important; }
            .about-content-wrapper { display: flex; flex-direction: column; align-items: center; width: 100% !important; }
            .energy-line { left: 50% !important; transform: translateX(-50%) !important; }
            .status-labels { left: 50% !important; transform: translateX(-50%) !important; text-align: center !important; width: 100% !important; }
            .binary-stream { display: none !important; }
            .hud-bracket { width: 20px !important; height: 20px !important; }
          }
          [data-theme='light'] .hud-bracket { opacity: 0.8 !important; border-width: 3px !important; }
          [data-theme='light'] .binary-stream { opacity: 0.1 !important; }
          .about-glass-card { box-shadow: var(--card-shadow); }
        `}</style>

        {/* Futuristic HUD Brackets */}
        <div className="hud-bracket" style={{ position: 'absolute', top: '20px', left: '20px', width: '30px', height: '30px', borderLeft: '2px solid var(--primary)', borderTop: '2px solid var(--primary)', opacity: 0.5 }} />
        <div className="hud-bracket" style={{ position: 'absolute', top: '20px', right: '20px', width: '30px', height: '30px', borderRight: '2px solid var(--primary)', borderTop: '2px solid var(--primary)', opacity: 0.5 }} />
        <div className="hud-bracket" style={{ position: 'absolute', bottom: '20px', left: '20px', width: '30px', height: '30px', borderLeft: '2px solid var(--primary)', borderBottom: '2px solid var(--primary)', opacity: 0.5 }} />
        <div className="hud-bracket" style={{ position: 'absolute', bottom: '20px', right: '20px', width: '30px', height: '30px', borderRight: '2px solid var(--primary)', borderBottom: '2px solid var(--primary)', opacity: 0.5 }} />

        {/* Binary Data Stream Background (Subtle) */}
        <div className="binary-stream" style={{ position: 'absolute', top: 0, right: '10px', bottom: 0, width: '40px', fontSize: '10px', color: 'var(--primary)', opacity: 0.05, overflow: 'hidden', pointerEvents: 'none', fontFamily: 'monospace', writingMode: 'vertical-rl' }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div 
              key={i}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: 'linear' }}
            >
              01011010010101101001010110100101
            </motion.div>
          ))}
        </div>

        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '400px', 
          height: '400px', 
          background: 'var(--primary)', 
          filter: 'blur(150px)', 
          opacity: 0.08,
          zIndex: 0
        }}></div>
        
        <motion.div 
          className="about-grid" 
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1, width: '100%' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Profile Section with Scanner Effects */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', width: '100%' }}
          >
            <motion.div style={{ 
              width: 'clamp(260px, 80vw, 300px)', 
              height: 'clamp(260px, 80vw, 300px)', 
              borderRadius: '24px', 
              margin: '0 auto',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              padding: '6px',
              position: 'relative',
              rotateX: imageRotateX,
              rotateY: imageRotateY,
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
            }}>
              <div style={{ 
                width: '100%', 
                height: '100%', 
                borderRadius: '18px', 
                backgroundColor: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src="/src/assets/profile/profile.png" 
                  alt="Aditya Hans" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.1)' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<span style="color: var(--text-muted)">[Image]</span>';
                  }}
                />
                
                {/* 1. Bio-Scanner Laser Line */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', left: 0, right: 0, height: '4px', background: 'var(--primary)', boxShadow: '0 0 15px var(--primary)', opacity: 0.6, zIndex: 2 }}
                />

                {/* 2. Scanning Vignette */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 50%, rgba(99, 102, 241, 0.1) 100%)', pointerEvents: 'none' }} />
              </div>

              {/* Advanced Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '-15px', borderRadius: '35px', border: '1px dashed var(--primary)', opacity: 0.4, zIndex: -1 }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '-25px', borderRadius: '45px', border: '1px solid var(--secondary)', opacity: 0.15, zIndex: -2 }}
              />

              {/* Coordinates/Status Labels */}
              <div className="status-labels" style={{ position: 'absolute', bottom: '-45px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'monospace', textAlign: 'center', width: '100%' }}>
                <p>REF: 261-ADITYA</p>
                <p>SYS: OPTIMIZED</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="about-content-wrapper"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto' }}>
              <div className="energy-line" style={{ position: 'absolute', top: '-10px', left: '0', width: '50px', height: '2px', background: 'var(--primary-gradient)' }} />
              <h2 style={{ fontSize: ' clamp(2rem, 5vw, 2.5rem)', marginBottom: '30px', fontWeight: 800 }}>
                <span className="gradient-text">About</span> Me
              </h2>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '25px', lineHeight: 1.8 }}>
              I am a passionate software developer with a strong foundation in full-stack development and problem-solving. My journey in the tech world is driven by a curiosity to understand how complex systems work and a desire to build elegant solutions to real-world problems.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.8 }}>
              With expertise in the MERN (MongoDB, Express, React, Node.js) stack and a deep understanding of Data Structures and Algorithms, I focus on writing clean, efficient, and scalable code. My goal is to create impactful digital experiences that combine performance with exceptional user interface design.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

