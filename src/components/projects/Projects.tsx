import "../../App.css"
import "../../index.css"


interface IProps {
    resumeBasicInfo: any
}

const projects =  [
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

    const currentProjects = (projects:{title:string,images:string[],startDate:string}) =>{
         return (
                <div
                    className="col-sm-12 col-md-6 col-lg-4"
                    key={projects.title}
                    style={{ cursor: "pointer" }}
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
            </div>
        </section>
    )
}
