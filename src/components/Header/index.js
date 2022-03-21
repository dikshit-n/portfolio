import React, { Fragment, useState } from "react";
import NavigationBar from "./Navbar/navbar";
import Hamburger from "../UI/Hamburger/Hamburger";
import SideDrawer from "./SideDrawer/SideDrawer";
import Logo from "../Logo";
import "./index.css";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <Fragment>
      <NavigationBar />
      <Hamburger onClick={toggle} />
      <div className="logo-container">
        <Logo />
      </div>
      <SideDrawer show={show} onClick={toggle} />
    </Fragment>
  );
};

export default Header;
