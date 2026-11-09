import React from 'react';

const footerLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand" aria-label="S V Vishnu Vamsi, home">
            S V Vishnu Vamsi
          </a>
          <p>
            Computer Science student passionate about programming, web development, and using AI tools at a high level to solve real-world problems.
          </p>
          <ul className="footer-list" aria-label="Social links">
            <li><a href="https://github.com/SistlaVishva04" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/vamsi-sistla" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="footer-heading">Quick links</h2>
          <ul className="footer-list">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <a href={`#${link.to}`} className="scroll-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-list">
            <li><a href="mailto:vishvasistla04@gmail.com">vishvasistla04@gmail.com</a></li>
            <li><a href="tel:+919493985540">+91 9493985540</a></li>
            <li><span>Hyderabad, India</span></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-heading">Currently</h2>
          <p>Open to opportunities in software engineering, AI/ML, and data analytics.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} S V Vishnu Vamsi</p>
      </div>
    </div>
  </footer>
);
