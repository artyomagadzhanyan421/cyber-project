import { useState } from "react";

const useTeamData = () => {
    const [team, setTeam] = useState([
        {
            name: "Alex Turner",
            position: "Chief Technology Officer",
            about: "Alex drives our technology strategy and develops innovative cybersecurity solutions, leveraging over a decade of experience to combat threats.",
            stats: {
                experience: "12+",
                projects: "200+",
                assessments: "360+",
                onTimeDelivery: "95%"
            },
            image: "/team/t1.avif"
        },
        {
            name: "Maria Chen",
            position: "Security Analyst",
            about: "Maria specializes in threat detection and incident response, analyzing breaches to enhance client defenses while staying ahead of threats.",
            stats: {
                experience: "08+",
                projects: "130+",
                assessments: "420+",
                onTimeDelivery: "97%"
            },
            image: "/team/t2.avif"
        },
        {
            name: "David Patel",
            position: "Cybersecurity Consultant",
            about: "David collaborates with clients to assess their security posture and create tailored strategies, ensuring compliance and protection against risks.",
            stats: {
                experience: "14+",
                projects: "250+",
                assessments: "480+",
                onTimeDelivery: "99%"
            },
            image: "/team/t3.avif"
        }
    ]);

    const addMember = (newMember) => {
        setTeam((prevTeam) => [...prevTeam, newMember]);
    };

    return { team, addMember };
};

export default useTeamData;