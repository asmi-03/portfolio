import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className='resume-page' style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh' }}>
            <div className='container' style={{ maxWidth: '900px', background: 'rgba(30, 41, 59, 0.7)', padding: '40px', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '2px solid var(--neon)', paddingBottom: '20px' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', color: 'var(--white)' }}>Asmi Gupta</h1>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', color: 'var(--gray-300)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaPhone style={{ color: 'var(--neon)' }} /> 9149493518</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaEnvelope style={{ color: 'var(--neon)' }} /> guptaasmi75@gmail.com</span>
                        <a href="https://linkedin.com/in/asmi-gupta" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}><FaLinkedin style={{ color: 'var(--neon)' }} /> linkedin.com/in/asmi-gupta</a>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaMapMarkerAlt style={{ color: 'var(--neon)' }} /> Jammu & Kashmir, India</span>
                    </div>
                </div>

                {/* Professional Summary */}
                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--neon)', borderBottom: '1px solid var(--gray-400)', paddingBottom: '5px', marginBottom: '15px' }}>PROFESSIONAL SUMMARY</h2>
                    <p style={{ color: 'var(--gray-300)', lineHeight: '1.6' }}>
                        Results-driven BCA student specializing in Full Stack Development with strong foundations in Python, HTML, CSS, JavaScript, and C++. Passionate about building scalable, user-centric web applications and exploring AI/ML integration. Demonstrated ability to rapidly learn new technologies and translate complex requirements into elegant solutions. Currently expanding expertise in React and Node.js while actively engaging with modern development practices and API integration.
                    </p>
                </section>

                {/* Education */}
                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--neon)', borderBottom: '1px solid var(--gray-400)', paddingBottom: '5px', marginBottom: '15px' }}>EDUCATION</h2>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--white)' }}>Shoolini University</h3>
                            <span style={{ color: 'var(--gray-400)' }}>Solan, Himachal Pradesh, India</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontStyle: 'italic', marginBottom: '5px' }}>
                            <span style={{ color: 'var(--gray-300)' }}>Bachelor of Computer Applications (BCA) – Full Stack Development</span>
                            <span style={{ color: 'var(--gray-400)' }}>Expected Graduation: 2026</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)' }}>
                            <li>Relevant Coursework: Data Structures, Algorithms, Web Development, Database Management, AI Fundamentals</li>
                            <li>Focus Areas: Full Stack Development, AI Integration, Software Engineering Principles</li>
                        </ul>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--white)' }}>Indian Institute of Technology Jammu</h3>
                            <span style={{ color: 'var(--gray-400)' }}>Jammu, Jammu & Kashmir, India</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontStyle: 'italic', marginBottom: '5px' }}>
                            <span style={{ color: 'var(--gray-300)' }}>Undergraduate Research Student</span>
                            <span style={{ color: 'var(--gray-400)' }}>June 2025 – Present</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)' }}>
                            <li>Engaged in advanced computing research and collaborative projects at one of India's premier technical institutions</li>
                        </ul>
                    </div>
                </section>

                {/* Technical Skills */}
                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--neon)', borderBottom: '1px solid var(--gray-400)', paddingBottom: '5px', marginBottom: '15px' }}>TECHNICAL SKILLS</h2>
                    <ul style={{ color: 'var(--gray-300)', lineHeight: '1.8' }}>
                        <li><strong>Programming Languages:</strong> Python, JavaScript, C++, HTML5, CSS3</li>
                        <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, Tailwind CSS, React (learning), Responsive Design</li>
                        <li><strong>Backend Development:</strong> Node.js (learning), RESTful APIs, API Integration</li>
                        <li><strong>Tools & Technologies:</strong> Git, VS Code, OpenAPI, WhatsApp Business API, Chrome DevTools</li>
                        <li><strong>AI & Emerging Tech:</strong> Generative AI, AI Tool Integration, Automation Workflows, Machine Learning Concepts</li>
                        <li><strong>Core Competencies:</strong> Problem Solving, Debugging, Clean Code Practices, Agile Methodology, Technical Documentation</li>
                    </ul>
                </section>

                {/* Projects */}
                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--neon)', borderBottom: '1px solid var(--gray-400)', paddingBottom: '5px', marginBottom: '15px' }}>PROJECTS & TECHNICAL ACHIEVEMENTS</h2>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--white)' }}>AI-Powered Web Applications <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: 'var(--gray-400)' }}>| JavaScript, OpenAPI, React, Tailwind CSS</span></h3>
                            <span style={{ color: 'var(--gray-400)' }}>2024 – Present</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)', marginTop: '5px' }}>
                            <li>Developed intelligent web applications integrating OpenAPI for dynamic AI-driven functionalities</li>
                            <li>Implemented responsive UI components using Tailwind CSS and modern JavaScript frameworks</li>
                            <li>Designed scalable architecture to support real-time data processing and user interactions</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--white)' }}>WhatsApp Workflow Integration System <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: 'var(--gray-400)' }}>| Python, WhatsApp Business API, Automation</span></h3>
                            <span style={{ color: 'var(--gray-400)' }}>2024</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)', marginTop: '5px' }}>
                            <li>Built automated workflow system connecting WhatsApp Business API to backend processes</li>
                            <li>Reduced manual communication overhead by 60% through intelligent message routing and automation</li>
                            <li>Implemented error handling and logging mechanisms for robust system reliability</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--white)' }}>Full Stack Web Development Portfolio <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: 'var(--gray-400)' }}>| HTML, CSS, JavaScript, Node.js</span></h3>
                            <span style={{ color: 'var(--gray-400)' }}>2023 – 2024</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)', marginTop: '5px' }}>
                            <li>Created multiple full-stack web applications showcasing end-to-end development capabilities</li>
                            <li>Implemented RESTful API endpoints and integrated third-party services for enhanced functionality</li>
                            <li>Optimized frontend performance achieving 95+ Google Lighthouse scores across metrics</li>
                        </ul>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--white)' }}>Open Source Contributions <span style={{ fontWeight: 'normal', fontSize: '0.9rem', color: 'var(--gray-400)' }}>| GitHub, JavaScript, Python</span></h3>
                            <span style={{ color: 'var(--gray-400)' }}>2023 – Present</span>
                        </div>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-300)', marginTop: '5px' }}>
                            <li>Actively contributing to open-source projects, improving documentation and fixing bugs</li>
                            <li>Collaborating with global developer community to enhance existing tools and libraries</li>
                        </ul>
                    </div>
                </section>

                {/* Key Strengths */}
                <section>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--neon)', borderBottom: '1px solid var(--gray-400)', paddingBottom: '5px', marginBottom: '15px' }}>KEY STRENGTHS & INTERESTS</h2>
                    <ul style={{ color: 'var(--gray-300)', lineHeight: '1.6' }}>
                        <li><strong>Problem Solving:</strong> Strong analytical skills with ability to break down complex problems into manageable solutions</li>
                        <li><strong>Continuous Learning:</strong> Self-driven learner constantly exploring new technologies, frameworks, and best practices</li>
                        <li><strong>Innovation:</strong> Passionate about experimenting with cutting-edge AI tools and automation technologies</li>
                        <li><strong>Design Thinking:</strong> Balance technical implementation with user experience and intuitive interface design</li>
                        <li><strong>Collaboration:</strong> Effective communicator with experience working in team environments and research settings</li>
                    </ul>
                </section>

            </div>
        </div>
    );
};

export default Resume;
