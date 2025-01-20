import React from 'react';

// CSS
import "../styles/Navbar.css";

function Navbar() {
    const cube = {
        background: "black",
        width: 16.5, 
        height: 16.5
    }

    const logo = {
        display: "flex",
        width: "fit-content",
        gap: 8
    }

    return (
        <div className="Navbar">
            <nav>
                <a href="#" style={logo}>
                    <div style={cube}></div>
                    <span style={{ color: "black" }}>CIPHER</span>
                </a>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Industries</a></li>
                    <li><a href="#">Boost Security</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar