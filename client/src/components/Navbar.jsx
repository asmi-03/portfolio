import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', href: '/#home' },
        { id: 2, text: 'About', href: '/#about' },
        { id: 3, text: 'Skills', href: '/#skills' },
        { id: 4, text: 'Projects', href: '/#projects' },
        { id: 5, text: 'Contact', href: '/#contact' },
    ];

    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to="/" className='navbar-logo'>
                    <span className='text-neon'>Asmi</span> Gupta
                </Link>

                {/* Desktop Menu */}
                <ul className='navbar-menu'>
                    {navItems.map(item => (
                        <li key={item.id} className='navbar-item'>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}


                </ul>
                {/* Mobile Icon */}
                <div onClick={handleNav} className='navbar-mobile-icon'>
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </div>

                {/* Mobile Menu */}
                <div className={nav ? 'navbar-mobile-menu active' : 'navbar-mobile-menu'}>
                    <h1 className='navbar-mobile-logo text-neon'>Asmi Gupta</h1>
                    <ul className='navbar-mobile-list'>
                        {navItems.map(item => (
                            <li key={item.id} className='navbar-mobile-item'>
                                <a href={item.href} onClick={() => setNav(false)}>{item.text}</a>
                            </li>
                        ))}


                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;
