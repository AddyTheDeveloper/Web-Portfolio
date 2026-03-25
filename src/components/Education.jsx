import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Lovely Professional University, Phagwara, Punjab",
      period: "Aug 2023 - Present",
      stats: "CGPA: 7.18"
    },
    {
      degree: "Intermediate (PCM)",
      institution: "DIPS School, Jalandhar, Punjab",
      period: "2021 - 2023",
      stats: "Percentage: 69.8%"
    },
    {
      degree: "Matriculation",
      institution: "DIPS School, Jalandhar, Punjab",
      period: "2020 - 2021",
      stats: "Percentage: 70.6%"
    }
  ];

  const certificates = [
    { title: "Cloud Computing (Elite)", issuer: "NPTEL – IIT Kharagpur", date: "Apr 2025" },
    { title: "Master Generative AI & AI Tools", issuer: "Udemy", date: "Aug 2025" },
    { title: "Computational Theory", issuer: "Infosys Springboard", date: "Aug 2025" },
    { title: "Hardware & OS", issuer: "IBM – Coursera", date: "Sep 2024" },
    { title: "Data Structures & Algorithms", issuer: "C++ Specialization", date: "Aug 2024" },
    { title: "Object Oriented Programming", issuer: "Infosys Springboard", date: "Jul 2024" },
    { title: "Javascript Intermediate", issuer: "HackerRank", date: "Jun 2024" },
    { title: "Network Communication", issuer: "Coursera", date: "May 2024" },
    { title: "TCP/IP Protocols", issuer: "IBM / Coursera", date: "Apr 2024" },
    { title: "Java Programming", issuer: "SoloLearn", date: "Mar 2024" }
  ];

  const achievements = [
    {
      title: "Adobe India Hackathon",
      desc: "Cleared MCQ and Coding rounds focused on DSA (Jun 2025).",
      icon: <Award size={24} />
    },
    {
      title: "GDG Hackathon",
      desc: "Secured Top 5 ranking with efficient software design (Mar 2024).",
      icon: <Award size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', marginBottom: '15px' }}>
          Academic <span className="gradient-text">& Certifications</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>My educational background and professional milestones.</p>
      </div>

      {/* 1. Educational Background */}
      <div style={{ marginBottom: '100px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <GraduationCap className="gradient-text" /> Educational Background
        </h3>
        
        <motion.div 
          className="timeline" 
          style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', paddingLeft: '30px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div style={{ position: 'absolute', left: '0', top: '10px', bottom: '10px', width: '2px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)' }} />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {education.map((item, idx) => (
              <motion.div 
                key={item.degree} 
                variants={itemVariants} 
                style={{ position: 'relative' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="timeline-dot" style={{ position: 'absolute', left: '-39px', top: '5px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--bg-dark)', border: '3px solid var(--primary)', boxShadow: '0 0 10px var(--primary-glow)', zIndex: 2 }} />
                <div className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
                    <div>
                      <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>{item.degree}</h4>
                      <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '15px', marginTop: '5px' }}>{item.institution}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '14px', marginBottom: '5px' }}>
                        <Calendar size={14} /> {item.period}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-main)' }}>{item.stats}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 2. Certificates */}
      <div style={{ marginBottom: '100px' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <Award className="gradient-text" /> Certificates
        </h3>
        
        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: '20px' 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {certificates.map((cert, idx) => (
            <motion.div 
              key={cert.title} 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass"
              style={{ padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}
            >
              <div style={{ padding: '12px', background: 'var(--glass-bg)', borderRadius: '12px', color: 'var(--secondary)' }}>
                <Award size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px' }}>{cert.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{cert.issuer}</p>
                <p style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 600, marginTop: '4px' }}>{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3. Achievements */}
      <div>
        <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <Award className="gradient-text" /> Achievements
        </h3>
        
        <motion.div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto' 
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {achievements.map((item) => (
            <motion.div 
              key={item.title} 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass"
              style={{ padding: '30px', borderRadius: '24px', textAlign: 'center' }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'var(--primary-glow)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--primary)',
                margin: '0 auto 20px',
                border: '1px solid var(--border-glass)'
              }}>
                {item.icon}
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .timeline { padding-left: 20px !important; }
          .timeline > div:nth-child(1) { left: -5px !important; }
          .timeline-dot { left: -14px !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
