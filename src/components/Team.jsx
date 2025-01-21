import React from "react";
import useTeamData from "../hooks/useTeamData"; 
import "../styles/Team.css";

function Team() {
    const { team } = useTeamData();

    return (
        <div className="Block">
            <p className="subHead">/ our team</p>
            <p className="heading blockHead">The Brilliant Minds Behind Cipher’s Success</p>

            <div className="team">
                {team.map((member, index) => (
                    <div key={index} className="member">
                        <div className="memberData">
                            <div style={{ zIndex: 1 }}>
                                <p className="name">{member.name}</p>
                                <p className="position">{member.position}</p>
                                <p className="about">{member.about}</p>
                            </div>
                            <div className="memeberStats">
                                <div>
                                    <p>{member.stats.experience}</p>
                                    <span>Years of experience</span>
                                </div>
                                <div>
                                    <p>{member.stats.projects}</p>
                                    <span>Successful projects</span>
                                </div>
                                <div>
                                    <p>{member.stats.assessments}</p>
                                    <span>Security assessments</span>
                                </div>
                                <div>
                                    <p>{member.stats.onTimeDelivery}</p>
                                    <span>On-time delivery</span>
                                </div>
                            </div>
                            <div className="team-grid"></div>
                        </div>
                        <div className="memberImage">
                            <img src={member.image} alt={member.name} />
                            <div className="corner cRightTop"></div>
                            <div className="corner cRightBottom"></div>
                            <div className="corner cLeftTop"></div>
                            <div className="corner cLeftBottom"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;