import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationList: Education[] = [
    {
      id: 1,
      institution: 'Anurag University, Hyderabad',
      degree: 'B.Tech, Computer Science',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.4/10',
      // description: 'Currently pursuing my degree in Computer Science and Engineering, focusing on software development and programming.'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-3 mb-6"></div>
          <p className="education-intro max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationList.map((edu, index) => (
            <motion.div key={edu.id} variants={itemVariants}
              className={`education-timeline-item relative pl-8 pb-12 ${
                index !== educationList.length - 1 ? 'has-next' : ''
              }`}
            >
              <div className="education-marker absolute left-[-9px] top-0 w-4 h-4 rounded-full z-10" />

              <div className="education-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4 text-accent">
                  <GraduationCap size={24} className="mr-2" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>

                <h4 className="education-institution text-lg font-medium mb-2">{edu.institution}</h4>

                <div className="education-duration flex items-center text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.duration}</span>
                </div>

                <div className="education-grade px-3 py-1 rounded-full text-sm inline-block mb-3">
                  {edu.grade}
                </div>

                {edu.description && (
                  <p className="education-description mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};