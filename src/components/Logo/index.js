import React from "react";
import MyLogo from "../../assets/img/logo.svg";
import "./index.css";

const Logo = (props) => {
  return (
    <a href="/" {...props}>
      <img src={MyLogo} alt="Dikshit" className="logo" />
    </a>
  );
};

export default Logo;
