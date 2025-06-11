import React from 'react';
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import 'react-awesome-slider/dist/styles.css';
import "../../index.css"

interface IProps {
  onHide: () => void;
  show: boolean,
  data: any
}

export default function ProjectDetails(props: IProps) {

  const renderImageContainer = () => {
    if (props.data.images) {
      return (
        <AwesomeSlider bullets={false}>
          <div><img style={{height:400,width:400}} src={props.data.images[0]}/></div>
          <div><img  style={{height:400,width:400}} src={props.data.images[1]}/></div>
          <div><img  style={{height:400,width:400}} src={props.data.images[2]}/></div>
        </AwesomeSlider>
      )
    }
  }
  if (props.data.technologies) {
    var tech = props.data.technologies.map((icons: { class: string, name: string }, i: number) => {
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
    });
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
      {renderImageContainer()}
      <div className="col-md-10 mx-auto">
        <h3 style={{ padding: "5px 5px 0 5px" }}>
          {props.data.title}
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
        <p className="modal-description">{props.data.description}</p>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto">{tech}</ul>
        </div>
      </div>
    </div>
  </Modal>
)
}
