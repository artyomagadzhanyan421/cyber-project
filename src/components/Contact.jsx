import React from 'react';

// CSS
import "../styles/Contact.css";

function Contact() {
    return (
        <div className='Block' id='contact'>
            <p className="subHead">/ Let’s Boost Security</p>
            <p className="heading blockHead">Connect with Us to Begin Your Journey Toward Cybersecurity Protection</p>

            <div className="contactGrid">
                <div className="contactLinks">
                    <div className='heroBlock'>
                        <img src="/contact/c1.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                        <p className='heroTitle'>Drop Us a Line</p>
                        <p className='heroDesc'>Need assistance? Shoot us an email, and we'll get back to you as soon as possible!</p>
                        <div className="links contactLinks">
                            <a href="mailto:artyom.agadzhanyan250@gmail.com">send email</a>
                        </div>
                        <div className="background-grid"></div>
                    </div>
                    <br />
                    <div className='heroBlock'>
                        <img src="/contact/c2.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                        <p className='heroTitle'>Give Us a Call</p>
                        <p className='heroDesc'>Call us, and let’s talk about how we can support your cybersecurity needs.</p>
                        <div className="links contactLinks">
                            <a href="#contact">call us</a>
                        </div>
                        <div className="background-grid"></div>
                    </div>
                    <br />
                    <div className='heroBlock'>
                        <img src="/contact/c3.svg" alt="image" style={{ position: "inherit", zIndex: 1 }} />
                        <p className='heroTitle'>Schedule a Call</p>
                        <p className='heroDesc'>Book a call with our experts, and let’s explore how Cipher can help protect you.</p>
                        <div className="links contactLinks">
                            <a href="https://calendly.com/" target='_blank'>book a call</a>
                        </div>
                        <div className="background-grid"></div>
                    </div>
                </div>
                <form className='heroBlock'>
                    <p className="formHead">Let’s Make Great Things Happen!</p>
                    <div className='formInput'>
                        <span>Full Name</span>
                        <input type="text" placeholder='john anderson' required />
                    </div>
                    <div className="contactInputs">
                        <div className='formInput'>
                            <span>email</span>
                            <input type="email" placeholder='john.anderson@gmail.com' required />
                        </div>
                        <div className='formInput'>
                            <span>phone</span>
                            <input type="number" placeholder='+1 (644) 466-6114' required />
                        </div>
                    </div>
                    <div className='formInput'>
                        <span>message</span>
                        <textarea placeholder='how can we help you?' required></textarea>
                    </div>
                    <button type="submit">send a message</button>
                </form>
            </div>
            <div className="aboutVideo">
                <video src="/contact/contact.mp4" muted autoPlay loop></video>
                <div className="corner cRightTop"></div>
                <div className="corner cRightBottom"></div>
                <div className="corner cLeftTop"></div>
                <div className="corner cLeftBottom"></div>
                <span>We protect what matters most – your data, your reputation, and your future.</span>
            </div>
        </div>
    )
}

export default Contact