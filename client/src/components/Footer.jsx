import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container container'>
                <p className='footer-copy'>&copy; {new Date().getFullYear()} Asmi Gupta. All rights reserved.</p>
                <div className='footer-socials'>
                    <a href="https://github.com/asmi-03" className='footer-social-link' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/asmi-gupta-6692242a2" className='footer-social-link' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/asmiiii.03/" className='footer-social-link' target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <p className='footer-credit'>Designed with <span className='text-neon'>&hearts;</span> by Asmi Gupta</p>
            </div>
        </div>
    );
};

export default Footer;
