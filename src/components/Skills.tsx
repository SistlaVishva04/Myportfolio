import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
  name: string;
  skills: string[];
}

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    { 
      name: 'Programming Languages', 
      skills: ['Python', 'Java', 'C'] 
    },
    { 
      name: 'Web Development', 
      skills: ['React', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'Flask'] 
    },
    { 
      name: 'AI & ML', 
      skills: ['Streamlit', 'Data Preprocessing & Feature Engineering', 'Machine Learning Models'] 
    },
    { 
      name: 'Version Control', 
      skills: ['Git', 'GitHub'] 
    },
    { 
      name: 'Deployment', 
      skills: ['Netlify', 'Render'] 
    },
    { 
      name: 'Databases', 
      skills: ['MySQL', 'JDBC'] 
    },
    { 
      name: 'Data Visualization', 
      skills: ['PowerBI', 'Data Visualization Libraries'] 
    },
    { 
      name: 'Other Skills', 
      skills: ['Prompt Engineering', 'Technical Writing', 'Problem Solving'] 
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

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6 
      } 
    },
  };

  // Random offset for floating animation
  const getRandomOffset = () => Math.random() * 8 - 4; // -4 to 4

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="dark:text-white">My Skills</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-3 mb-6"></div>
          <p className="text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
            Technical skills and competencies I've developed over the years
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              variants={skillCardVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(237, 221, 221, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              animate={{
                y: [0, getRandomOffset(), 0],
                transition: {
                  duration: 3 + Math.random() * 2, // 3-5 seconds
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400"
                whileHover={{ scale: 1.05, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category.name}
              </motion.h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skillIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * skillIndex }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    <span className="dark:text-white">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};