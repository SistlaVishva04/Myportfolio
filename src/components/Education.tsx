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
      institution: 'Anurag Group Of Institutions, Hyderabad',
      degree: 'B. Tech. In Computer Science',
      duration: 'Aug 2022 - Present',
      grade: 'CGPA: 8.32',
      // description: 'Currently pursuing my degree in Computer Science and Engineering, focusing on software development and programming.'
    },
    {
      id: 2,
      institution: 'Sri Chaitanya College Of Education, Hyderabad',
      degree: 'Intermediate',
      duration: 'Apr 2020 - Apr 2022',
      grade: 'CGPA: 9.6',
    },
    {
      id: 3,
      institution: 'Sri Chaitanya School, Hyderabad',
      degree: 'SSC',
      duration: 'Jun 2017 - Apr 2020',
      grade: 'CGPA: 10',
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
          <p className="text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
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
            <motion.div 
              key={edu.id}
              variants={itemVariants}
              className={`relative pl-8 pb-12 ${
                index !== educationList.length - 1 ? 'border-l-2 border-primary-200 dark:border-primary-800' : ''
              }`}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 z-10" />
              
              <div className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4 text-primary-600 dark:text-primary-400">
                  <GraduationCap size={24} className="mr-2" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>
                
                <h4 className="text-lg font-medium mb-2 dark:text-dark-300">{edu.institution}</h4>
                
                <div className="flex items-center text-dark-500 dark:text-dark-400 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.duration}</span>
                </div>
                
                <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm inline-block mb-3">
                  {edu.grade}
                </div>
                
                {edu.description && (
                  <p className="text-dark-600 dark:text-dark-300 mt-2">
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