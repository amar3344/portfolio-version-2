import React from 'react';
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import 'react-awesome-slider/dist/styles.css';
import "../../index.css"

interface IProps{
    onHide:()=>void;
    show:boolean,
    data:any
}

export default function ProjectDetails(props:IProps) {

    const tech = (icons:any,i:any) => {
        return (
            <li className="list-inline-item mx-3" key={i}>
                <span>
                    <div className="text-center">
                        <i className={icons.class} style={{ fontSize: "300%" }}>
                            <p className="text-center" style={{ fontSize: "30%" }}>
                                {icons.name}
                            </p>
                        </i>
                    </div>
                </span>
            </li>
        );
    }
  return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {props.data.map((eachTitle:{title:string}) => eachTitle.title)}
              <a
                  href={props.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
            </h3>
            <p className="modal-description">{props.data.map((eachItem:{description:string}) => eachItem.description)}</p>
            <div className="col-md-12 text-center">
            </div>
          </div>
        </div>
      </Modal>
  )
}
