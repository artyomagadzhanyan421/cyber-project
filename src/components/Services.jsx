import React from 'react';

// CSS
import "../styles/Services.css";

// Boxicons
import "boxicons";

function Services() {
    return (
        <div className='Block' id='services'>
            <p className="subHead">/ Cyber Services</p>
            <p className="heading blockHead">Powerful Solutions for Unmatched Security</p>
            <div className="links servicesLinks">
                <a href="#">Boost security</a>
                <a href="#">About cipher</a>
            </div> 

            <div className="aboutGrid">
                <div className='aboutInfo serviceInfo'>
                    <div style={{ zIndex: 1 }}>
                        <div className="serviceImg">
                            <img src="/services/s1.svg" alt="image" />
                        </div>
                        <p className='aboutTitle'>Threat Detection & Response</p>
                    </div>
                    <div style={{ zIndex: 1 }}>
                        <span className='aboutDesc'>Our threat detection system monitors your network 24/7, identifying threats in real time and deploying rapid response strategies to minimize impact.</span>
                        <div className="serviceList">
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Threat Identification</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Swift Incident Response</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Minimized Downtime</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Continuous Monitoring</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-grid"></div>
                </div>
                <div className='aboutInfo serviceInfo'>
                    <div style={{ zIndex: 1 }}>
                        <div className="serviceImg">
                            <img src="/services/s2.svg" alt="image" />
                        </div>
                        <p className='aboutTitle'>Managed Security Services</p>
                    </div>
                    <div style={{ zIndex: 1 }}>
                        <span className='aboutDesc'>We deliver outsourced security management with continuous monitoring and protection, ensuring our expert team handles all your security needs.</span>
                        <div className="serviceList">
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Security Coverage</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>skilled professionals</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Cost-Efficient Management</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>24/7 Monitoring</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-grid"></div>
                </div>
                <div className='aboutInfo serviceInfo'>
                    <div style={{ zIndex: 1 }}>
                        <div className="serviceImg">
                            <img src="/services/s3.svg" alt="image" />
                        </div>
                        <p className='aboutTitle'>Expert Security Consulting</p>
                    </div>
                    <div style={{ zIndex: 1 }}>
                        <span className='aboutDesc'>Our consulting services evaluate your security posture and create tailored strategies, offering expert guidance on best practices and compliance.</span>
                        <div className="serviceList">
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Security Strategies</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Enhanced Compliance</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Risk Mitigation</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Expert Insights</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-grid"></div>
                </div>
                <div className='aboutInfo serviceInfo'>
                    <div style={{ zIndex: 1 }}>
                        <div className="serviceImg">
                            <img src="/services/s4.svg" alt="image" />
                        </div>
                        <p className='aboutTitle'>Data Protection Services</p>
                    </div>
                    <div style={{ zIndex: 1 }}>
                        <span className='aboutDesc'>We utilize encryption and access controls to effectively protect your sensitive data from unauthorized access and potential breaches.</span>
                        <div className="serviceList">
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Data Confidentiality</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Minimized Risk of Breaches</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Increased Customer Trust</p>
                            </div>
                            <div>
                                <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                <p>Compliance Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-grid"></div>
                </div>
            </div>
        </div>
    )
}

export default Services