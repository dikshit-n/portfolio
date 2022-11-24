import React from "react";
import "./HomePage.css";
import BlueLine from "../UI/BlueLine/BlueLine";
import { Row, Col } from "reactstrap";
// import Progress from "react-circle-progress-bar";
// import Projects from "./Projects/Projects";
import Skill from "../UI/Skill";
import ProgramingLanguageCard from "../UI/ProgramingLanguageCard";
import Project from "../UI/Project";
import Experience from "./Experience";
import { myDetails } from "../../data/static";

const HomePage = (props) => {
  const gotoEmail = (e) => {
    e.preventDefault();
    window.open(`mailto:${myDetails.personal.contact.email}`);
  };

  return (
    <div className="content">
      <div id="home">
        <div className="img-1-container">
          <img
            src={require("../../assets/svg/developer.svg")}
            alt=" "
            className="img-1 img"
          />
        </div>
        <div className="Intro-container">
          <h1>Hello, I am {myDetails.personal.name}</h1>
          <h4>{myDetails.personal.designation}</h4>
          <div className="social-media">
            <a href={myDetails.social.linkedin.link} target="_blank">
              <img src={myDetails.social.linkedin.image} alt="linkedin" />
            </a>
            <a href={myDetails.social.github.link} target="_blank">
              <img src={myDetails.social.github.image} alt="github" />
            </a>
            <a href={myDetails.social.resume.link} target="_blank">
              <img src={myDetails.social.resume.image} alt="resume" />
            </a>
          </div>
        </div>
      </div>
      <div id="aboutme" className="give-top-space">
        <Row className="zero">
          <div className="Heading">
            <h1>About Me</h1>
            <BlueLine />
          </div>
          <Col lg="6" md="12" sm="12" xs="12">
            <img
              src={require("../../assets/svg/developing.svg")}
              alt=" "
              className="img"
            />
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="about-me">
            <ul>
              {myDetails.personal.aboutMe.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
          </Col>
        </Row>
      </div>
      <div id="technicalskills" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1>Technical Skills</h1>
            <BlueLine />
          </div>
          <Col sm="12" md="10" className="mx-auto">
            <Row className="skills-container mx-auto">
              <Col sm="12" md="4">
                <Skill
                  name="React JS"
                  link={myDetails.skills.react.link}
                  image={myDetails.skills.react.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Next JS"
                  link={myDetails.skills.next.link}
                  image={myDetails.skills.next.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Redux JS"
                  link={myDetails.skills.redux.link}
                  image={myDetails.skills.redux.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="React query"
                  link={myDetails.skills.reactQuery.link}
                  image={myDetails.skills.reactQuery.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="HTML"
                  link={myDetails.skills.html.link}
                  image={myDetails.skills.html.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="CSS"
                  link={myDetails.skills.css.link}
                  image={myDetails.skills.css.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="SCSS"
                  link={myDetails.skills.scss.link}
                  image={myDetails.skills.scss.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Git / Github"
                  link={myDetails.skills.git.link}
                  image={myDetails.skills.git.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Material UI"
                  link={myDetails.skills.mui.link}
                  image={myDetails.skills.mui.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Reactstrap"
                  link={myDetails.skills.reactstrap.link}
                  image={myDetails.skills.reactstrap.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Bootstrap"
                  link={myDetails.skills.bootstrap.link}
                  image={myDetails.skills.bootstrap.image}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="programinglanguages" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Programing Languages</h1>
            <BlueLine />
          </div>
          <Col
            md="10"
            sm="12"
            className="mx-auto d-flex flex-wrap justify-content-center"
          >
            <ProgramingLanguageCard
              name="Javascript"
              image={myDetails.programingLanguage.javascript.image}
              link={myDetails.programingLanguage.javascript.link}
            />
            <ProgramingLanguageCard
              name="Typescript"
              image={myDetails.programingLanguage.typescript.image}
              link={myDetails.programingLanguage.typescript.link}
            />
          </Col>
        </Row>
      </div>
      <div id="projects" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Featured Project</h1>
            <BlueLine />
          </div>
          <div className="projects-container">
            {myDetails.projects.map((el, index) => (
              <Project {...el} key={index} />
            ))}
          </div>
        </Row>
      </div>
      <div id="experience" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Experience</h1>
            <BlueLine />
          </div>
        </Row>
        <Experience />
      </div>
      <div id="contact" className="give-top-space">
        <Row className="zero mx-auto">
          <div className="Heading">
            <h1 className="bold">Contact</h1>
            <BlueLine />
          </div>
          <Col
            lg="4"
            md="12"
            sm="12"
            xs="12"
            onClick={gotoEmail}
            style={{ cursor: "pointer" }}
          >
            <h4>Email</h4>
            <p>{myDetails.personal.contact.email}</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Contact Number</h4>
            <p>{myDetails.personal.contact.number}</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Social Links</h4>
            <div className="contact-social-media">
              <a href={myDetails.social.linkedin.link} target="_blank">
                <img src={myDetails.social.linkedin.image} alt="linkedin" />
              </a>
              <a href={myDetails.social.github.link} target="_blank">
                <img src={myDetails.social.github.image} alt="github" />
              </a>
              <a href={myDetails.social.resume.link} target="_blank">
                <img src={myDetails.social.resume.image} alt="resume" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="give-top-space"></div>
    </div>
  );
};

export default HomePage;
