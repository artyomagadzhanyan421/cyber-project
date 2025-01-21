import React from 'react';

// CSS
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className='footerBlock'>
          <a href="#" className='logo'>
            <img src="/logo.svg" alt="logo" />
          </a>
          <span className='copyright'>© 2024 Cipher. <br />All rights reserved.</span>
        </div>
        <div className="footerLinks">
          <ul>
            <li className='footerHead'>Menu</li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Solutions</a></li>
            <li><a href="#feedbacks">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ul>
            <li className='footerHead'>follow us</li>
            <li><a href="https://www.linkedin.com/" target='_blank'>linkedin</a></li>
            <li><a href="https://x.com/?mx=2" target='_blank'>twitter</a></li>
            <li><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" target='_blank'>facebook</a></li>
          </ul>
          <ul>
            <li className='footerHead'>contact us</li>
            <li><a href="mailto:artyom.agadzhanyan250@gmail.com">email us</a></li>
            <li><a href="#contact">call us</a></li>
            <li><a href="https://calendly.com/" target='_blank'>book a call</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer