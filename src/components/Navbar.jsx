import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <a href="#" className='logo'>
                    <img src="/logo.svg" alt="logo" />
                </a>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Solutions</a></li>
                    <li><a href="#feedbacks">Testimonials</a></li>
                    <li><a href="#contact">Boost Security</a></li>
                </ul>
                <div className="toggle">
                    <box-icon name='menu' color="black"></box-icon>
                </div>
            </nav>
        </div>
    )
}

export default Navbar