import React from 'react';

const responsibilities = [
  'Developed backend modules and REST APIs using Django REST Framework for a B2B ERP platform supporting business workflow automation.',
  'Built a real-time chat microservice using WebSockets to support low-latency communication workflows.',
  'Debugged backend APIs, validated REST API workflows using Postman, and supported backend integration and testing.',
  'Worked on PostgreSQL schema design and query workflows for transactional data management.',
  'Collaborated on a microservice-based backend architecture and API integration workflows.',
];

export const Experience: React.FC = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <div className="container">
      <div className="experience-head opens">
        <h2 id="experience-title">Experience</h2>
      </div>
      <article className="experience-record" aria-labelledby="mybizz-title">
        <div className="experience-company">
          <h3 id="mybizz-title">MyBizzERP</h3>
          <p className="experience-role">Software Development Engineer Intern</p>
          <p className="experience-date">
            <time dateTime="2026-04">April 2026</time>
            {' – '}
            <time dateTime="2026-10">October 2026</time>
          </p>
        </div>
        <ul className="experience-points">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
