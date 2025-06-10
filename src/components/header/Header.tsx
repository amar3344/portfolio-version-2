import React from 'react'
import Switch from "react-switch";
import Typical from "react-typical";
import "../../index.css"

interface IProps{
    sharedData:any
}

export default function Header(props:IProps) {

    const HeaderTitleTypeAnimation = React.memo(() => {
        let updateTitles = props.sharedData.titles.map((x:any) => [x.toUpperCase(), 1500]).flat();
        return <Typical steps={updateTitles} loop={50} />
    }, (props, prevProp) => true);

    return (
        <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={[props.sharedData.name]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                        <Switch
                            checked={true}
                            onChange={() => { }}
                            offColor="#baaa80"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="twemoji:owl"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun-with-face"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
