import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Book, Briefcase, User } from 'lucide-react';
import VamsiSistla_Resume from '../resume/VamsiSistla_Resume.pdf';
export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    { 
      icon: <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Programming Languages',
      value: '5+',
    },
    { 
      icon: <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Projects',
      value: '10+',
    },
    { 
      icon: <Book className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Certifications',
      value: '3+',
    },
    { 
      icon: <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Graduation Year',
      value: '2026',
    },
  ];

  return (
    <section id="about" className="section bg-dark-50 dark:bg-dark-900">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <h2 className="dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mt-3 mb-6"></div>
          <p className="text-dark-500 dark:text-dark-400 max-w-3xl mx-auto">
            Discover more about my background, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">Who I Am</h3>
            <p className="text-dark-600 dark:text-dark-300">
              I'm a Computer Science and Engineering (CSE) student passionate about programming and software development. 
              I have hands-on experience in website development and enjoy learning new technologies.
            </p>
            <p className="text-dark-600 dark:text-dark-300">
              I am also a prompt engineer who can write efficient prompts and use AI tools at its high level. 
              I'm eager to apply my skills to solve real-world problems and work on innovative projects.
            </p>
            <p className="text-dark-600 dark:text-dark-300">
              My interests include reading mythological books, researching mysteries of nature and God, and finding 
              new ways to solve problems.
            </p>

            <motion.div
              className="pt-4"
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
            >
              <a 
                href="#" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(VamsiSistla_Resume, '_blank');
                }}
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index + 4}
                variants={variants}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </h4>
                <p className="text-dark-500 dark:text-dark-400">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};