import React, { useState } from 'react';
import { motion} from 'framer-motion';
import AI_studio_img from '../img/AI_studio_img.png';
import MyJarvis from '../img/MyJarvis_img.png';
import Link3D from '../img/Link3D_img.png';
import AI_DA from '../img/Automated_DA_img.png';
import Tech_Analytics from '../img/tech_out_img.png';
import Ecom_Dashboard from '../img/E-commerce_img.png';

type ProjectCategory = 'SDE' | 'AI' | 'DA';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  categories: ProjectCategory[];
  videodemo?: string;
}

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<'All' | ProjectCategory>('All');

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Flow Studio',
      shortDescription: 'Scalable RAG-based document query system.',
      detailedDescription:
        'End-to-end RAG pipeline with document ingestion, chunking, vector indexing using ChromaDB, and semantic retrieval. Integrated Gemini API for grounded response generation.',
      technologies: [
        'FastAPI',
        'React',
        'PostgreSQL',
        'ChromaDB',
        'Docker',
        'Gemini API'
      ],
      image: AI_studio_img,
      github: 'https://github.com/SistlaVishva04/AI-flow_with_rag',
      videodemo:'https://drive.google.com/file/d/1Q8N1EZl6pqX5cOe8jqppUQbperxgjqOc/view?usp=drive_link',
 
      categories: ['SDE', 'AI']
    },
    {
      id: 2,
      title: 'MyJarvis',
      shortDescription: 'Real-time voice-enabled GenAI assistant.',
      detailedDescription:
        'Voice assistant integrating Speech-to-Text → Gemini API → Text-to-Speech with conversational memory and secure per-user authentication.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'Supabase',
        'Gemini API'
      ],
      image: MyJarvis,
      github: 'https://github.com/SistlaVishva04/myyjarviss',
      liveDemo: 'https://myyjarviss.lovable.app/',
      categories: ['SDE', 'AI']
    },
    {
      id: 3,
      title: 'Link3D',
      shortDescription: 'Secure URL shortening platform with analytics.',
      detailedDescription:
        'Authenticated link management system with expiration control, analytics tracking, and user-scoped lifecycle management.',
      technologies: ['React', 'TypeScript', 'Supabase', 'REST APIs'],
      image: Link3D,
      github: '#',
      liveDemo: 'https://link3d.lovable.app/',
      categories: ['SDE']
    },
    {
      id: 4,
      title: 'AI Data Analysis Automation',
      shortDescription: 'AI-driven automated EDA assistant.',
      detailedDescription:
        'Automated data cleaning, feature engineering, statistical summaries, and visualization generation using Python and AI workflows.',
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn'
      ],
      image: AI_DA,
      liveDemo: 'https://opal.google/app/1SJqW5IzHEbM0PmX6g-C3TZ82OkmvnoHv',
      categories: ['AI', 'DA']
    },
    {
      id: 5,
      title: 'Tech Outsourcing Market Analytics',
      shortDescription: 'ROI & salary benchmarking dashboard.',
      detailedDescription:
        'Analyzed global salary datasets and built Power BI dashboards demonstrating 70%+ outsourcing cost savings.',
      technologies: ['Python', 'Power BI', 'Excel'],
      image: Tech_Analytics,
      categories: ['DA']
    },
    {
      id: 6,
      title: 'E-commerce Sales Dashboard',
      shortDescription: 'Interactive 50k+ record Power BI dashboard.',
      detailedDescription:
        'Analyzed sales, profit trends, discount impact, and regional performance using DAX modeling and advanced BI techniques.',
      technologies: ['Power BI', 'DAX', 'Excel'],
      image: Ecom_Dashboard,
      videodemo:'https://drive.google.com/file/d/1j8CqUrlMk8Rfm4HRTvsLS6iByv08vqzx/view?usp=sharing',
      categories: ['DA']
    }
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project =>
          project.categories.includes(activeCategory)
        );

  return (
    <section id="projects" className="section">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="dark:text-white">Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-3 mb-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'SDE', 'AI', 'DA'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-gray-800 dark:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-between">

                <div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3">
                    {project.detailedDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-700 rounded text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mb-3">
                    {project.categories.map((cat, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary-600 rounded text-white"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  <div className="flex gap-4 text-sm">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:underline"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-400 hover:underline"
                      >
                        Live
                      </a>
                    )}
                  </div>
                  {project.videodemo && (
                    <a
                    href={project.videodemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:underline"
                  >
                    Video Demo
                  </a>  
                  )}
                </div>
              </div>

              {/* Bottom Title (Visible Always) */}
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-semibold dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {project.shortDescription}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};