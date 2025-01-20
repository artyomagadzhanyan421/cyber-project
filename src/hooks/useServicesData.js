import { useState } from 'react';

const useServicesData = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            title: "Threat Detection & Response",
            description: "Our threat detection system monitors your network 24/7, identifying threats in real time and deploying rapid response strategies to minimize impact.",
            imgSrc: "/services/s1.svg",
            features: [
                "Threat Identification",
                "Swift Incident Response",
                "Minimized Downtime",
                "Continuous Monitoring",
            ],
        },
        {
            id: 2,
            title: "Managed Security Services",
            description: "We deliver outsourced security management with continuous monitoring and protection, ensuring our expert team handles all your security needs.",
            imgSrc: "/services/s2.svg",
            features: [
                "Security Coverage",
                "Skilled Professionals",
                "Cost-Efficient Management",
                "24/7 Monitoring",
            ],
        },
        {
            id: 3,
            title: "Expert Security Consulting",
            description: "Our consulting services evaluate your security posture and create tailored strategies, offering expert guidance on best practices and compliance.",
            imgSrc: "/services/s3.svg",
            features: [
                "Security Strategies",
                "Enhanced Compliance",
                "Risk Mitigation",
                "Expert Insights",
            ],
        },
        {
            id: 4,
            title: "Data Protection Services",
            description: "We utilize encryption and access controls to effectively protect your sensitive data from unauthorized access and potential breaches.",
            imgSrc: "/services/s4.svg",
            features: [
                "Data Confidentiality",
                "Minimized Risk of Breaches",
                "Increased Customer Trust",
                "Compliance Support",
            ],
        },
    ]);

    return { services, setServices };
};

export default useServicesData;