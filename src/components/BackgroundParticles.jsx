import React, { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const BackgroundParticles = ({ isMobile }) => {
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse coordinates
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      // Normalize mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  // Skill icons used in the background
  const skillIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  ];

  // Generate random particles
  const particles = useMemo(() => 
    Array.from({ length: isMobile ? 20 : 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 3 : 5) + 2,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      factor: Math.random() * 40 + 20,
      opacity: Math.random() * 0.3 + 0.3,
      blur: Math.random() * 2
    })), [isMobile]);

  // Generate random floating icons
  const floatingIcons = useMemo(() => 
    Array.from({ length: isMobile ? 5 : 20 }).map((_, i) => ({
      id: i,
      icon: skillIcons[i % skillIcons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (isMobile ? 25 : 40) + 20,
      duration: Math.random() * 25 + 25,
      delay: Math.random() * 10,
      rotate: Math.random() * 360,
      factor: Math.random() * 60 + 40,
      opacity: Math.random() * 0.15 + 0.15,
      blur: Math.random() * 3
    })), [isMobile, skillIcons]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {/* Small Particles */}
      {particles.map(p => {
        // Individual parallax transforms
        const translateX = useTransform(smoothX, [-1, 1], [-p.factor, p.factor]);
        const translateY = useTransform(smoothY, [-1, 1], [-p.factor, p.factor]);

        return (
          <motion.div
            key={`particle-${p.id}`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, p.opacity, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${p.y}vh`,
              left: `${p.x}vw`,
              translateX: translateX,
              translateY: translateY,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: 'var(--primary)',
              filter: `blur(${p.blur}px)`,
              willChange: 'transform, opacity'
            }}
          />
        );
      })}

      {/* Floating Skill Logos */}
      {floatingIcons.map(icon => {
        const translateX = useTransform(smoothX, [-1, 1], [-icon.factor, icon.factor]);
        const translateY = useTransform(smoothY, [-1, 1], [-icon.factor, icon.factor]);

        return (
          <motion.div
            key={`icon-${icon.id}`}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [icon.rotate, icon.rotate + 360],
              opacity: [0, icon.opacity, 0]
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              delay: icon.delay,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: `${icon.y}vh`,
              left: `${icon.x}vw`,
              translateX: translateX,
              translateY: translateY,
              width: `${icon.size}px`,
              height: `${icon.size}px`,
              filter: `blur(${icon.blur}px)`,
              willChange: 'transform, opacity'
            }}
          >
            <img 
              src={icon.icon} 
              alt="" 
              style={{ width: '100%', height: '100%', filter: 'grayscale(100%) brightness(250%)' }} 
              onError={(e) => (e.target.style.display = 'none')}
            />
          </motion.div>
        );
      })}

      {/* Global Grain/Noise Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.01)',
        zIndex: 1
      }} />
    </div>
  );
};

export default BackgroundParticles;

