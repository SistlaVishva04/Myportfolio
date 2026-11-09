import React from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  { name: 'Languages', skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'SQL'] },
  { name: 'Frontend', skills: ['React.js', 'HTML', 'CSS'] },
  { name: 'Backend', skills: ['Django', 'Django REST Framework', 'Node.js', 'Express', 'Flask', 'FastAPI', 'RESTful APIs', 'WebSockets'] },
  { name: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'ChromaDB'] },
  { name: 'AI / Machine Learning', skills: ['Scikit-learn', 'LLM', 'NLP', 'ML/DL Models', 'GenAI Integration', 'RAG'] },
  { name: 'Data Tools', skills: ['Pandas', 'NumPy', 'Power BI', 'Tableau', 'Matplotlib'] },
  { name: 'Cloud & Deployment', skills: ['AWS (Basic)', 'Supabase', 'Netlify', 'Vercel', 'Render', 'Railway'] },
  { name: 'Tools & Concepts', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker (Basic)', 'OOP', 'API Design', 'Authentication & Authorization', 'SDLC'] },
];

export const Skills: React.FC = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="container skills-layout">
      <div className="skills-intro opens">
        <h2 id="skills-title">Skills</h2>
        <p>Technical skills and competencies I’ve developed over the years.</p>
      </div>
      <div className="skill-list">
        {skillCategories.map((category) => (
          <div className="skill-row" key={category.name}>
            <h3>{category.name}</h3>
            <p>{category.skills.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
