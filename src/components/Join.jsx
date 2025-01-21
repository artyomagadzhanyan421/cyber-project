import React from 'react';

function Join() {
    return (
        <div className='Block joinBlock'>
            <center><p className="subHead">Join 5,000+ businesses trusting Cipher.</p></center>
            <center><p className="heading blockHead">Join the Cybersecurity Revolution and Safeguard Your Business Today</p></center>
            <div className="links servicesLinks" style={{ justifyContent: "center" }}>
                <a href="#">boost security</a>
                <a href="#">what others say</a>
            </div>
            <div className="heroImage joinImage">
                <div className="imageBlock joinImg" style={{ position: 'relative', display: "flex" }}>
                    <img src="/hero/hero.avif" alt="image" style={{ position: "relative", width: "100%" }} />
                </div>
            </div>
        </div>
    )
}

export default Join