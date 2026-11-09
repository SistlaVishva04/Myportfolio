import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../img/myimage1.jpeg';

export const Hero: React.FC = () => (
  <section id="home" className="hero-section" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span>Software Engineer</span>
          <span className="hero-name">S V Vishnu Vamsi</span>
        </h1>
        <p className="hero-summary">
          Building scalable systems, intelligent APIs, and data-driven solutions powered by AI.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="action-link action-link--primary">
            Contact me
          </a>
          <a href="#projects" className="action-link action-link--secondary">
            View projects
          </a>
        </div>
        <div className="hero-socials" aria-label="Social and email links">
          <a href="https://github.com/SistlaVishva04" target="_blank" rel="noopener noreferrer">
            <Github aria-hidden="true" size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/vamsi-sistla" target="_blank" rel="noopener noreferrer">
            <Linkedin aria-hidden="true" size={16} /> LinkedIn
          </a>
          <a href="mailto:vishvasistla04@gmail.com">
            <Mail aria-hidden="true" size={16} /> Email
          </a>
        </div>
      </div>
      <figure className="hero-portrait">
        <img
          src={profileImage}
          alt="Portrait of S V Vishnu Vamsi"
          width={733}
          height={722}
          loading="eager"
        />
      </figure>
    </div>
  </section>
);
