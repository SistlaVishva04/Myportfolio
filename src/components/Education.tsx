import React from 'react';

interface EducationRecord {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

const educationList: EducationRecord[] = [
  {
    id: 1,
    institution: 'Anurag University, Hyderabad',
    degree: 'B.Tech, Computer Science',
    duration: '2022 - 2026',
    grade: 'CGPA: 8.4/10',
  },
  {
    id: 2,
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate',
    duration: '2022',
    grade: '96%',
  },
  {
    id: 3,
    institution: 'Sri Chaitanya High School',
    degree: 'SSC',
    duration: '2020',
    grade: '10/10',
  },
];

export const Education: React.FC = () => (
  <section id="education" className="section" aria-labelledby="education-title">
    <div className="container">
      <div className="section-head">
        <h2 id="education-title">Education</h2>
        <p>My academic journey and qualifications.</p>
      </div>
      <div className="education-list">
        {educationList.map((record) => (
          <article className="education-row" key={record.id}>
            <p className="education-meta">{record.duration}</p>
            <div>
              <h3>{record.degree}</h3>
              <p className="education-institution">{record.institution}</p>
            </div>
            <p className="education-meta">{record.grade}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
