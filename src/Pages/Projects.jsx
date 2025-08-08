import React from 'react';
import './Projects.css';
import { useNavigate } from 'react-router-dom';

const ProjectsShowcase = () => {


  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce project where users can place order , add products to card & wishlist , track their order, download invoice and many more features.",
      longDescription: "This comprehensive e-commerce platform includes user authentication, dynamic product catalog, shopping cart functionality, order management system, and a fully equipped admin dashboard for inventory and user control.",
      technologies: ["React", "Node.js", "Firebase", "Express Js", "Redux", "Nodemailer", "Bootstrap"],
      category: "Full Stack",
      image: "/Assets/Ecommerce card.png",


      liveUrl: "https://exclusive-ecommerce-website-five.vercel.app/",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "School Management System",
      description: "Advanced school management platform with dedicated portals for students, teachers, and admins, supporting attendance, academics, and administrative control.",
      longDescription: "The platform's core highlight is its smart webcam-based attendance system, allowing teachers and students to punch in and out with real-time tracking and late entry alerts for admins and many more features ahead.",
      technologies: ["React", "Node.js", "Express Js", "Nodemailer", "Firebase"],
      category: "Full Stack",
      image: "/Assets/School card.png",


      liveUrl: "https://school-management.vercel.app",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Personal Finance Tracker",
      description: "Smart finance tracking application with real-time expense monitoring, budgeting tools, and visual insights into income and spending",
      longDescription: "This full-featured personal finance tracker enables users to log income and expenses, set monthly budgets, and monitor their financial health through detailed analytics. The app includes interactive charts for spending trends, category-wise breakdowns, and investment portfolio tracking. With secure authentication and persistent data storage, users can manage and review their financial activity anytime.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Plaid API"],
      category: "Finance App",
      image: "/Assets/Finance card.png",


      liveUrl: "https://finance-tracker.vercel.app",
      featured: true,
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "Movie Streaming Website",
      description: "Streaming platform with user profiles, watchlists, custom player, and intelligent content recommendations.",
      longDescription: "This versatile streaming platform allows users to create individual profiles, build personalized watchlists, and receive smart content suggestions based on viewing behavior. With a clean and responsive interface, it enables smooth content browsing, management, and playback across a wide range of media categories.",
      technologies: ["React", "Node.js", "MongoDB", "Express Js", "HLS", "FFmpeg", "Tailwind CSS"],
      category: "Web App",
      image: "/Assets/Movie card.png",


      liveUrl: "https://movie-streaming.vercel.app",
      featured: true,
      status: "In Progress",
      year: "2024"
    },


    {
      id: 5,
      title: "Automatic Bill Generator",
      description: "To be added later",
      longDescription: "...",
      technologies: ["TO BE ADDED LATER"],
      category: "Business App",
      image: "/Assets/Bill card.png",


      liveUrl: "https://bill-generator.vercel.app",
      featured: true,
      status: "Future Project",
      year: "2024"
    }
  ];

  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <div className="projects-showcase">

      <header className="hero-section">
        <div className="projects-container">
          <h1 className="hero-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="hero-subtitle">
            Crafting digital experiences through code, creativity, and innovation
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">{projectsData.length}+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </header>


      <section className="featured-section">
        <div className="featured-bg" />
        <div className="project-container">
          <h2 className="section-title">
  Featured <span className="highlight-projects">Projects</span>
</h2>

          <div className="featured-grid">
            {featuredProjects.map(project => (
              <div className="flip-card" key={project.id}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">

                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="card-content">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-meta">
                        <span className={`status-badge ${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {project.status}
                        </span>
                         {project.title === "Personal Finance Tracker" && (
                          <span className="status-badge group-project">Group Project</span>
                        )}
                        
                       
                      </div>
                      <span className='touch-to-flip'>Touch To See Details</span>


                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="back-content">
                      <h3 className="back-title">{project.title}</h3>
                      <p className="back-description">{project.description}</p>
                      <p className='back-description'>{project.longDescription}</p>
                      <div className="back-tech">
                        {project.technologies.slice(0, 7).map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="back-actions">
                        {project.title !== "Automatic Bill Generator" && project.title !== "Movie Streaming Website" && (
                          <button
                            className="action-btn"
                            onClick={() => {
                              if (
                                project.title === "School Management System" ||
                                project.title === "Personal Finance Tracker"
                              ) {
                                navigate(`/project-gallery/${project.id}`);
                              } else {
                                window.open(project.liveUrl, '_blank');
                              }
                            }}
                          >
                            {project.title === "School Management System" ||
                              project.title === "Personal Finance Tracker" ? (
                              <>
                                <i className="fa-solid fa-eye"></i>
                                View Images
                              </>
                            ) : (
                              <>
                                <i className="fa-solid fa-up-right-from-square"></i>
                                Live Demo
                              </>
                            )}
                          </button>

                        )}

                        {project.title === "Automatic Bill Generator" && (
                          <button className="action-btn" disabled>
                            <i className="fa-solid fa-hourglass-half" style={{ marginRight: '6px' }}></i>
                            To Be Added Later
                          </button>
                        )}

                        {project.title === "Movie Streaming Website" && (
                          <button className="action-btn" disabled>
                            <i className="fa-solid fa-wrench" style={{ marginRight: '6px' }}></i>
                            Project in Progress
                          </button>
                        )}

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsShowcase;
