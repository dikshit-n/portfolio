import React from "react";
import DefaultGallery from "../../../assets/img/default-gallery.png";
import "./index.css";

const ProgramingLanguageCard = ({ name, link, image = DefaultGallery }) => {
  return (
    <a href={link} target="_blank" className="programinglanguage-container">
      <div className="programinglanguage">
        <img src={image} alt={name} />
        <div className="content">
          <h6>{name}</h6>
          <a target="_blank" href={link}>
            {link}
          </a>
        </div>
      </div>
    </a>
  );
};
export default ProgramingLanguageCard;
