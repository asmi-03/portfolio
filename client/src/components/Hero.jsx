import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <div id='home' className='hero'>
            {/* Background Gradients */}
            <div className='blob blob-purple'></div>
            <div className='blob blob-yellow'></div>
            <div className='blob blob-pink'></div>

            <div className='hero-container container'>
                <div className='hero-content'>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='hero-greeting neon-text'
                    >
                        Hi, I'm
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='hero-title'
                    >
                        Asmi Gupta
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className='hero-subtitle'
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className='hero-description'
                    >
                        Crafting modern, responsive web applications with clean UI and robust backend architecture. Let's create something amazing together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="hero-buttons"
                    >
                        <button className='btn btn-primary group'>
                            View Work
                            <span className='btn-icon group-hover-rotate'>
                                <AiOutlineArrowRight />
                            </span>
                        </button>
                        <Link
                            to="/resume"
                            className='btn btn-outline'
                            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
                        >
                            Show CV <AiOutlineEye className='ml-2' style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='hero-image-wrapper'
                >
                    <div className='hero-image-container'>
                        <div className="hero-glow"></div>
                        <img src={profileImg} alt="Asmi Gupta" className="hero-image" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
