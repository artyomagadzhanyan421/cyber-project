import React from 'react';

// CSS
import "../styles/About.css";

function About() {
  const values = [
    "Trust",
    "Integrity",
    "Innovation",
    "Security",
    "Resilience",
    "Empowerment",
    "Collaboration",
    "Expertise",
    "Transparency",
    "Commitment",
    "Expert",
    "Performance",
  ];

  return (
    <div className='Block' id='about'>
      <p className="subHead">/ About cipher</p>
      <p className="heading blockHead">We provide tailored cybersecurity solutions to protect your business from digital threats.</p>

      <div className="aboutGrid">
        <div className='aboutInfo' style={{ zIndex: 1 }}>
          <p className='aboutTitle'>/ Mission</p>
          <span className='aboutDesc'>At Cipher, our mission is to provide innovative cybersecurity solutions that protect businesses and ensure data resilience in a dynamic cyber landscape.</span>
          <div className="about-grid"></div>
        </div>
        <div className='aboutInfo' style={{ zIndex: 1 }}>
          <p className='aboutTitle'>/ Vision</p>
          <span className='aboutDesc'>Our vision is to be a global leader in cybersecurity, creating a secure digital future for businesses through innovation and resilience against cyber threats.</span>
          <div className="about-grid"></div>
        </div>
      </div>

      <div className='aboutSlides'>
        <div className='slidesMain'>
          {Array.from({ length: 2 })
            .flatMap(() => values)
            .map((value, index) => (
              <React.Fragment key={index}>
                <p>{value}</p>
                <div className="aboutCube"></div>
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="aboutVideo">
        <video src="/hero/hero.mp4" muted autoPlay loop></video>
        <div className="corner cRightTop"></div>
        <div className="corner cRightBottom"></div>
        <div className="corner cLeftTop"></div>
        <div className="corner cLeftBottom"></div>
        <span>Our mission is to create a secure digital landscape for businesses of all sizes</span>
      </div>
    </div>
  );
}

export default About;