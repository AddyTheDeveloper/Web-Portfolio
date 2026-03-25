import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        background: 'var(--bg-dark)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}
    >
      <div style={{ position: 'relative' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '48px',
            fontWeight: 800,
            letterSpacing: '-2px'
          }}
        >
          ADITYA <span className="gradient-text">HANS</span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            height: '4px',
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            borderRadius: '2px'
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '10px' }}
      >
        Initializing...
      </motion.p>

      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: 'var(--primary)',
        filter: 'blur(150px)',
        opacity: 0.15,
        zIndex: -1
      }} />
    </motion.div>
  );
};

export default LoadingScreen;
