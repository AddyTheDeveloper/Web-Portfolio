import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import Github from 'lucide-react/dist/esm/icons/github';
import Linkedin from 'lucide-react/dist/esm/icons/linkedin';
import Instagram from 'lucide-react/dist/esm/icons/instagram';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.target);
    formData.append("access_key", "e78e0000-4579-4d85-ae83-a01c59605934");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Cinematic Background Elements */}


      <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '15px', fontWeight: 900 }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind or just want to say hi? Feel free to reach out and let's create something together.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="contact-grid" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { 
              grid-template-columns: 1fr !important; 
              gap: 30px !important; 
              padding: 0 15px !important;
              width: 100% !important;
            }
            .section-container { padding: 60px 0 !important; }
            .contact-form-card { padding: 25px !important; border-radius: 20px !important; }
            .contact-info-card { padding: 15px !important; gap: 15px !important; }
          }
          @media (max-width: 640px) {
            .contact-inner-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
          }
          .form-input:focus {
            border-color: var(--primary) !important;
            box-shadow: 0 0 25px var(--primary-glow) !important;
          }
          .floating-icon {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          [data-theme='light'] .glass.form-input::placeholder {
            color: #64748b !important;
            opacity: 1;
          }
          [data-theme='light'] .contact-info-card, 
          [data-theme='light'] .contact-form-card {
            box-shadow: var(--card-shadow);
          }
          [data-theme='light'] label { color: #334155 !important; }
          [data-theme='light'] h3, [data-theme='light'] h2 { color: #0f172a !important; }
          [data-theme='light'] .contact-info-card p:first-child { color: #475569 !important; }
          [data-theme='light'] .contact-info-card p:last-child { color: #0f172a !important; }
          .contact-info-card, .contact-form-card {
            transition: all 0.3s ease;
          }
        `}</style>
        
        {/* Contact Info Column */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <motion.div 
              whileHover={{ x: 10 }}
              className="contact-info-card"
              style={{ display: 'flex', gap: '25px', alignItems: 'center', padding: '20px', borderRadius: '20px', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', border: '1px solid var(--border-glass)' }}>
                <Mail size={28} className="floating-icon" />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Email me at</p>
                <p style={{ fontWeight: 700, fontSize: '18px', wordBreak: 'break-word' }}>adityahans.17@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 10 }}
              className="contact-info-card"
              style={{ display: 'flex', gap: '25px', alignItems: 'center', padding: '20px', borderRadius: '20px', background: 'var(--bg-card)', border: '1px solid var(--border-glass)' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', border: '1px solid var(--border-glass)' }}>
                <MapPin size={28} className="floating-icon" style={{ animationDelay: '1s' }} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>Location</p>
                <p style={{ fontWeight: 700, fontSize: '18px' }}>Jalandhar, Punjab, India</p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="glass contact-info-card" 
            style={{ padding: '40px', borderRadius: '30px', position: 'relative', overflow: 'hidden' }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', filter: 'blur(50px)', opacity: 0.1 }}></div>
            <h3 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 800 }}>Let's Build Something Great</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.8 }}>
              Whether it's a new project, a freelance opportunity, or just a technical discussion, I'm always open to connecting. Let's transform your vision into a stunning digital reality.
            </p>
          </motion.div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="glass contact-form-card"
          style={{ padding: '40px', borderRadius: '30px' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <input type="hidden" name="subject" value="New Portfolio Message from {{name}}" />
            <input type="hidden" name="from_name" value="Aditya Hans Portfolio" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="contact-inner-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '5px' }}>Your Name</label>
                <input required name="name" type="text" placeholder="John Doe" className="glass form-input" style={{ padding: '15px 20px', borderRadius: '15px', outline: 'none', color: 'var(--text-main)', background: 'var(--bg-card)', width: '100%', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '5px' }}>Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className="glass form-input" style={{ padding: '15px 20px', borderRadius: '15px', outline: 'none', color: 'var(--text-main)', background: 'var(--bg-card)', width: '100%', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '5px' }}>Your Message</label>
              <textarea required name="message" rows="5" placeholder="Tell me about your project..." className="glass form-input" style={{ padding: '15px 20px', borderRadius: '15px', outline: 'none', color: 'var(--text-main)', background: 'var(--bg-card)', resize: 'none', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}></textarea>
            </div>

            <motion.button 
              type="submit" 
              disabled={status === "sending"}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px var(--primary-glow)' }}
              whileTap={{ scale: 0.98 }}
              className="glow-btn" 
              style={{ 
                width: '100%', 
                marginTop: '15px', 
                padding: '18px',
                fontSize: '16px',
                fontWeight: 800,
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '12px',
                background: status === "success" ? '#10b981' : 'var(--primary-gradient)',
                borderColor: status === "success" ? '#059669' : 'transparent',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              {status === "sending" ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ display: 'flex', alignItems: 'center' }}>
                   <div style={{ width: '20px', height: '20px', border: '3px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} />
                </motion.div>
              ) : status === "success" ? "Message Dispatched!" : "Ignite Conversation"}
              {status === "success" ? <CheckCircle size={22} /> : status !== "sending" && <Send size={22} />}
            </motion.button>
            
            {/* Social Links Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
              {[
                { icon: <Github size={22} />, href: "https://github.com/AddyTheDeveloper", label: "GitHub" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/adityahans17", label: "LinkedIn" },
                { icon: <Instagram size={22} />, href: "https://www.instagram.com/addythedeveloper", label: "Instagram" },
                { icon: <Mail size={22} />, href: "mailto:adityahans.17@gmail.com", label: "Email" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5, scale: 1.1, background: 'var(--glass-bg)', borderColor: 'var(--primary)' }}
                  whileTap={{ scale: 0.9 }}
                  style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '12px', 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-glass)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--text-main)',
                    transition: 'all 0.3s ease'
                  }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <AnimatePresence>
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }}
                  style={{ color: '#ef4444', fontSize: '14px', textAlign: 'center', marginTop: '10px' }}
                >
                  Encryption error. Please reload and try again.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
