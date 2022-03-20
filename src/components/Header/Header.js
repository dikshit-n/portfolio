import React, { Fragment, useState } from "react";
import NavigationBar from "./Navbar/navbar";
import Hamburger from "../UI/Hamburger/Hamburger";
import SideDrawer from "./SideDrawer/SideDrawer";

const Header = (props) => {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(prev => !prev)
    }

  return (
    <Fragment>
      <NavigationBar />
      <Hamburger onClick={toggle} />
      <SideDrawer show={show} onClick={toggle} />
    </Fragment>
  )
};

export default Header