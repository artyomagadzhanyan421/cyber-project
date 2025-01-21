import { useState } from "react";

const useFeedbacksData = () => {
    const [feedbacks] = useState([
        {
            id: 1,
            message: "Cipher transformed our security posture overnight. Their expertise in threat detection and response is unmatched, and we feel more secure than ever!",
            name: "Sarah Thomson",
            title: "CTO at Accurex",
            img: "/feedbacks/f1.avif",
        },
        {
            id: 2,
            message: "Cipher's solutions have been instrumental in helping us meet compliance standards effortlessly! With their expert guidance and support, we can now focus on our growth initiatives instead of worrying about regulatory concerns.",
            name: "Mark Parker",
            title: "Compliance Officer At 5Mind",
            img: "/feedbacks/f2.avif",
        },
        {
            id: 3,
            message: "The Cipher team is knowledgeable, responsive, and always goes the extra mile to ensure our security needs are met!",
            name: "Jessica Albo",
            title: "Security Analyst At MSoft",
            img: "/feedbacks/f3.avif",
        },
        {
            id: 4,
            message: "Thanks to Cipher, we’ve significantly reduced our incident response time. Their proactive monitoring and quick response strategies have allowed us to focus on our core business operations without the constant worry of potential threats looming over us.",
            name: "James Lenson",
            title: "IT Manager at Modus",
            img: "/feedbacks/f4.avif",
        },
        {
            id: 5,
            message: "Their proactive approach to threat detection makes us feel safe and secure. We trust Cipher to safeguard our info.",
            name: "Linda Keers",
            title: "CEO At Nimb",
            img: "/feedbacks/f5.avif",
        },
        {
            id: 6,
            message: "We wholeheartedly trust Cipher to keep our sensitive data secure, and their unwavering commitment to excellence is evident in everything they do. Their attention to detail and dedication to client success truly set them apart in the cybersecurity field.",
            name: "Robert Deen",
            title: "CIO At Algenius",
            img: "/feedbacks/f6.avif",
        },
        {
            id: 7,
            message: "The team at Cipher truly understands our unique needs and consistently delivers exceptional service. Their dedication to client success is evident.",
            name: "Emily Rains",
            title: "Operations Director At 2k7",
            img: "/feedbacks/f7.avif",
        },
        {
            id: 8,
            message: "Working with Cipher has been a game-changer for our business. Their solutions not only perfectly fit our requirements but also adapt as our needs evolve. Their expertise and support have truly transformed our approach to cybersecurity.",
            name: "Tom Simons",
            title: "Business Owner",
            img: "/feedbacks/f8.avif",
        },
        {
            id: 9,
            message: "Their solutions fit our needs perfectly, addressing every aspect of our cybersecurity challenges. We're truly glad we partnered with Cipher, as their expertise has strengthened our security.",
            name: "Anna Williams",
            title: "Risk Manager at Digibi",
            img: "/feedbacks/f9.avif",
        },
    ]);

    return { feedbacks };
};

export default useFeedbacksData;
