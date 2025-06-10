import "../../App.css"
import "../../index.css"

const techStack = {
    "icons": [
        {
            "name": "HTML 5",
            "class": "devicon-html5-plain",
            "level": "95"
        },
        {
            "name": "CSS 3",
            "class": "devicon-css3-plain",
            "level": "95"
        },
        {
            "name": "JavaScript",
            "class": "devicon-javascript-plain",
            "level": "70"
        },
        {
            "name": "TypeScript",
            "class": "devicon-typescript-plain",
            "level": "90"
        },
        {
            "name": "React Js",
            "class": "devicon-react-plain",
            "level": "75"
        },
        {
            "name": "React Native",
            "class": "devicon-react-plain",
            "level": "75"
        },
        {
            "name": "Bootstrap",
            "class": "devicon-bootstrap-plain",
            "level": "85"
        },
        {
            "name": "MySql",
            "class": "devicon-mysql-plain",
            "level": "60"
        },
        {
            "name": "Redux",
            "class": "devicon-redux-plain",
            "level": "60"
        },
        {
            "name": "Node JS",
            "class": "devicon-nodejs-plain",
            "level": "60"
        },
        {
            "name": "Express JS",
            "class": "devicon-express-original",
            "level": "60"
        },
        {
            "name": "Jest",
            "class": "devicon-jest-plain",
            "level": "60"
        }, 
        {
            "name": "Mocha",
            "class": "devicon-mocha-plain",
            "level": "60"
        },
        {
            "name": "MongoDB",
            "class": "devicon-mongodb-plain",
            "level": "60"
        },
        {
            "name": "Firebase",
            "class": "devicon-firebase-plain",
            "level": "60"
        },

    ]
}

export default function Skills() {
    const skills = techStack.icons.map(function (eachSkill, i) {
        return (
          <li className="list-inline-item mx-3 background" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={eachSkill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {eachSkill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });

  return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">Skills</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
}
