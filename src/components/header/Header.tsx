import React from 'react'
import Switch from "react-switch";
import Typical from "react-typical";
import "../../index.css";
import { Icon } from "@iconify/react";

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
                        <Icon icon="solar:laptop-broken" style={{height:"100px",width:"200px"}} />
                        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={[props.sharedData.name]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
