import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import APIIcon from "../img/APIIcon.png";
import BotIcon from "../img/BotIcon.webp";
import sethuicon from "../img/sethuicon.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  date: string;
}

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Movie Character Chatbot',
      description: 'A chatbot which responds like the movie character you choose to talk to',
      detailedDescription: 'A chatbot which responds like the movie character you choose to talk. There are more than 30+ fictional characters related to different movie industries (Tollywood, Bollywood, Hollywood). You can clear your doubts with them or ask anything—they will respond according to the personality they have in that movie.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
      image: BotIcon,
      github: 'https://github.com/SistlaVishva04/MovieCharacters_Chatbot',
      liveDemo: 'https://movie-character-chatbot.example.com',
      date: 'Apr 2025'
    },
    {
      id: 2,
      title: 'Suraksha Setu',
      description: 'Community-based disaster management solution using NLP',
      detailedDescription: 'By using existing community infrastructure and employing natural language processing methods, our solution aims to provide data insights and sensitive approach to disaster management, potentially improving both safety and efficiency during emergencies.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Data Visualization'],
      image: sethuicon,
      github: 'https://github.com/SistlaVishva04/',
      date: 'Aug 2024 - Dec 2024'
    },
    {
      id: 3,
      title: 'API Keys Generator',
      description: 'Web platform providing free access to public API keys',
      detailedDescription: 'Created a web-based API Keys Generator platform that grants users free access to a vast number of public API keys depending on their requirements, such as AI models (OpenAI, Gemini), weather services, maps, and more.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: APIIcon,
      github: 'https://github.comSistlaVishva04/',
      liveDemo: 'https://api-keys-generator.example.com',
      date: 'Nov 2022 - Dec 2023'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <section id="projects" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-dark-900 dark:text-white">My Projects</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-3 mb-6"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="project-card relative overflow-hidden rounded-xl bg-white dark:bg-dark-800 shadow-md"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              whileHover={{ y: -5 }}
            >
              <div className="h-46 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-dark-500 dark:text-dark-300">{project.date}</span>
                </div>
                <p className="text-dark-600 dark:text-dark-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-500 dark:text-dark-300 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Hover Indicator */}
                <div className="text-center text-dark-500 dark:text-dark-300 text-sm italic">
                  Hover for details
                </div>
              </div>

              {/* Hover Popup */}
              <AnimatePresence>
                {hoveredProjectId === project.id && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-white/95 dark:bg-dark-800/95 backdrop-blur-sm p-6 overflow-y-auto"
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="h-full flex flex-col">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
                          <span className="text-sm font-medium text-dark-500 dark:text-dark-300">{project.date}</span>
                        </div>

                        <p className="text-dark-600 dark:text-dark-300 mb-4 text-sm">
                          {project.detailedDescription}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2 text-dark-900 dark:text-white">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span 
                                key={index}
                                className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex-1 flex items-center justify-center gap-1 text-sm py-1 text-dark-900 dark:text-white"
                          >
                            <Github size={14} />
                            <span>GitHub</span>
                          </a>
                        )}
                        {project.liveDemo && (
                          <a 
                            href={project.liveDemo} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 flex items-center justify-center gap-1 text-sm py-1"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};