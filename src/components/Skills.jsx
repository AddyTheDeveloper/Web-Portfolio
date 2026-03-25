import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Users, Briefcase, Zap, Code2, Globe, Database, Cpu, Terminal } from 'lucide-react';

const SkillCard = ({ category, horizontal = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="category-card-wrapper"
    >
      <div className="category-card">
        {/* Corner Brackets */}
        <div className="corner-bracket top-left"></div>
        <div className="corner-bracket top-right"></div>
        <div className="corner-bracket bottom-left"></div>
        <div className="corner-bracket bottom-right"></div>

        {/* Scanning Line */}
        <div className="scan-line"></div>

        <div className="card-header">
          <div className="icon-box">
            {category.icon}
            <div className="icon-glow"></div>
          </div>
          <div>
            <div className="category-meta">PROT_V.2.4</div>
            <h3 className="category-title">{category.title}</h3>
          </div>
        </div>

        <div className={`skill-items-grid ${horizontal ? 'horizontal' : ''}`}>
          {category.skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skill-chip"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <div className="skill-icon-wrapper">
                {typeof skill.icon === 'string' ? (
                  <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-status-dots">
                <div className="dot active"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="category-icon" />,
      skills: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Globe className="category-icon" />,
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }
      ]
    },
    {
      title: "Databases & Core",
      icon: <Database className="category-icon" />,
      skills: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Cpu className="category-icon" />,
      skills: [
        { name: "Problem Solving", icon: <Brain size={18} /> },
        { name: "Team Player", icon: <Users size={18} /> },
        { name: "Project Management", icon: <Briefcase size={18} /> },
        { name: "Adaptability", icon: <Zap size={18} /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="tech-badge"
        >
          <Terminal size={14} /> <span>SYSTEM_CAPABILITIES</span>
        </motion.div>
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">
          Comprehensive mastery of core technologies and architectural patterns for building scalable, high-performance digital solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.slice(0, 3).map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>

      <div className="soft-skills-container" style={{ marginTop: '30px' }}>
        <SkillCard category={skillCategories[3]} horizontal={true} />
      </div>

      <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tech-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--glass-bg);
          border: 1px solid var(--border-glass);
          border-radius: 100px;
          font-size: 11px;
          font-family: monospace;
          color: var(--primary);
          letter-spacing: 2px;
          margin-bottom: 20px;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.1);
        }
        .section-title {
          font-size: clamp(32px, 5vw, 42px);
          margin-bottom: 15px;
          font-weight: 800;
        }
        .section-subtitle {
          color: var(--text-muted);
          max-width: 600px;
          font-size: 16px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          perspective: 1000px;
        }

        .category-card-wrapper {
          height: 100%;
          transform-style: preserve-3d;
        }

        .category-card {
          position: relative;
          background: var(--bg-card);
          backdrop-filter: blur(20px);
          border: 1px solid var(--border-glass);
          padding: 30px;
          border-radius: 20px;
          height: 100%;
          overflow: hidden;
          transition: border-color 0.3s ease;
        }

        .category-card:hover {
          border-color: var(--primary);
        }

        /* Tech Brackets */
        .corner-bracket {
          position: absolute;
          width: 15px;
          height: 15px;
          border-color: var(--primary);
          border-style: solid;
          opacity: 0.3;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .category-card:hover .corner-bracket {
          opacity: 0.8;
          transform: scale(1.1);
        }

        .top-left { top: 15px; left: 15px; border-width: 2px 0 0 2px; }
        .top-right { top: 15px; right: 15px; border-width: 2px 2px 0 0; }
        .bottom-left { bottom: 15px; left: 15px; border-width: 0 0 2px 2px; }
        .bottom-right { bottom: 15px; right: 15px; border-width: 0 2px 2px 0; }

        /* Scanning Line */
        .scan-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--primary), transparent);
          opacity: 0.1;
          pointer-events: none;
          animation: scan 4s linear infinite;
        }

        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .icon-box {
          position: relative;
          width: 50px;
          height: 50px;
          background: var(--glass-bg);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .icon-glow {
          position: absolute;
          inset: 0;
          background: var(--primary);
          filter: blur(15px);
          opacity: 0.1;
          border-radius: 12px;
        }

        .category-meta {
          font-family: monospace;
          font-size: 10px;
          color: var(--primary);
          letter-spacing: 1px;
          opacity: 0.6;
        }

        .category-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-main);
        }

        .skill-items-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-items-grid.horizontal {
          flex-direction: row;
          flex-wrap: wrap;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        @media (max-width: 1100px) {
          .skill-items-grid.horizontal {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skill-items-grid.horizontal {
            grid-template-columns: 1fr;
          }
        }

        .skill-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .skill-chip:hover {
          background: rgba(99, 102, 241, 0.08);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
        }

        .skill-icon-wrapper {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          filter: drop-shadow(0 0 5px rgba(139, 92, 246, 0.3));
        }

        .skill-icon-img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .skill-name {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
        }

        .skill-status-dots {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--border-glass);
        }

        .dot.active {
          background: var(--primary);
          box-shadow: 0 0 5px var(--primary);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .category-card {
            padding: 25px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
