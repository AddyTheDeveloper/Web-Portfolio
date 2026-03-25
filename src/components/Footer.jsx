import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowUp, Terminal } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/AddyTheDeveloper", label: "GitHub" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/adityahans17", label: "LinkedIn" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/addythedeveloper", label: "Instagram" },
    { icon: <Mail size={20} />, url: "mailto:adityahans.17@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" }
  ];

  return (
    <footer style={{ position: 'relative', background: 'transparent', borderTop: '1px solid var(--border-glass)', padding: '40px 0' }}>
      <div className="section-container">
        <div className="footer-layout" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }}>
          <style>{`
            @media (max-width: 900px) {
              .footer-layout { flex-direction: column !important; text-align: center; gap: 30px !important; justify-content: center !important; }
              .footer-nav { justify-content: center !important; }
              .footer-social-thin { justify-content: center !important; }
            }
            .footer-link-thin {
              color: var(--text-muted);
              transition: all 0.3s ease;
              font-size: 14px;
              font-weight: 500;
              margin: 0 15px;
            }
            .footer-link-thin:hover {
              color: var(--primary);
              text-shadow: 0 0 10px var(--primary-glow);
            }
            .social-btn-thin {
              color: var(--text-muted);
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 35px;
              height: 35px;
              background: var(--glass-bg);
              border: 1px solid var(--border-glass);
              border-radius: 8px;
            }
            .social-btn-thin:hover {
              color: var(--primary);
              border-color: var(--primary);
              transform: translateY(-3px);
              box-shadow: 0 5px 15px var(--primary-glow);
            }
            .back-to-top {
              position: fixed;
              bottom: 30px;
              right: 30px;
              width: 50px;
              height: 50px;
              border-radius: 15px;
              background: var(--primary);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 100;
              box-shadow: 0 10px 25px var(--primary-glow);
              border: none;
            }
          `}</style>

          {/* Brand Logo */}
          <div className="footer-brand-thin">
            <a href="#home" style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '1px' }}>
              ADITYA <span className="gradient-text">HANS</span>
            </a>
          </div>

          {/* Centered Navigation */}
          <div className="footer-nav" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {quickLinks.map((link, i) => (
              <a key={i} href={link.url} className="footer-link-thin">
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Copyright */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }} className="footer-social-thin">
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn-thin"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', borderLeft: '1px solid var(--border-glass)', paddingLeft: '20px', margin: 0 }} className="footer-copy-thin">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="back-to-top"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
