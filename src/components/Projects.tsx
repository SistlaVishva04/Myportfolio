import React, { useState } from 'react';
import AIStudioImage from '../img/AI_studio_img.webp';
import MyJarvisImage from '../img/MyJarvis_img.webp';
import Link3DImage from '../img/Link3d_img.webp';
import AIDataImage from '../img/Automated_DA_img.webp';
import TechAnalyticsImage from '../img/tech_out_img.webp';
import EcommerceImage from '../img/E-commerce_img.webp';

type ProjectCategory = 'SDE' | 'AI' | 'DA';
type ProjectFilter = 'All' | ProjectCategory;

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  github?: string;
  liveDemo?: string;
  categories: ProjectCategory[];
  videodemo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Flow Studio',
    shortDescription: 'Scalable RAG-based document query system.',
    detailedDescription:
      'End-to-end RAG pipeline with document ingestion, chunking, vector indexing using ChromaDB, and semantic retrieval. Integrated Gemini API for grounded response generation.',
    technologies: ['FastAPI', 'React', 'PostgreSQL', 'ChromaDB', 'Docker', 'Gemini API'],
    image: AIStudioImage,
    imageWidth: 1024,
    imageHeight: 1024,
    github: 'https://github.com/SistlaVishva04/AI-flow_with_rag',
    videodemo: 'https://drive.google.com/file/d/1Q8N1EZl6pqX5cOe8jqppUQbperxgjqOc/view?usp=drive_link',
    categories: ['SDE', 'AI'],
  },
  {
    id: 2,
    title: 'MyJarvis',
    shortDescription: 'Real-time voice-enabled GenAI assistant.',
    detailedDescription:
      'Voice assistant integrating Speech-to-Text → Gemini API → Text-to-Speech with conversational memory and secure per-user authentication.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Gemini API'],
    image: MyJarvisImage,
    imageWidth: 1536,
    imageHeight: 1024,
    github: 'https://github.com/SistlaVishva04/myyjarviss',
    liveDemo: 'https://myyjarviss.lovable.app/',
    categories: ['SDE', 'AI'],
  },
  {
    id: 3,
    title: 'Link3D',
    shortDescription: 'Secure URL shortening platform with analytics.',
    detailedDescription:
      'Authenticated link management system with expiration control, analytics tracking, and user-scoped lifecycle management.',
    technologies: ['React', 'TypeScript', 'Supabase', 'REST APIs'],
    image: Link3DImage,
    imageWidth: 1536,
    imageHeight: 1024,
    // github: '#',
    liveDemo: 'https://link3d.lovable.app/',
    categories: ['SDE'],
  },
  {
    id: 4,
    title: 'AI Data Analysis Automation',
    shortDescription: 'AI-driven automated EDA assistant.',
    detailedDescription:
      'Automated data cleaning, feature engineering, statistical summaries, and visualization generation using Python and AI workflows.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    image: AIDataImage,
    imageWidth: 1536,
    imageHeight: 1024,
    liveDemo: 'https://opal.google/app/1SJqW5IzHEbM0PmX6g-C3TZ82OkmvnoHv',
    categories: ['AI', 'DA'],
  },
  {
    id: 5,
    title: 'Tech Outsourcing Market Analytics',
    shortDescription: 'ROI & salary benchmarking dashboard.',
    detailedDescription:
      'Analyzed global salary datasets and built Power BI dashboards demonstrating 70%+ outsourcing cost savings.',
    technologies: ['Python', 'Power BI', 'Excel'],
    image: TechAnalyticsImage,
    imageWidth: 1536,
    imageHeight: 1024,
    categories: ['DA'],
  },
  {
    id: 6,
    title: 'E-commerce Sales Dashboard',
    shortDescription: 'Interactive 50k+ record Power BI dashboard.',
    detailedDescription:
      'Analyzed sales, profit trends, discount impact, and regional performance using DAX modeling and advanced BI techniques.',
    technologies: ['Power BI', 'DAX', 'Excel'],
    image: EcommerceImage,
    imageWidth: 1536,
    imageHeight: 1024,
    videodemo: 'https://drive.google.com/file/d/1j8CqUrlMk8Rfm4HRTvsLS6iByv08vqzx/view?usp=sharing',
    categories: ['DA'],
  },
];

const filters: ProjectFilter[] = ['All', 'SDE', 'AI', 'DA'];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>('All');
  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head">
          <h2 id="projects-title">Selected work</h2>
          <p>Projects across software engineering, AI, and data analytics.</p>
        </div>

        <div className="project-filter" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => (
            <button
              className="filter-button"
              type="button"
              key={filter}
              onClick={() => setActiveCategory(filter)}
              aria-pressed={activeCategory === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="project-list" aria-live="polite">
          {visibleProjects.map((project) => (
            <article className="project-record" key={project.id}>
              <figure className="project-visual" data-kind="product">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="project-copy">
                <h3>{project.title}</h3>
                <p className="project-short">{project.shortDescription}</p>
                <p className="project-detail">{project.detailedDescription}</p>
                <div className="project-tags" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-categories" aria-label="Project categories">
                  {project.categories.map((category) => (
                    <span key={category}>{category}</span>
                  ))}
                </div>
                <div className="project-links" aria-label={`${project.title} links`}>
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  )}
                  {project.github === '#' && (
                    <span className="project-link-unavailable">GitHub link not provided</span>
                  )}
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live</a>
                  )}
                  {project.videodemo && (
                    <a href={project.videodemo} target="_blank" rel="noopener noreferrer">Video demo</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
