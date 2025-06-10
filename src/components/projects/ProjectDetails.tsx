import React from 'react';
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
// import AwesomeSliderStyles from "./light-Slider.scss";
// import AwesomeSliderStyles2 from "./dark-Slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import 'react-awesome-slider/dist/styles.css';
import "../../index.css"

interface IProps {
  onHide: () => void;
  show: boolean,
  data: any
}

export default function ProjectDetails(props: IProps) {
  console.log("DATA IMGE", props.data.images)

  const renderImageContainer = () => {
    if (props.data.images) {
      return (
        <AwesomeSlider
          // cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
          animation="scaleOutAnimation"
          className="slider-image"
        >
          {props.data.images.map((elem:string,i:number)=> <div key={i} data-src={elem} />)}
        </AwesomeSlider>
      )
  }
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
        </div>
      </div>
    </div>
  </Modal>
)
}
