import React from 'react';
import MYResume from '../resume/Vishnu_Vamsi_Sistla_Resume.pdf';

const stats = [
  { title: 'Programming Languages', value: '5+' },
  { title: 'Projects', value: '10+' },
  { title: 'Certifications', value: '3+' },
  { title: 'Graduation Year', value: '2026' },
];

export const About: React.FC = () => (
  <section id="about" className="section section--paper" aria-labelledby="about-title">
    <div className="container about-grid">
      <div className="about-intro opens">
        <h2 id="about-title">About me</h2>
        <a
          className="action-link action-link--secondary"
          href={MYResume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.preventDefault();
            window.open(MYResume, '_blank', 'noopener,noreferrer');
          }}
        >
          View resume
        </a>
      </div>

      <div className="about-copy">
        <p>
          I’m a Software Engineer passionate about building scalable systems and intelligent applications.
          I work across backend, full-stack, and AI-driven solutions using Java, Python, Node.js, and React.
          With strong foundations in Data Structures and Algorithms, I focus on writing clean, efficient code
          and designing reliable REST APIs and production-ready architectures.
        </p>
        <p>
          I also specialize in AI and Data Analytics, building LLM-powered systems, automation workflows,
          and interactive dashboards using Python, SQL, Power BI, and modern ML tools.
          I enjoy integrating AI into real-world workflows to improve efficiency, accuracy, and decision-making,
          and I’m always eager to work on impactful projects that combine engineering with intelligent insights.
        </p>
        <p className="role-index">
          Software Engineer, AI &amp; ML Engineer, Full-Stack Developer, Data Analytics Specialist
        </p>
      </div>

      <dl className="about-stats">
        {stats.map((stat) => (
          <div className="about-stat" key={stat.title}>
            <dt>{stat.title}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
