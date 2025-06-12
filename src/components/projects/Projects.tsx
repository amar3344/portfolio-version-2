import "../../App.css"
import "../../index.css"
import ProjectDetailsModal from "./ProjectDetails";
import { useState } from "react"


interface IProps {
    resumeBasicInfo: any
}

const img1 = require("./lessericon.webp")
const img2 = require("./lesser1.jpeg")
const img3 = require("./lesser2.jpeg")
const gigIcon = require("./gigIcon.jpeg")
const gigImg  = require("./gigImg1.jpeg")
const gigImg2 = require("./2.png")
const sunriseIcon = require("./download.png")
const sunriseImg1 = require("./download (1).jpeg")
const sunriseImg2 = require("./download.jpeg")
const lmsIcon = require("./lmsIcon.jpeg")
const lmsImg1 = require("./lmsImg.png")
const lmsImg2 = require("./lmsImg2.jpeg")

const gigDescription = "Gigchasers is a marketplace app to bring together people who are seeking assistance in some way, E.g. flat tires, house cleaning, and people who can handle the jobs. The consumers are called Deployers (like employers) and the users who handle the jobs are Deployees."
"The platform will be quite secure with the users emails, phones and driving licenses should be verified to be able to use the platform.";
const offSpaceDescription = "The app is a personalized website builder that allows users to create and showcase their work, portfolios, CVs, or landing pages with a variety of customizable templates. Users can design their spaces using pre-defined project templates (e.g., cover, gallery, about, contact form, experience, charts, text, images, and titles), each offering multiple layout variations"

const projects = [
    {
        "title": "Lesser",
        "startDate": "2023",
        "description": "Lesser is an application directed to help recyclers in Saudi to find the nearest recycling station and dispose of their waste. While doing so, the recyclers will get points that allow them to redeem in exchange for discount codes or helpful products.",
        "images": [
            img1,
            img2,
            img3
        ],
        "url": "https://play.google.com/store/apps/details?id=com.LESSER2&hl=en_IN&pli=1",
        "technologies": [
            {
                "class": "devicon-react-plain",
                "name": "ReactNative"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
        ]
    },
    {
        "title": "GigChasers",
        "startDate": "2024",
        "description": gigDescription,
        "images": [
            gigIcon,
            gigImg,
            gigImg2
        ],
        "url": "https://gigchasers.com",
        "technologies": [
            {
                "class": "devicon-react-plain",
                "name": "ReactNative"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class" : "devicon-androidstudio-plain",
                "name" : "Android Studio"
            },
            {
                "class" : "devicon-xcode-plain",
                "name" : "XCode"
            },
            {
                "class" : "devicon-jest-plain",
                "name" : "Jest"
            }
        ]
    },
    {
        "title": "Sunrise Journal",
        "startDate": "2024",
        "description": "Sunrise Journal is ideal for individuals in the Traumatic Brain Injury (TBI) community, including both patients and caregivers. However, the app is open to anyone who enjoys recording their daily progress. It caters to users who wish to track their journey through daily prompts about progress, exercise, therapy, yoga, superfoods etc.",
        "images": [
            sunriseIcon,
            sunriseImg1,
            sunriseImg2
        ],
        "url": "",
        "technologies": [
            {
                "class": "devicon-react-plain",
                "name": "ReactNative"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class" : "devicon-androidstudio-plain",
                "name" : "Android Studio"
            },
            {
                "class" : "devicon-xcode-plain",
                "name" : "XCode"
            },
            {
                "class" : "devicon-jest-plain",
                "name" : "Jest"
            }
        ]
    },
    {
        "title": "Learning Management System",
        "startDate": "2023",
        "description": "The LMS app offers a streamlined platform for employee training and development, featuring four distinct user flows. Employees can enroll in courses, earn certificates, and track their progress seamlessly. Team Leads have the ability to review team members' progress, assigncourses, and facilitate their professional growth. Managers, with additional privileges, can oversee team progress, assign courses, and manage the app's content by adding new courses and users. Admins hold ultimate control, managing all app activities, including user management, course oversight, and progress monitoring, ensuring the smooth functioning of the training ecosystem.",
        "images": [
            lmsIcon,
            lmsImg1,
            lmsImg2
        ],
        "url": "",
        "technologies": [
            {
                "class": "devicon-react-plain",
                "name": "ReactNative"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class" : "devicon-androidstudio-plain",
                "name" : "Android Studio"
            },
            {
                "class" : "devicon-xcode-plain",
                "name" : "XCode"
            },
            {
                "class" : "devicon-jest-plain",
                "name" : "Jest"
            }
        ]
    },
    {
        "title": "OffSpace",
        "startDate": "2025",
        "description": offSpaceDescription,
        "images": [
            gigIcon,
            gigImg,
            gigImg2
        ],
        "url": "https://gigchasers.com",
        "technologies": [
            {
                "class": "devicon-react-plain",
                "name": "ReactNative"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class" : "devicon-androidstudio-plain",
                "name" : "Android Studio"
            },
            {
                "class" : "devicon-xcode-plain",
                "name" : "XCode"
            },
            {
                "class" : "devicon-jest-plain",
                "name" : "Jest"
            }
        ]
    },
]

export default function Projects(props: IProps) {

    const [detailsModalShow, setdetailsModalShow] = useState(false)
    const [currentProject, setCurrentProject] = useState({})

    const currentProjects = (projects: { title: string, images: string[], startDate: string }) => {
        return (
            <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={projects.title}
                style={{ cursor: "pointer" }}
                onClick={() => handleDetailsModal(projects)}
            >
                <span className="portfolio-item d-block">
                    <div className="foto">
                        <div>
                            <img
                                src={projects.images[0]}
                                alt="projectImages"
                                height="230"
                                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
                            />
                            <span className="project-date">{projects.startDate}</span>
                            <br />
                            <p className="project-title-settings mt-3">
                                {projects.title}
                            </p>
                        </div>
                    </div>
                </span>
            </div>
        );
    }

    const handleDetailsModal = (project: any) => {
        setCurrentProject(project)
        setdetailsModalShow(true)
    }
    const closeDetailsModal = () => {
        setdetailsModalShow(false)

    }
    return (
        <section id="portfolio">
            <div className="col-md-12">
                <h1 className="section-title" style={{ color: "black" }}>
                    <span>{props.resumeBasicInfo.section_name.projects}</span>
                </h1>
                <div className="col-md-12 mx-auto">
                    <div className="row mx-auto">{
                        projects.map((eachProject: any) => currentProjects(eachProject))
                    }</div>
                </div>
                <ProjectDetailsModal
                    show={detailsModalShow}
                    onHide={closeDetailsModal}
                    data={currentProject}
                />
            </div>
        </section>
    )
}
