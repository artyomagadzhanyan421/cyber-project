import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  return (
    <div className='Hero'>
        <p className="heading">No Breaches, Only Bold Moves</p>
        <p className="desc">we empower you to take bold actions that secure your digital world and eliminate threats.</p>
        <div className="links">
            <a href="#">Boost security</a>
            <a href="#">About cipher</a>
        </div>

        <div className="heroTwo">
            <div className='heroBlock'>
                <img src="/hero/h1.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p>Network Security</p>
                <p>Safeguard your network infrastructure against unauthorized access and attacks.</p>
                <div className="background-grid"></div>
            </div>
            <div className='heroBlock'>
                <img src="/hero/h2.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p>Security Audits</p>
                <p>Comprehensive security reviews to ensure compliance, protection, and efficiency.</p>
                <div className="background-grid"></div>
            </div>
            <div className='heroBlock'>
                <img src="/hero/h3.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p>Forensics Analysis</p>
                <p>In-depth investigations to understand breaches and prevent future occurrences.</p>
                <div className="background-grid"></div>
            </div>
        </div>

        <div className="heroImage">
            <div className="imageBlock" style={{ position: 'relative', display: "flex" }}>
                <img src="/hero/hero.avif" alt="image" style={{ position: "relative", width: "100%" }} />
            </div>
        </div>
    </div>
  )
}

export default Hero