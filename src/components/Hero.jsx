import React from 'react';

// CSS
import "../styles/Hero.css";

function Hero() {
  return (
    <div className='Hero'>
        <p className="heading">No Breaches, Only Bold Moves</p>
        <p className="desc">we empower you to take bold actions that secure your digital world and eliminate threats.</p>
        <div className="links">
            <a href="#contact">Boost security</a>
            <a href="#about">About cipher</a>
        </div>

        <div className="heroTwo">
            <div className='heroBlock'>
                <img src="/hero/h1.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p className='heroTitle'>Network Security</p>
                <p className='heroDesc'>Safeguard your network infrastructure against unauthorized access and attacks.</p>
                <div className="background-grid"></div>
            </div>
            <div className='heroBlock'>
                <img src="/hero/h2.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p className='heroTitle'>Security Audits</p>
                <p className='heroDesc'>Comprehensive security reviews to ensure compliance, protection, and efficiency.</p>
                <div className="background-grid"></div>
            </div>
            <div className='heroBlock'>
                <img src="/hero/h3.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                <p className='heroTitle'>Forensics Analysis</p>
                <p className='heroDesc'>In-depth investigations to understand breaches and prevent future occurrences.</p>
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