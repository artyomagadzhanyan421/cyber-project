import React from 'react';

// CSS
import "../styles/About.css";

function About() {
  return (
    <div className='Block' id='about'>
      <p className="subHead">/ About cipher</p>
      <p className="heading blockHead">We provide tailored cybersecurity solutions to protect your business from digital threats.</p>

      <div className="aboutGrid">
        <div className='aboutInfo'>
          <p style={{ zIndex: 1 }}>/ Mission</p>
          <span style={{ zIndex: 1 }}>At Cipher, our mission is to provide innovative cybersecurity solutions that protect businesses and ensure data resilience in a dynamic cyber landscape.</span>
          <div className="about-grid"></div>
        </div>
        <div className='aboutInfo'>
          <p style={{ zIndex: 1 }}>/ Vision</p>
          <span style={{ zIndex: 1 }}>our vision is to be a global leader in cybersecurity, creating a secure digital future for businesses through innovation and resilience against cyber threats.</span>
          <div className="about-grid"></div>
        </div>
      </div>

      <div className='aboutSlides'>
        <div className='slidesMain'>
          <p>Trust</p>
          <div className="aboutCube"></div>
          <p>Integrity</p>
          <div className="aboutCube"></div>
          <p>Innovation</p>
          <div className="aboutCube"></div>
          <p>Security</p>
          <div className="aboutCube"></div>
          <p>Resilience</p>
          <div className="aboutCube"></div>
          <p>Empowerment</p>
          <div className="aboutCube"></div>
          <p>Collaboration</p>
          <div className="aboutCube"></div>
          <p>Expertise</p>
          <div className="aboutCube"></div>
          <p>Transparency</p>
          <div className="aboutCube"></div>
          <p>Commitment</p>
          <div className="aboutCube"></div>
          <p>Expert</p>
          <div className="aboutCube"></div>
          <p>Performance</p>
          <div className="aboutCube"></div>
          
          <p>Trust</p>
          <div className="aboutCube"></div>
          <p>Integrity</p>
          <div className="aboutCube"></div>
          <p>Innovation</p>
          <div className="aboutCube"></div>
          <p>Security</p>
          <div className="aboutCube"></div>
          <p>Resilience</p>
          <div className="aboutCube"></div>
          <p>Empowerment</p>
          <div className="aboutCube"></div>
          <p>Collaboration</p>
          <div className="aboutCube"></div>
          <p>Expertise</p>
          <div className="aboutCube"></div>
          <p>Transparency</p>
          <div className="aboutCube"></div>
          <p>Commitment</p>
          <div className="aboutCube"></div>
          <p>Expert</p>
          <div className="aboutCube"></div>
          <p>Performance</p>
          <div className="aboutCube"></div>
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
  )
}

export default About