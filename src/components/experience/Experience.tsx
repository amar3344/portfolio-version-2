import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "../../index.css"

const experience = [
    {
        "company": "Atum Information Technologies LLP",
        "title": "Software Engineer",
        "years": "01.2025 - 06.2025",
        "mainTech": [
            "React-Native 0.6/0.7"
        ],
        "technologies": [
            "JavaScript",
            "Typescript",
            "Redux",
            "Git",
            "Enzymes",
            "Jest",
            "ComentChat SDK",
            "Stripe SDK",
            "Razorpay SDK",
            "Firebase"
        ]
    },
    {
        "company": "Extended WebTech App LLP",
        "title": "Junior Software Developer",
        "years": "05.2023 - 01.2025",
        "mainTech": [
            "React-Native 0.5/0.6/0.7"
        ],
        "technologies": [
            "JavaScript",
            "Typescript",
            "Redux",
            "Git",
            "Enzymes",
            "Jest",
            "ComentChat SDK",
            "Stripe SDK",
            "Razorpay SDK",
            "Firebase"
        ]
    },
    {
        "company": "Extended WebTech App LLP",
        "title": "Junior Software Developer(Intern)",
        "years": "11.2022 - 04.2023",
        "mainTech": [
            "React-Native 0.5/0.6/0.7",
            "React JS 18" 
        ],
        "technologies": [
            "BootStrap",
            "Material UI",
            "CSS",
            "HTML",
            "JavaScript",
            "Typescript",
            "Redux",
            "Git",
            "Firebase"
        ]
    },
    {
        "company": "SECUREVERSE",
        "title": "Web Developer(Intern)",
        "years": "10.2022 - 11.2022",
        "mainTech": [
            "React JS 18" 
        ],
        "technologies": [
            "BootStrap",
            "CSS",
            "HTML",
            "JavaScript",
            "Typescript",
            "Git",
        ]
    },
    {
        "company": "XcitEducation Worldwide",
        "title": "Web Developer(Intern)",
        "years": "09.2022 - 10.2022",
        "mainTech": [
            "React JS 18" 
        ],
        "technologies": [
            "BootStrap",
            "CSS",
            "HTML",
            "JavaScript",
            "Git",
        ]
    }
]

export default function Experience() {
    const work = experience.map(function (work, i) {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        var mainTech = mainTechnologies.map((technology, i) => {
            return (
                <Badge pill className="main-badge mr-2 mb-2" key={i}>
                    {technology}
                </Badge>
            );
        });
        var tech = technologies.map((technology, i) => {
            return (
                <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                    {technology}
                </Badge>
            );
        });
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<i className="fab fa-react experience-icon"></i>}
                key={i}
            >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                    {mainTech}
                </div>

                <h3
                    className="vertical-timeline-element-title"
                    style={{ textAlign: "left" }}
                >
                    {work.title}
                </h3>
                <h4
                    className="vertical-timeline-element-subtitle"
                    style={{ textAlign: "left" }}
                >
                    {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
            </VerticalTimelineElement>
        );
    });
    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "black" }}>
                        <span className="text-black" style={{ textAlign: "center" }}>
                            Experience
                        </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {work}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={
                            <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                        }
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}
