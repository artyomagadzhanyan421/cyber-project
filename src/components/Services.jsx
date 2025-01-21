import React from 'react';
import useServicesData from '../hooks/useServicesData';

// CSS
import "../styles/Services.css";

// Boxicons
import "boxicons";

function Services() {
    const { services } = useServicesData();

    return (
        <div className='Block' id='services'>
            <p className="subHead">/ Cyber Services</p>
            <p className="heading blockHead">Powerful Solutions for Unmatched Security</p>
            <div className="links servicesLinks">
                <a href="#contact">Boost security</a>
                <a href="#about">About cipher</a>
            </div>

            <div className="aboutGrid">
                {services.map((service) => (
                    <div className='aboutInfo serviceInfo' key={service.id}>
                        <div style={{ zIndex: 1 }}>
                            <div className="serviceImg">
                                <img src={service.imgSrc} alt={service.title} />
                            </div>
                            <p className='aboutTitle'>{service.title}</p>
                        </div>
                        <div style={{ zIndex: 1 }}>
                            <span className='aboutDesc'>{service.description}</span>
                            <div className="serviceList">
                                {service.features.map((feature, index) => (
                                    <div key={index}>
                                        <box-icon name='check' color="#ffd900" size="20px"></box-icon>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="about-grid"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;