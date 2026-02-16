import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub, AiOutlineGlobal } from 'react-icons/ai';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'AI-Powered Course Builder',
            description: 'An AI system using CrewAI multi-agent architecture to automatically generate full course structures, lesson plans, and quizzes from a single topic input.',
            tech: ['Python', 'CrewAI', 'OpenAI API', 'Jupyter'],
            link: '#',
            repo: 'https://github.com/asmi-03/Online-Course-Builder',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000'
        },
        {
            id: 2,
            title: 'Trendvia E-Commerce',
            description: 'A modern e-commerce platform featuring AI-powered product descriptions, smart search filtering, and a responsive shopping experience.',
            tech: ['React', 'Vite', 'Express', 'Node.js', 'OpenAI'],
            link: '#',
            repo: '#',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
            id: 3,
            title: 'Student Performance Monitor',
            description: 'Automated tracking system for student attendance and performance. Features auto-alerts to parents via WhatsApp (Twilio) and teacher dashboards.',
            tech: ['Google Apps Script', 'Sheets', 'Twilio API'],
            link: '#',
            repo: 'https://github.com/asmi-03/Student-Performance-Monitor',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    return (
        <div id='projects' className='projects'>
            <div className='projects-container container'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='section-header'
                >
                    <h2 className='section-label text-neon'>Projects</h2>
                    <h3 className='section-title'>Featured Projects</h3>
                </motion.div>

                <div className='projects-grid'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className='project-card glass group'
                        >
                            <div className='project-image-container'>
                                <img src={project.image} alt={project.title} className='project-image' />
                                <div className='project-overlay group-hover-opacity'>
                                    <a href={project.repo} className='project-link'><AiOutlineGithub size={24} /></a>
                                    <a href={project.link} className='project-link'><AiOutlineGlobal size={24} /></a>
                                </div>
                            </div>

                            <div className='project-content'>
                                <h3 className='project-title group-hover-neon'>{project.title}</h3>
                                <p className='project-description'>{project.description}</p>
                                <div className='project-tags'>
                                    {project.tech.map((item, idx) => (
                                        <span key={idx} className='project-tag'>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
