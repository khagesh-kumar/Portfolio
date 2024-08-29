import React from "react";
import './AboutSection.css';
import webDevelopmentIcon from '../images/web-development-icon.png';
import frontendFrameworkIcon from '../images/frontend-framework-icon.png';
import apiIntegrationIcon from '../images/api-integration-icon.png';
import responsiveDesignIcon from '../images/responsive-design-icon.png';
import project1Image from '../images/project1-image.png';
import project2Image from '../images/project2-image.png';
import project3Image from '../images/project3-image.png';
import project4Image from '../images/project4-image.png';

const AboutSection = () => {
  return (
    <div className="about-section">
      <h3>About</h3>
      <p>
        I am a dedicated and passionate FrontEnd developer with a strong background in computer science 
        and a knack for problem-solving. I strive to create efficient and user-friendly solutions. My aim is to bring across your message and identity in the most creative way.
      </p>
      <br/>
      <h3 className="what-i-do-heading">What I Do?</h3>
      <div className="what-i-do">
        <div className="service web-development">
          <img src={webDevelopmentIcon} alt="Web Development Icon" />
          <div>
            <h4>Web Development</h4>
            <p>
              Building responsive, fast-loading websites with HTML, CSS, JavaScript, and modern frameworks like React.js.
            </p>
          </div>
        </div>
        <div className="service frontend-frameworks">
          <img src={frontendFrameworkIcon} alt="FrontEnd Framework Icon" />
          <div>
            <h4>FrontEnd Frameworks</h4>
            <p>
              Developing complex applications using React, ensuring maintainable and scalable code.
            </p>
          </div>
        </div>
        <div className="service api-integration">
          <img src={apiIntegrationIcon} alt="API Integration Icon" />
          <div>
            <h4>API Integration</h4>
            <p>
              Connecting front-end applications to back-end services and third-party APIs for dynamic content.
            </p>
          </div>
        </div>
        <div className="service responsive-design">
          <img src={responsiveDesignIcon} alt="Responsive Design Icon" />
          <div>
            <h4>Responsive Design</h4>
            <p>
              Ensuring websites look great and function well on all devices by implementing responsive design principles.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h3 className="my-skills-heading">My Skills</h3>
      <div className="my-skills">
        <div className="skill html">
          <p>HTML</p>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <div className="skill css">
          <p>CSS</p>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <div className="skill javascript">
          <p>JavaScript</p>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
        <div className="skill react">
          <p>React</p>
          <div className="skill-bar-container">
            <div className="skill-bar">
              <div className="skill-bar-inner" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3 className="projects-heading">My Projects</h3>
      <div className="projects">
        <div className="project-card">
          <img src={project1Image} alt="Project 1" className="project-image" />
          <div className="project-info">
            <h4>E-Commerce website </h4>
            <p>Using ReactJs </p>
            <a href="/project1-details" className="read-more-link">Read More</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project2Image} alt="Project 2" className="project-image" />
          <div className="project-info">
            <h4>Travel Website</h4>
            <p>Using Html, Css, and Javascript</p>
            <a href="/project2-details" className="read-more-link">Read More</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project3Image} alt="Project 3" className="project-image" />
          <div className="project-info">
            <h4>Responsive Portfolio website</h4>
            <p>Using React</p>
            <a href="/project3-details" className="read-more-link">Read More</a>
          </div>
        </div>
        <div className="project-card">
          <img src={project4Image} alt="Project 4" className="project-image" />
          <div className="project-info">
            <h4>Real-time chat application</h4>
            <p></p>
            <a href="/project4-details" className="read-more-link">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
