import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Github from 'lucide-react/dist/esm/icons/github';

const Projects = () => {
  const projects = [
    {
      title: "TargetQuiz",
      desc: "Real-time quiz platform with live sessions, role-based dashboards, and secure JWT-based authentication.",
      tech: ["MERN", "Socket.IO", "JWT", "REST API"],
      github: "https://github.com/AddyTheDeveloper/TargetQuiz"
    },
    {
      title: "Stock Span Analyzer",
      desc: "Algorithm visualization web app calculating stock span values with O(n) complexity and chart-based visualizations.",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      github: "https://github.com/AddyTheDeveloper/stock-span-analyzer-visual",
      live: "https://addythedeveloper.github.io/stock-span-analyzer-visual/"
    },
    {
      title: "Cosmic Tasks",
      desc: "A premium-quality, futuristic todo list with glassmorphism UI, fluid micro-animations, and mission-based management.",
      tech: ["React 19", "Vite", "CSS Modules"],
      github: "https://github.com/AddyTheDeveloper/Todo-List",
      live: "https://addythedeveloper.github.io/Todo-List/"
    },
    {
      title: "Cyberpunk Weather App",
      desc: "High-performance weather app with real-time 3D globe visualization and dynamic environment engines.",
      tech: ["React 19", "Vite 7", "Tailwind CSS v4"],
      github: "https://github.com/AddyTheDeveloper/Weather-App",
      live: "https://addythedeveloper.github.io/Weather-App/"
    },
    {
      title: "Reviewly",
      desc: "Full-stack MERN application with secure JWT authentication, admin dashboard, and dynamic review management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/AddyTheDeveloper/Product_Review_System"
    },
    {
      title: "PlaceMentor",
      desc: "Premium educational platform for mastering technical interviews with visual learning and AI-driven interactivity.",
      tech: ["HTML5", "CSS3", "JavaScript", "Gemini AI"],
      github: "https://github.com/AddyTheDeveloper/PlaceMentor",
      live: "https://addythedeveloper.github.io/PlaceMentor/"
    },
    {
      title: "Expense Tracker",
      desc: "Modern financial management dashboard with visual analytics, transaction management, and glassmorphism aesthetic.",
      tech: ["React 19", "Tailwind CSS v4", "Framer Motion", "Recharts"],
      github: "https://github.com/AddyTheDeveloper/Expense-Tracker-App",
      live: "https://addythedeveloper.github.io/Expense-Tracker-App/"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div style={{ textAlign: 'center', marginBottom: '60px', scrollMarginTop: '100px' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '10px' }}><span className="gradient-text">Featured</span> Projects</h2>
        <p style={{ color: 'var(--text-muted)' }}>A collection of projects that showcase my obsession with performance and design.</p>
      </div>

      <motion.div 
        layout
        className="projects-grid" 
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}
      >
        <style>{`
          @media (max-width: 640px) {
            .projects-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          }
        `}</style>
        
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 100, damping: 15 }
                }
              }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              onClick={() => window.open(project.live || project.github, '_blank')}
              whileHover={{ 
                y: -10,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 }
              }}
              className="glass"
              style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column',
                perspective: '1000px',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                height: '180px', 
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '1px solid var(--border-glass)',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={`/projects/${project.title.toLowerCase().replace(/ /g, '_')}.png`} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: 800 }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '20px', flex: 1, lineHeight: '1.6' }}>{project.desc}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{ fontSize: '12px', color: 'var(--primary)', border: '1px solid var(--border-glass)', padding: '4px 10px', borderRadius: '8px', background: 'var(--glass-bg)', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--text-main)', transition: 'color 0.3s ease' }} 
                    onMouseOver={(e) => e.target.style.color = 'var(--primary)'} 
                    onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}
                  >
                    <Github size={18} /> Source
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={(e) => e.stopPropagation()}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--accent)', transition: 'all 0.3s ease' }} 
                      onMouseOver={(e) => e.target.style.filter = 'brightness(1.2)'} 
                      onMouseOut={(e) => e.target.style.filter = 'none'}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
