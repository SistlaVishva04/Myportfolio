import React from 'react';
import promptengcertificate from '../certificates/promptengcertificate.pdf';
import javacertificate from '../certificates/javacertificate.pdf';
import htmlcertificate from '../certificates/htmlcertificate.pdf';
import pythoncertificate from '../certificates/pythoncertificate.pdf';
import datacertificate from '../certificates/DataScience-Analytics certificate.pdf';
import cccCertificate from '../certificates/CCC_completion_certificate.jpeg';
import aiToolsCertificate from '../certificates/Be10x_AI_tools_certificate.pdf';

interface CertificationRecord {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certifications: CertificationRecord[] = [
  { id: 1, title: 'Python Course', issuer: 'Infosys Spring Board', date: '2023', link: pythoncertificate },
  { id: 2, title: 'HTML & CSS Course', issuer: 'Infosys Spring Board', date: '2024', link: htmlcertificate },
  { id: 3, title: 'Prompt Engineering Certificate', issuer: 'Simplilearn', date: '2024', link: promptengcertificate },
  { id: 4, title: 'Java Certificate', issuer: 'Infosys Spring Board', date: '2024', link: javacertificate },
  { id: 5, title: 'Data Analytics', issuer: 'HP Life', date: '2024', link: datacertificate },
  { id: 6, title: 'Competitive Coding', issuer: 'CCC', date: '2024', link: cccCertificate },
  { id: 7, title: 'AI tools Workshop', issuer: 'Be10x ', date: '2025', link: aiToolsCertificate },
];

const achievements = [
  'Shortlisted for TechXcelerate Hackathon (AI & ML) from more than 250+ teams',
  'HackerRank: Python (5), Java (4), Problem Solving (3)',
  'Top-10 in Techxcelerate 2k24 Hackathon',
  'Solved 250+ LeetCode problems',
  'Earned 50-day and 100-day LeetCode streak badges.',
];

export const Certification: React.FC = () => (
  <section id="certifications" className="section section--paper" aria-labelledby="certifications-title">
    <div className="container">
      <div className="section-head">
        <h2 id="certifications-title">Certifications &amp; achievements</h2>
        <p>Professional certifications and notable achievements.</p>
      </div>

      <div className="credentials-grid">
        <div className="credentials-column">
          <h3>Certifications</h3>
          <ul className="credential-list">
            {certifications.map((certification) => (
              <li className="credential-row" key={certification.id}>
                <div>
                  <h4>{certification.title}</h4>
                  <p>Issued by {certification.issuer}</p>
                  <p className="credential-year">Completed in {certification.date}</p>
                </div>
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  View certificate
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="achievement-column">
          <h3>Achievements</h3>
          <ul className="achievement-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
