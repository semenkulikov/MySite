// components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaTelegram } from 'react-icons/fa';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Свяжитесь со мной
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`md:w-1/2 p-8 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white shadow-md'
              }`}
            >
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-semibold">Местоположение</h4>
                    <p>Белгород, Россия</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>saifutdinov.semen@mail.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className={`mt-1 mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <h4 className="font-semibold">Телефон</h4>
                    <p>+7 (951) 150-15-11</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/semenkulikov" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  
                  <a 
                    href="https://t.me/ss_user" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    <FaTelegram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`md:w-1/2 p-8 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white shadow-md'
              }`}
            >
              <h3 className="text-xl font-bold mb-6">Отправьте мне сообщение</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-3 bg-green-100 text-green-800 rounded-lg">
                  Сообщение успешно отправлено!
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 focus:border-blue-400' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 focus:border-blue-400' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2">Тема</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 focus:border-blue-400' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">Сообщение</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 focus:border-blue-400' 
                        : 'bg-white border-gray-300 focus:border-blue-500'
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 