import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Instagram from 'lucide-react/dist/esm/icons/instagram';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      height: '64px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px',
      borderRadius: '32px',
      background: scrolled ? 'var(--bg-card)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
      border: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <style>{`
        @media (max-width: 768px) {
          nav { width: 95% !important; padding: 0 15px !important; }
          .desktop-menu { display: none !important; }
          .mobile-theme-toggle { display: flex !important; }
          .mobile-toggle { display: flex !important; }
          .mobile-menu-overlay { padding-top: 20px; }
        }
        @media (min-width: 769px) {
          .desktop-menu { display: flex !important; }
          .mobile-theme-toggle { display: none !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link .nav-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-line {
          width: 100%;
        }
      `}</style>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <a href="#home" style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>
          ADITYA <span className="gradient-text">HANS</span>
        </a>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none', gap: '30px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              style={{ 
                fontSize: '15px', 
                fontWeight: 600, 
                color: 'var(--text-main)',
                position: 'relative',
                padding: '5px 0'
              }}
              className="nav-link"
            >
              {link.name}
              <span className="nav-line" />
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            style={{ 
              color: 'var(--text-main)', 
              marginLeft: '10px',
              padding: '8px',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Actions */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            className="mobile-theme-toggle"
            onClick={toggleTheme} 
            style={{ 
              padding: '8px', 
              borderRadius: '50%', 
              background: 'var(--glass-bg)', 
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1002
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-main)', zIndex: 1002 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="mobile-menu-overlay"
            style={{ 
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: theme === 'dark' ? 'rgba(3, 7, 18, 0.98)' : 'rgba(255, 255, 255, 0.98)', 
              backdropFilter: 'blur(20px)',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '25px'
            }}
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                whileTap={{ scale: 0.95 }}
                style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-main)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
               <a href="https://github.com/AddyTheDeveloper" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}><Github size={28} /></a>
               <a href="https://www.linkedin.com/in/adityahans17" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}><Linkedin size={28} /></a>
               <a href="mailto:adityahans.17@gmail.com" style={{ color: 'var(--text-main)' }}><Mail size={28} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
