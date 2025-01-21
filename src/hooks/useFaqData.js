import { useState } from 'react';

const useFaqData = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqData = [
        {
            question: "How does Cipher ensure data protection?",
            answer: "We implement advanced security measures to protect sensitive information, including data encryption, strict access controls, and continuous monitoring of your systems. Our multi-layered approach ensures that your data is safeguarded from unauthorized access and potential cyber threats, providing peace of mind for your organization.",
        },
        {
            question: "What services does Cipher offer?",
            answer: "Cipher provides a comprehensive range of cybersecurity services, including threat detection and response, managed security services, expert security consulting, and data protection solutions. Our offerings are tailored to meet the specific needs of various industries, ensuring robust protection against evolving cyber threats.",
        },
        {
            question: "What industries does Cipher serve?",
            answer: "Cipher specializes in providing cybersecurity solutions across several key industries, including finance, healthcare, retail, education, manufacturing, and government. Our expertise allows us to understand the unique challenges each industry faces and offer tailored solutions that effectively address their specific security requirements.",
        },
        {
            question: "How quickly can Cipher respond to a security incident?",
            answer: "Our proactive monitoring and rapid incident response strategies enable us to address security threats in real-time. We have established protocols that allow our team to react swiftly, significantly minimizing potential damage and downtime.",
        },
        {
            question: "What makes Cipher different from other cybersecurity companies?",
            answer: "Cipher stands out due to our commitment to delivering tailored solutions that directly address your organization’s unique security needs. Our deep industry expertise, emphasis on compliance, and client-centric approach ensure that we prioritize your concerns while providing effective cybersecurity measures.",
        },
        {
            question: "Are Cipher’s services customizable?",
            answer: "Yes! We understand that every organization has its own unique challenges, which is why we offer fully customizable cybersecurity solutions. Our team will work closely with you to develop a strategy that aligns with your specific requirements and security goals, ensuring optimal protection for your business.",
        },
    ];

    return { activeFaq, toggleFaq, faqData };
};

export default useFaqData;
