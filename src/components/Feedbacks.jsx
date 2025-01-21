import React from 'react';

// CSS
import "../styles/Feedbacks.css";

// Hooks
import useFeedbacksData from "../hooks/useFeedbacksData";

function Feedbacks() {
    const { feedbacks } = useFeedbacksData();

    return (
        <div className='Block' id='feedbacks'>
            <p className="subHead">/ What Others Say</p>
            <p className="heading blockHead">Inspiring Success Stories from Clients Who Trust Our Solutions</p>

            <div className="feedbacks">
                {feedbacks.map(({ id, message, name, title, img }) => (
                    <div className="heroBlock" key={id}>
                        <span className='feedbackDesc'>{message}</span>
                        <div className='feedbackName'>
                            <img src={img} alt={name} />
                            <div>
                                <p>{name}</p>
                                <p style={{ marginTop: 3, color: "#ffd900b3" }}>{title}</p>
                            </div>
                        </div>
                        <div className="feedback-grid"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Feedbacks;