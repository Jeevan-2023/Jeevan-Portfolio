import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Calendar,
  
  Code,
  ChevronRight,
 
} from 'lucide-react';
import './Experience.css';


const experiences = [
  {
    isPlaceholder: true,
    message: 'More experiences coming soon...',
    icon: '🚀',
    date: 'Future',
  },
  {
    title: 'Internship – Full Stack Web Developer',
    company: 'Top Notch IT Consultant (Now Svaapta IT‑Ally Solutions Pvt. Ltd)',
    address: 'National Plaza, S7, RC Dutt Rd, Aradhana Society, Alkapuri, Vadodara',
    duration: 'Dec 2024 – Mar 2025 (3 Months)',
    tech: ['React.js', 'Express Js', 'Node.js', 'Firebase', 'Redux', 'Bootstrap'],
    highlights: [
      'Developed full-stack E-commerce and School Management systems from Figma designs.',
      'Integrated Firebase services for authentication, database, and hosting.',
      'Implemented Redux for efficient state management across the application.',
    ],
    projectLinks: {
      ecommerce: 'https://exclusive-ecommerce-website-five.vercel.app/',
      schoolMgmt: 'https://your-school-management.vercel.app',
    },
    certificateLink: '/Assets/Jeevan Internship Certificate.pdf',
    icon: '💼',
    date: 'Dec 2024',
    status: 'completed',
  },
];

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.roadmap-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
const navigate = useNavigate();
  return (
    <section className="roadmap-section">
         
      <div className="roadmap-header">
       <h2 className="roadmap-title">
  My Professional <span className="highlight-journey">Journey</span>
</h2>

        <p className="roadmap-subtitle">
          Navigate through my career milestones and achievements
        </p>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-line"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            data-index={idx}
            className={`roadmap-card ${visibleCards.has(idx.toString()) ? 'visible' : ''} ${exp.isPlaceholder ? 'placeholder-card' : ''}`}
            style={{ '--delay': `${idx * 0.2}s` }}
          >
            <div className="roadmap-marker">
              <div className="marker-icon">
                {exp.isPlaceholder ? (
                  <img src="/Assets/444.gif" alt="ss" />
                ) : (
                  <img src="/Assets/bag.gif" alt="ss" />
                )}
              </div>
              <div className="marker-pulse"></div>
            </div>

            <div className="roadmap-content">
              {exp.isPlaceholder ? (
                <div className="placeholder-content">
                  <div className="placeholder-icon">
                    <img src="/Assets/444.gif" alt="ss" />
                  </div>
                  <h3>{exp.message}</h3>
                  <p>
                    New to the corporate world, but full of energy and curiosity,
                    ready to dive into exciting opportunities!
                  </p>
                </div>
              ) : (
                <>
                  <div className="card-header">
                    <div className="card-badge">
                      {exp.status === 'completed' ? 'Completed' : 'In Progress'}
                    </div>
                    <div className="card-date">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>

                  <h3 className="card-title">{exp.title}</h3>

                  <div className="company-info">
                    <div className="company-name">
                     <i class="fa-solid fa-briefcase"></i>
                      {exp.company}
                    </div>
                    <div className="company-address">
                     <i class="fa-solid fa-location-dot"></i>
                      {exp.address}
                    </div>
                  </div>

                  <div className="tech-stack">
                    <Code size={16} />
                    <span>Tech Stack:</span>
                    <div className="tech-tags">
                      {exp.tech.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.highlights && (
                    <div className="highlights-section">
                      <h4>Key Achievements:</h4>
                      <ul className="highlights-list">
                        {exp.highlights.map((point, pi) => (
                          <li key={pi}>
                            <ChevronRight size={14} />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="card-actions">
                    <button
                      className="action-btn project-btn"
                      onClick={() =>
                        setExpandedCardIndex(idx === expandedCardIndex ? null : idx)
                      }
                    >
                      <i className="fa-brands fa-github"></i> View Projects
                    </button>
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn certificate-btn"
                      >
                        <i className="fa-solid fa-medal"></i> Certificate
                      </a>
                    )}
                  </div>

                  {expandedCardIndex === idx && (
                    <div className="project-buttons">
                      <h4 className="view-project-title">Select the project you want to view:</h4>

                      <button
                        onClick={() => window.open(exp.projectLinks.ecommerce, '_blank')}
                      >
                        <i className="fa-solid fa-cart-shopping"></i> E-Commerce
                      </button>

                      <button
  onClick={() => navigate('/project-gallery/2')}  
>
  <i className="fa-solid fa-school"></i> School Management
</button>

                    </div>
                  )}

                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;