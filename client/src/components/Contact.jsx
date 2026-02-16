import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const res = await fetch('http://localhost:5000/api/contact/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('Message sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Error sending message.');
        }
    }

    return (
        <div id='contact' className='contact'>
            <div className='contact-container container'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='section-header'
                >
                    <h2 className='section-label text-neon'>Contact</h2>
                    <h3 className='section-title'>Get In Touch</h3>
                    <p className='contact-subtitle'>Have a project in mind or just want to say hello? Drop me a message.</p>
                </motion.div>

                <div className='contact-content'>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='contact-info'
                    >
                        <h4 className='contact-heading'>Let's Connect</h4>
                        <p className='contact-text'>
                            I'm always excited to work on new projects and collaborate with amazing people. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                        </p>

                        <div className='contact-methods'>
                            <div className='contact-method glass'>
                                <div className='contact-icon-wrapper'>
                                    <AiOutlineMail size={24} />
                                </div>
                                <div>
                                    <p className='contact-method-title'>Email</p>
                                    <p className='contact-method-value'>guptaasmi75@gmail.com</p>
                                </div>
                            </div>
                            <div className='contact-method glass'>
                                <div className='contact-icon-wrapper'>
                                    <AiOutlinePhone size={24} />
                                </div>
                                <div>
                                    <p className='contact-method-title'>Phone</p>
                                    <p className='contact-method-value'>+91 91494 93518</p>
                                </div>
                            </div>
                            <div className='contact-method glass'>
                                <div className='contact-icon-wrapper'>
                                    <HiLocationMarker size={24} />
                                </div>
                                <div>
                                    <p className='contact-method-title'>Location</p>
                                    <p className='contact-method-value'>Jammu and Kashmir, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className='contact-form glass'>
                            <div className='form-group'>
                                <label className='form-label'>Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' className='form-input' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='your.email@example.com' className='form-input' />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder='Tell me about your project...' className='form-textarea'></textarea>
                            </div>
                            <button className='btn btn-primary btn-submit'>
                                {status ? status : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
