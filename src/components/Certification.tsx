import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import promptengcertificate from '../certificates/promptengcertificate.pdf';
import javacertificate from '../certificates/javacertificate.pdf';
import htmlcertificate from '../certificates/htmlcertificate.pdf';
import pythoncertificate from  '../certificates/pythoncertificate.pdf';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const Certification: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Python Course',
      issuer: 'Infosys Spring Board',
      date: '2023',
      link: pythoncertificate
    },
    {
      id: 2,
      title: 'HTML & CSS Course',
      issuer: 'Infosys Spring Board',
      date: '2024',
      link: htmlcertificate
    },
    {
      id: 3,
      title: 'Prompt Engineering Certificate',
      issuer: 'Simplilearn',
      date: '2024',
      link: promptengcertificate
    },
     {
      id: 4,
      title: 'Java Certificate',
      issuer: 'Infosys Spring Board',
      date: '2024',
      link: javacertificate
    }
  ];

  const achievementsList = [
    'Shortlisted for TechXcelerate Hackathon (AI & ML) from more than 250+ teams'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="dark:text-white">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-3 mb-6"></div>
          <p className="text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
            Professional certifications and notable achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-6 flex items-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="mr-2 text-primary-600 dark:text-primary-400" size={24} />
              Certifications
            </motion.h3>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{cert.title}</h4>
                  <p className="text-dark-500 dark:text-dark-400 text-sm mb-3">Issued by {cert.issuer}</p>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-4">Completed in {cert.date}</p>
                  
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View Certificate
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-6 flex items-center dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Award className="mr-2 text-primary-600 dark:text-primary-400" size={24} />
              Achievements
            </motion.h3>
            
            <motion.div
              className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <ul className="space-y-4">
                {achievementsList.map((achievement, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex"
                  >
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-dark-600 dark:text-dark-300">{achievement}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};