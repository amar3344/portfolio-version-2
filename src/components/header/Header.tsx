import React from 'react'
import Typical from "react-typical";
import "../../index.css";
import { Icon } from "@iconify/react";
// import Resume from "../../../public/amarkumar.pdf"

interface IProps {
    sharedData: any
}

export default function Header(props: IProps) {

    const HeaderTitleTypeAnimation = React.memo(() => {
        let updateTitles = props.sharedData.titles.map((x: any) => [x.toUpperCase(), 1500]).flat();
        return <Typical steps={updateTitles} loop={50} />
    }, (props, prevProp) => true);

    const downloadResume = async () => {
        const aElement = document.createElement("a")
        aElement.href = "https://drive.google.com/uc?export=download&id=1VlHXifQ6A_24DboFi4_tI2jad6KIBG8J"
        aElement.download="amarkumarresume.pdf"
        aElement.target = "_blank"
        aElement.rel = "noopener noreferrer"
        aElement.click()
    }

    return (
        <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <Icon icon="solar:laptop-broken" style={{ height: "100px", width: "200px" }} />
                        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={[props.sharedData.name]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                    <button onClick={downloadResume} className='downloadButton'>
                        <p className='downloadText'>Download Resume</p>
                    </button>
                </div>
            </div>
        </header>
    );
}
