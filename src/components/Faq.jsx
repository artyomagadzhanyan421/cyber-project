import React from 'react';
import useFaqData from '../hooks/useFaqData'; 

// CSS
import "../styles/Faq.css";

function Faq() {
    const { activeFaq, toggleFaq, faqData } = useFaqData(); 

    return (
        <div className='Block'>
            <center><p className="subHead">/ Frequently Asked Questions</p></center>
            <center><p className="heading blockHead">Your Most Common Questions Answered</p></center>

            <div className="faqs">
                {faqData.map((faq, index) => (
                    <div className="faq" onClick={() => toggleFaq(index)} key={index}>
                        <div className="faq-question">
                            <p>{faq.question}</p>
                            <box-icon name={activeFaq === index ? 'x' : 'plus'} color="#ffd900"></box-icon>
                        </div>
                        <span className={`answer ${activeFaq === index ? 'show' : ''}`}>
                            {faq.answer}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
