import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-container container'>

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className='about-image-wrapper'
                >
                    <div className='about-image-group group'>
                        <div className='about-image-glow group-hover-glow'></div>
                        <div className="about-image-inner">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="About Me" className='about-image' />
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className='about-content'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='about-label text-neon'
                    >
                        About Me
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='about-title'
                    >
                        Frontend & Backend Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='about-description'
                    >
                        I'm a Full-Stack Developer with 1 year of hands-on experience building fast, scalable, and responsive web applications using React.js, Node.js, Express, and databases like MongoDB and PostgreSQL.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='about-description'
                    >
                        I specialize in creating secure RESTful APIs, implementing modern frontend interfaces, and managing full deployment pipelines. My skill set spans both frontend and backend development, with a strong focus on clean code and smooth user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="about-stats"
                    >
                        <div className="stat-card glass">
                            <h3 className="stat-number text-neon">1+</h3>
                            <p className="stat-label">Years Experience</p>
                        </div>
                        <div className="stat-card glass">
                            <h3 className="stat-number text-neon">5+</h3>
                            <p className="stat-label">Projects Completed</p>
                        </div>
                        <div className="stat-card glass">
                            <h3 className="stat-number text-neon">100%</h3>
                            <p className="stat-label">Client Satisfaction</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default About;
