import React from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Обо мне
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`p-8 rounded-lg shadow-lg mb-12 ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}`}
          >
            <p className="text-lg mb-6">
              Я молодой и перспективный Python-разработчик с опытом работы 3 года и 2 месяца. 
              Специализируюсь на backend-разработке с использованием Django, Flask и FastAPI. 
              Имею опыт работы с базами данных PostgreSQL и MySQL, а также с Docker и системами контейнеризации.
            </p>
            
            <p className="text-lg mb-6">
              Разработал множество проектов, включая полнофункциональный интернет-магазин на Django и различные Telegram-боты.
              Применяю современные стандарты проектирования (SOLID, KISS), пишу чистый и поддерживаемый код.
            </p>
            
            <p className="text-lg">
              Открыт к изучению новых технологий и участию в интересных проектах. Стремлюсь к профессиональному росту и развитию в сфере backend-разработки.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'
              } transition-colors duration-300`}
            >
              <h3 className="text-xl font-semibold mb-3">Ключевые навыки</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Глубокое знание Python и Django</li>
                <li>• Опыт работы с REST API</li>
                <li>• Знание принципов ООП, SOLID, KISS</li>
                <li>• Работа с Git, GitHub, GitLab</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-50 hover:bg-blue-100'
              } transition-colors duration-300`}
            >
              <h3 className="text-xl font-semibold mb-3">Дополнительные навыки</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Знание SQL и NoSQL баз данных</li>
                <li>• Опыт использования Docker и Docker-compose</li>
                <li>• Базовые знания HTML/CSS и JavaScript</li>
                <li>• Английский язык - чтение технической документации</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 