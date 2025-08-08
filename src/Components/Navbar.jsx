import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="brand">
            <img src="/Assets/icon.png" alt="Logo" />
            <span className="first-name">Jeevan</span>
            <span className="last-name">Varghese</span>
          </div>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#experience', label: 'Experience' },
            { href: '#resume', label: 'Resume' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                closeMenu();
              }}
              className={activeLink === link.href ? 'active-link' : ''}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
