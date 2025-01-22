import React from 'react';

// CSS
import "../styles/Sidebar.css";

function Sidebar({ click, effect }) {
    return (
        <div className={effect ? "Sidebar pop" : "Sidebar"}>
            <ul>
                <li><a href="#about" onClick={click}>About</a></li>
                <li><a href="#services" onClick={click}>Solutions</a></li>
                <li><a href="#feedbacks" onClick={click}>Testimonials</a></li>
                <li><a href="#contact" onClick={click}>Boost Security</a></li>
            </ul>
        </div>
    )
}

export default Sidebar