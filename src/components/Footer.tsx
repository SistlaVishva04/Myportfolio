import React from 'react';
import { Link } from 'react-scroll';
import {  ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black pt-16 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-2xl font-bold font-heading cursor-pointer inline-block mb-4"
            >
              <span className="text-primary-500">Vishnu</span> Vamsi
            </Link>
            <p className="text-dark-300 mb-6 max-w-md">
              Computer Science student passionate about programming, web development, and using AI tools at a high level to solve real-world problems.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SistlaVishva04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-dark-700 transition-colors rounded-full"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-300">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              <a 
                href="https://linkedin.com/in/vamsi-sistla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 hover:bg-dark-700 transition-colors rounded-full"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-300">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
              <a 
                href="mailto:vishnuvamsi04@gmail.com"
                className="p-2 bg-dark-800 hover:bg-dark-700 transition-colors rounded-full"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark-300">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="text-dark-300 hover:text-primary-400 transition-colors cursor-pointer inline-flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-dark-300">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:vishnuvamsi04@gmail.com" className="hover:text-primary-400 transition-colors">
                  vishnuvamsi04@gmail.com
                </a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="tel:+919493985540" className="hover:text-primary-400 transition-colors">
                  +91 9493985540
                </a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-800 text-center text-dark-400">
            <p>
              © {currentYear} S V Vishnu Vamsi — Made with ❤️
            </p>
        </div>

      </div>
    </footer>
  );
};