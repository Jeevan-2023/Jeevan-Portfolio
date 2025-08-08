import React, { useEffect, useRef } from 'react';
import './Services.css';

const WhatIDo = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const animationFrameIds = [];

    cards.forEach((card, index) => {
      if (!card) return;

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const throttledMouseMove = (e) => {
        if (animationFrameIds[index]) cancelAnimationFrame(animationFrameIds[index]);
        animationFrameIds[index] = requestAnimationFrame(() => handleMouseMove(e));
      };

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      };

      card.addEventListener('mousemove', throttledMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card, index) => {
        if (!card) return;
        card.removeEventListener('mousemove', () => { });
        card.removeEventListener('mouseleave', () => { });
        if (animationFrameIds[index]) cancelAnimationFrame(animationFrameIds[index]);
      });
    };
  }, []);


 const services = [
  {
    image: "/Assets/Full Stack.png",
    title: "Full-Stack Web Development",
    description: "I build scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
  },
  {
    image: "/Assets/Database.png",
    title: "Database Integration",
    description: "I handle end-to-end database integration using platforms like Firebase and MongoDB, ensuring reliable data storage, real-time updates, and secure access control."
  },
  {
    image: "/Assets/UIUX.png",
    title: "UI/UX Design",
    description: "I design user-centric interfaces using Figma and bring them to life with responsive layouts using Tailwind CSS, Bootstrap, and custom CSS."
  },
  {
    image: "/Assets/Dashboard.png",
    title: "Custom Dashboards & Admin Systems",
    description: "I develop tailored dashboards and admin panels that empower clients to manage data, users, and operations efficiently across various platforms."
  }



  ];

  return (
    <div className="services-section">


      

   <video autoPlay muted loop playsInline className="bg-about-video">
    <source src="/Assets/555.mp4" type="video/mp4" />
  </video>

     
      <div className="services-container">

        <div className="section-header">
          
          <h2 className="services-title">
            <span className="title-text">Services I Offer</span>

          </h2>
           <div className="title-underline">
            <span className="underline-segment segment-1"></span>
            <span className="underline-segment segment-2"></span>
            <span className="underline-segment segment-3"></span>
          </div>
          <p className="services-subtitle">Crafting digital experiences with cutting-edge technologies</p>
         
        </div>


        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              ref={el => cardRefs.current[index] = el}
            >

              <div className="card-glow"></div>
              <div className="card-border"></div>
              <div className="icon-container">
                <img src={service.image} alt={service.title} className="service-image-icon" />

                <div className="icon-bg"></div>
                <div className="icon-pulse"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="card-corner corner-tl"></div>
              <div className="card-corner corner-tr"></div> 
              <div className="card-corner corner-bl"></div>
              <div className="card-corner corner-br"></div>
              <div className="hover-overlay"></div>
            </div>
          ))}
        </div>


        <div className="bottom-decoration">
          <div className="decoration-line">
            <span className="line-segment"></span>
            <span className="line-dot"></span>
            <span className="line-segment"></span>
            <span className="line-dot"></span>
            <span className="line-segment"></span>
          </div>
        </div>
      </div>
   </div>
  );
};

export default WhatIDo;