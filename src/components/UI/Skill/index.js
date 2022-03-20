import React from "react";
import { Col, Row } from "reactstrap";
import DefaultGallery from "../../../assets/img/default-gallery.png";
import "./index.css";

const Skill = ({ name, link, image = DefaultGallery }) => {
  return (
    <a href={link} target="_blank" className="skill-container">
      <Row className="skill">
        <Col sm="12" md="4">
          <div
            style={{ backgroundImage: `url("${image}")` }}
            className="image"
          />
          {/* <img src={DefaultGallery} alt="name" /> */}
        </Col>
        <Col sm="12" md="8" className="content">
          <h6>{name}</h6>
          <a target="_blank" href={link}>
            {link}
          </a>
        </Col>
      </Row>
    </a>
  );
};
export default Skill;
