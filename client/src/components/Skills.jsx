import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { id: 1, name: 'HTML5/CSS3', icon: <FaHtml5 className='text-orange-500' />, level: '95%' },
        { id: 2, name: 'JavaScript', icon: <FaJs className='text-yellow-400' />, level: '90%' },
        { id: 3, name: 'React/Redux', icon: <FaReact className='text-blue-400' />, level: '95%' },
        { id: 4, name: 'Tailwind CSS', icon: <SiTailwindcss className='text-cyan-400' />, level: '98%' },
        { id: 5, name: 'Next.js', icon: <SiNextdotjs className='text-white' />, level: '85%' },
        { id: 6, name: 'Node.js/Express', icon: <FaNodeJs className='text-green-500' />, level: '87%' },
        { id: 7, name: 'MongoDB', icon: <SiMongodb className='text-green-600' />, level: '80%' },
        { id: 8, name: 'PostgreSQL', icon: <SiPostgresql className='text-blue-300' />, level: '75%' },
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <div id='skills' className='skills'>
            {/* Background glow for ambience */}
            <div className='skills-bg-glow'></div>

            <div className='skills-container container'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='section-header'
                >
                    <h2 className='section-label text-neon'>Skills</h2>
                    <h3 className='section-title'>What I Bring to the Table</h3>
                </motion.div>

                <div className='skills-grid'>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className='skill-card glass group'
                        >
                            <div className='skill-icon group-hover-bounce'>
                                {skill.icon}
                            </div>
                            <h3 className='skill-name'>{skill.name}</h3>

                            {/* Progress Bar Container */}
                            <div className='skill-progress-container'>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className='skill-progress-bar'
                                >
                                    <span className='skill-tooltip group-hover-opacity'>{skill.level}</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
