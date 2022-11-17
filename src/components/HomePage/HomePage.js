import React from "react";
import "./HomePage.css";
import BlueLine from "../UI/BlueLine/BlueLine";
import { Row, Col } from "reactstrap";
// import Progress from "react-circle-progress-bar";
// import Projects from "./Projects/Projects";
import Skill from "../UI/Skill";
import LinkedinIcon from "../../assets/social-icons/linkedin.png";
import GithubIcon from "../../assets/social-icons/github.png";
import ResumeIcon from "../../assets/social-icons/resume.png";
import ReactLogo from "../../assets/img/react.png";
import NextLogo from "../../assets/img/next.png";
import ReduxLogo from "../../assets/img/redux.png";
import ReactQueryLogo from "../../assets/img/react-query.png";
import HTMLLogo from "../../assets/img/html.png";
import CSSLogo from "../../assets/img/css.png";
import SCSSLogo from "../../assets/img/scss.png";
import GitLogo from "../../assets/img/git.png";
import MuiLogo from "../../assets/img/mui.png";
import ReactstrapLogo from "../../assets/img/reactstrap.png";
import BootstrapLogo from "../../assets/img/bootstrap.png";
import JSLogo from "../../assets/img/js.png";
import TSLogo from "../../assets/img/ts.png";
import EmergeAbility from "../../assets/img/emergeability.png";
import EmergeAbilityWebsite from "../../assets/img/emergeability-website.jpg";
import ProgramingLanguageCard from "../UI/ProgramingLanguageCard";
import Project from "../UI/Project";
import Experience from "./Experience";

const social = {
  linkedin: {
    image: LinkedinIcon,
    link: "https://www.linkedin.com/in/dikshitkumar-n-b66177199/",
  },
  github: {
    image: GithubIcon,
    link: "https://github.com/dikshit-n?tab=repositories",
  },
  resume: {
    image: ResumeIcon,
    link: "https://dikshit-n.github.io/resume/Resume.pdf",
  },
};

const projects = [
  {
    name: "EmergeAbility",
    link: "http://emergeability.org/",
    image: EmergeAbility,
    embedLink: "http://emergeability.org/",
    previewImage: EmergeAbilityWebsite,
  },
];

const skills = {
  react: { link: "https://reactjs.org/", image: ReactLogo },
  next: { link: "https://nextjs.org/", image: NextLogo },
  redux: { link: "https://redux.js.org/", image: ReduxLogo },
  reactQuery: {
    link: "https://react-query.tanstack.com/",
    image: ReactQueryLogo,
  },
  html: {
    link: "https://www.w3schools.com/html/html_intro.asp",
    image: HTMLLogo,
  },
  css: {
    link: "https://www.w3schools.com/css/css_intro.asp",
    image: CSSLogo,
  },
  scss: { link: "https://sass-lang.com/", image: SCSSLogo },
  git: { link: "https://github.com/", image: GitLogo },
  mui: { link: "https://mui.com/", image: MuiLogo },
  reactstrap: { link: "https://reactstrap.github.io/", image: ReactstrapLogo },
  bootstrap: { link: "https://getbootstrap.com/", image: BootstrapLogo },
};

const programingLanguage = {
  javascript: { link: "https://www.javascript.com/", image: JSLogo },
  typescript: { link: "https://www.typescriptlang.org/", image: TSLogo },
};

const HomePage = (props) => {
  const gotoEmail = (e) => {
    e.preventDefault();
    window.open("mailto:dikshitkumarn@gmail.com");
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
          <h1>Hello, I am Dikshitkumar</h1>
          <h4>Front End Developer</h4>
          <div className="social-media">
            <a href={social.linkedin.link} target="_blank">
              <img src={social.linkedin.image} alt="linkedin" />
            </a>
            <a href={social.github.link} target="_blank">
              <img src={social.github.image} alt="github" />
            </a>
            <a href={social.resume.link} target="_blank">
              <img src={social.resume.image} alt="resume" />
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
              <li>
                I develop innovative websites with attractive designs and great
                user experience.
              </li>
              <li>
                For past <strong>1.8 years</strong>, I have been part of
                contract based projects, office work and as a freelancer.
              </li>
              <li>Still practicing to perfectly master my skills.</li>
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
                  link={skills.react.link}
                  image={skills.react.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Next JS"
                  link={skills.next.link}
                  image={skills.next.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Redux JS"
                  link={skills.redux.link}
                  image={skills.redux.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="React query"
                  link={skills.reactQuery.link}
                  image={skills.reactQuery.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="HTML"
                  link={skills.html.link}
                  image={skills.html.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="CSS"
                  link={skills.css.link}
                  image={skills.css.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="SCSS"
                  link={skills.scss.link}
                  image={skills.scss.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Git / Github"
                  link={skills.git.link}
                  image={skills.git.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Material UI"
                  link={skills.mui.link}
                  image={skills.mui.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Reactstrap"
                  link={skills.reactstrap.link}
                  image={skills.reactstrap.image}
                />
              </Col>
              <Col sm="12" md="4">
                <Skill
                  name="Bootstrap"
                  link={skills.bootstrap.link}
                  image={skills.bootstrap.image}
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
              image={programingLanguage.javascript.image}
              link={programingLanguage.javascript.link}
            />
            <ProgramingLanguageCard
              name="Typescript"
              image={programingLanguage.typescript.image}
              link={programingLanguage.typescript.link}
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
            {projects.map((el, index) => (
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
            <p>dikshitkumarn@gmail.com</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Contact Number</h4>
            <p>9600714338</p>
          </Col>
          <Col lg="4" md="12" sm="12" xs="12">
            <h4>Social Links</h4>
            <div className="contact-social-media">
              <a href={social.linkedin.link} target="_blank">
                <img src={social.linkedin.image} alt="linkedin" />
              </a>
              <a href={social.github.link} target="_blank">
                <img src={social.github.image} alt="github" />
              </a>
              <a href={social.resume.link} target="_blank">
                <img src={social.resume.image} alt="resume" />
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
