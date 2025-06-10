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

const projects =  [
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
        "title": "OffSpace",
        "startDate": "2025",
        "description": "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
        "images": [
            "images/portfolio/animal-shelter/p1.jpg",
            "images/portfolio/animal-shelter/p2.jpg"
        ],
        "url": "",
        "technologies": [
            {
                "class": "devicon-angularjs-plain",
                "name": "Angular"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class": "devicon-csharp-plain",
                "name": "C#"
            }
        ]
    },
    {
        "title": "Photography",
        "startDate": "2018",
        "description": "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
        "images": [
            "images/portfolio/photography/p1.jpg",
            "images/portfolio/photography/p2.jpg"
        ],
        "url": "https://github.com",
        "technologies": [
            {
                "class": "devicon-react-original",
                "name": "React"
            },
            {
                "class": "devicon-javascript-plain",
                "name": "JavaScript"
            }
        ]
    },
    {
        "title": "3D Object Viewer",
        "startDate": "2015",
        "description": "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
        "images": [
            "images/portfolio/adventure/p1.jpg",
            "images/portfolio/adventure/p2.jpg"
        ],
        "url": "https://github.com",
        "technologies": [
            {
                "class": "devicon-angularjs-plain",
                "name": "Angular"
            },
            {
                "class": "devicon-typescript-plain",
                "name": "TypeScript"
            },
            {
                "class": "devicon-csharp-plain",
                "name": "C#"
            }
        ]
    }
]

export default function Projects(props: IProps) {

    const [detailsModalShow,setdetailsModalShow] = useState(false)
    const [currentProject,setCurrentProject]  = useState({})

    const currentProjects = (projects:{title:string,images:string[],startDate:string}) =>{
         return (
                <div
                    className="col-sm-12 col-md-6 col-lg-4"
                    key={projects.title}
                    style={{ cursor: "pointer" }}
                    onClick={()=>handleDetailsModal(projects)}
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

    const handleDetailsModal = (project:any) =>{
        setCurrentProject(project)
        setdetailsModalShow(true)
    }
    const closeDetailsModal = () =>{
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
                        projects.map((eachProject:any)=>currentProjects(eachProject))
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
