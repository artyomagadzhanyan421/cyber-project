import React from 'react';

function Why() {
    const slidesData = [
        {
            className: 'slidesMain',
            items: ['Protection', 'Monitoring', 'Expertise', 'Customization', 'Response', 'Compliance', 'Reliability', 'Scalability'],
        },
        {
            className: 'slidesMain slideTwo',
            items: ['Support', 'Efficiency', 'Innovation', 'Accessibility', 'Integration', 'Transparency', 'Resilience', 'Empowerment'],
        },
        {
            className: 'slidesMain',
            items: ['Security', 'Confidentiality', 'Automation', 'Performance', 'Adaptability', 'Simplicity', 'Collaboration', 'Insights'],
        },
    ];

    return (
        <div className="Why">
            <div className="Block whyBlock">
                <center><p className="subHead">/ why cipher</p></center>
                <center><p className="heading blockHead">We provide tailored cybersecurity solutions driven by innovation and customer satisfaction</p></center>
                <div className="links servicesLinks" style={{ justifyContent: "center" }}>
                    <a href="#contact">boost security</a>
                    <a href="#feedbacks">what others say</a>
                </div>
            </div>

            <div className="whySlideshow">
                {slidesData.map((slide, index) => (
                    <div key={index} className="aboutSlides whySlides">
                        <div className={slide.className}>
                            {Array.from({ length: 3 })
                                .flatMap(() => slide.items)
                                .map((item, itemIndex) => (
                                    <p key={`${index}-${itemIndex}`}>{item}</p>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            <center><span className="whySpan">Our skilled team uses cutting-edge technology and tailored strategies to protect clients from evolving threats.</span></center>
        </div>
    );
}

export default Why;