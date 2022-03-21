import React, { useState } from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import "./navbar.css";
import { withRouter } from "react-router";
import Logo from "../../Logo";

const NavigationBar = (props) => {
  const [activeStatus, setActiveStatus] = useState({
    home: true,
    aboutme: false,
    technicalskills: false,
    projects: false,
    experience: false,
    contact: false,
    programinglanguages: false,
  });

  const activate = (e) => {
    // e.preventDefault()
    const { name } = e.target;
    setActiveStatus({
      home: false,
      aboutme: false,
      technicalskills: false,
      projects: false,
      experience: false,
      contact: false,
      programinglanguages: false,
      [name]: true,
    });
    // goto(e, '/' + name)
  };

  // const goto = (event, name) => {
  //     event.preventDefault()
  //     // props.history.push(name)
  // }

  return (
    <div className="Navbar">
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{ justifyContent: "space-between" }}
      >
        <Nav pills>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.home}
              name="home"
              href="#home"
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.aboutme}
              name="aboutme"
              href="#aboutme"
            >
              About me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.technicalskills}
              name="technicalskills"
              href="#technicalskills"
            >
              Technical Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.programinglanguages}
              name="programinglanguages"
              href="#programinglanguages"
            >
              Programing languages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.projects}
              name="projects"
              href="#projects"
            >
              Featured Project
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.experience}
              name="experience"
              href="#experience"
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={activate}
              active={activeStatus.contact}
              name="contact"
              href="#contact"
            >
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <Logo style={{ marginRight: 10 }} />
      </Navbar>
    </div>
  );
};

export default withRouter(NavigationBar);
