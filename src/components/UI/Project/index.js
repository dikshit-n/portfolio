import React from "react";
import "./index.css";
import DefaultGallery from "../../../assets/img/default-gallery.png";

const Project = ({
  name,
  link,
  image = DefaultGallery,
  previewImage = DefaultGallery,
  embedLink,
}) => {
  return (
    <a className="project-container" target="_blank" href={link}>
      <div
        className="website-preview"
        style={{ backgroundImage: `url("${previewImage}")` }}
      />
      <div className="project-info-container">
        <div className="image" style={{ backgroundImage: `url("${image}")` }} />
        <div className="content">
          <h6>{name}</h6>
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
      </div>
    </a>
  );
};

export default Project;
