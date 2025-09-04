import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import mydp1 from '../img/mydp1.jpg';
export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block dark:text-white">Hi there, I'm</span>
              <span className="text-primary-600 dark:text-primary-400">
                S V Vishnu Vamsi
              </span>
            </motion.h1>
            
            <motion.div
              className="mb-6 text-xl md:text-2xl text-dark-600 dark:text-dark-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  'AI Assistant Developer',
                  1000,
                  'Vibe Coder',
                  1000,
                  'Software Developer',
                  1000,
                  'Data Analyst',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 text-dark-500 dark:text-dark-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Passionate about programming and software development with hands-on experience
              in website development and AI tools.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-primary bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400"
              >
                Contact Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn-primary bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700"
              >
                View Projects
              </Link>
            </motion.div>
            
            <motion.div
              className="mt-8 flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://github.com/SistlaVishva04"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-100 dark:bg-dark-800 rounded-full transition-colors hover:bg-dark-200 dark:hover:bg-dark-700"
                aria-label="GitHub"
              >
                <Github size={24} className="text-dark-600 dark:text-dark-300" />
              </a>
              <a
                href="https://linkedin.com/in/vamsi-sistla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-100 dark:bg-dark-800 rounded-full transition-colors hover:bg-dark-200 dark:hover:bg-dark-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="text-dark-600 dark:text-dark-300" />
              </a>
              <a
                href="mailto:vishnuvamsi04@gmail.com"
                className="p-2 bg-dark-100 dark:bg-dark-800 rounded-full transition-colors hover:bg-dark-200 dark:hover:bg-dark-700"
                aria-label="Email"
              >
                <Mail size={24} className="text-dark-600 dark:text-dark-300" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative block mx-auto"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 mx-auto relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full opacity-20 blur-3xl"></div>
              <img
                src={mydp1}
                alt="Profile"
                className="w-full h-full object-cover rounded-full p-2 bg-white dark:bg-dark-900"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm text-dark-500 dark:text-dark-400 mb-2">Scroll Down</span>
          <ChevronDown size={24} className="text-primary-600 dark:text-primary-400 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
};
