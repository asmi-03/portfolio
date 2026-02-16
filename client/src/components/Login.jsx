import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import characterImg from '../assets/login-character-side.png'; // Updated import for new asset
import { Link } from 'react-router-dom';

const Login = () => {
    const [activeTab, setActiveTab] = useState('login');
    const [isFocused, setIsFocused] = useState(false);

    // Animation variants
    const characterVariants = {
        walking: {
            x: [-100, 400], // Move from left to right
            y: [0, -10, 0], // Bounce/Walking effect
            opacity: [0, 1, 1, 1, 0], // Fade in/out at edges
            rotate: [0, 2, -2, 0], // Slight wobble
            transition: {
                x: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 8, repeat: Infinity, times: [0, 0.1, 0.5, 0.9, 1] },
                rotate: { duration: 0.6, repeat: Infinity, ease: "easeInOut" }
            }
        },
        focused: {
            x: 0,
            y: 0,
            scale: 1.05,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className="login-page">
            <div className="login-container glass">

                {/* Left Side - 3D Character */}
                <div className="login-visual" style={{ overflow: 'hidden' }}> {/* Ensure character doesn't overflow */}
                    {/* Blob removed for cleaner look */}
                    <motion.img
                        src={characterImg}
                        alt="3D Character"
                        className="login-character"
                        variants={characterVariants}
                        animate={isFocused ? "focused" : "walking"}
                        style={{ maxWidth: '250px' }} // Adjust size for walking
                    />
                    <div className="login-visual-text" style={{ position: 'relative', zIndex: 10 }}>
                        <h2>Welcome Back</h2>
                        <p>Please enter your details to sign in.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="login-form-wrapper">
                    <div className="login-header">
                        <h3>{activeTab === 'login' ? 'Login' : 'Register'}</h3>
                        <div className="login-tabs">
                            <button
                                className={`login-tab ${activeTab === 'login' ? 'active' : ''}`}
                                onClick={() => setActiveTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`login-tab ${activeTab === 'register' ? 'active' : ''}`}
                                onClick={() => setActiveTab('register')}
                            >
                                Register
                            </button>
                        </div>
                    </div>

                    <form className="login-form">
                        {activeTab === 'register' && (
                            <div className="input-group">
                                <AiOutlineUser className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        )}

                        <div className="input-group">
                            <AiOutlineMail className="input-icon" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className="input-group">
                            <BiLockAlt className="input-icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>

                        <div className="form-actions">
                            <Link to="#" className="forgot-password">Forgot password?</Link>
                        </div>

                        <button className="btn btn-primary btn-block">
                            {activeTab === 'login' ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <Link to="/" className="back-link">← Back to Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
