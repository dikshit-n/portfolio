import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import InternIcon from "../../../assets/img/internship.png";
import FreelanceIcon from "../../../assets/img/freelance.png";
import ContractIcon from "../../../assets/img/contract.png";
import FulltimeIcon from "../../../assets/img/fulltime.png";
import SeniorDeveloperIcon from "../../../assets/img/senior-developer.png";
import TimeIcon from "../../../assets/img/time.png";

const Experience = (props) => {
  const cardStyle = {
    textAlign: "left",
    border: "1px solid lightgrey",
  };

  const cardStyleLeft = {
    ...cardStyle,
    boxShadow: "10px 10px rgb(238, 237, 237)",
  };
  const cardStyleRight = {
    ...cardStyle,
    boxShadow: "-10px 10px rgb(238, 237, 237)",
  };
  const iconStyle = { backgroundColor: "white" };

  const imageStyle = {
    width: 35,
    height: 35,
  };
  const iconContainerStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <VerticalTimeline lineColor="#3178C6">
      <VerticalTimelineElement
        iconStyle={iconStyle}
        contentStyle={{ ...cardStyleLeft, borderTop: "3px solid #007BFF" }}
        icon={
          <div style={iconContainerStyle}>
            <img src={InternIcon} alt="Intern" style={imageStyle} />
          </div>
        }
        date="June 2020 - August 2020"
      >
        <h4>Web Developer Intern</h4>
        <h6>Nanban Tech ventures - Coimbatore, Tamilnadu</h6>
        <ul>
          <li>JavaScript, HTML and CSS.</li>
          <li>Learned React JS.</li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={iconStyle}
        icon={
          <div style={iconContainerStyle}>
            <img src={FreelanceIcon} alt="Freelance" style={imageStyle} />
          </div>
        }
        contentStyle={{ ...cardStyleRight, borderTop: "3px solid #05DA73" }}
        date="July 2020 - August 2020"
      >
        <h4>Freelance Web Developer</h4>
        <h6>EmergeAbility</h6>
        <ul>
          <li>
            Developed website with <strong>React JS</strong>.
          </li>
          <li>
            Improved <strong>CSS</strong> animation skills.
          </li>
          <li>
            Demo:{" "}
            <a href="http://emergeability.org/">http://emergeability.org/</a>
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={iconStyle}
        contentStyle={{ ...cardStyleLeft, borderTop: "3px solid #F7E100" }}
        icon={
          <div style={iconContainerStyle}>
            <img src={ContractIcon} alt="Contract" style={imageStyle} />
          </div>
        }
        date="June 2020 - June 2021"
      >
        <h4>Front-end Developer (Contract)</h4>
        <h6>Leora Solutions LLP - Palakkad, Kerala</h6>
        <ul>
          <li>
            Completed <strong>5 projects</strong> in provided time.
          </li>
          <li>
            Improved my skills in <strong>React JS</strong> with good folder
            structure and got a good hold of <strong>Redux JS</strong>.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={iconStyle}
        contentStyle={{ ...cardStyleRight, borderTop: "3px solid #E63C2E" }}
        date="July 2021 - March 2021"
        icon={
          <div style={iconContainerStyle}>
            <img src={FulltimeIcon} alt="Fulltime" style={imageStyle} />
          </div>
        }
      >
        <h4>Front-end Developer (Fulltime)</h4>
        <h6>Leora Solutions LLP - Palakkad, Kerala</h6>
        <ul>
          <li>
            <strong>Next JS (Typescript)</strong>developer.
          </li>
          <li>
            Maintaining my old <strong>React JS</strong> projects.
          </li>
          <li>
            Upgraded my skills to use <strong>Material UI</strong>.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={iconStyle}
        contentStyle={{ ...cardStyleLeft, borderTop: "3px solid black" }}
        date="April 2022 - Present"
        icon={
          <div style={iconContainerStyle}>
            <img src={SeniorDeveloperIcon} alt="Fulltime" style={imageStyle} />
          </div>
        }
      >
        <h4>Senior Front-end Developer (Fulltime)</h4>
        <h6>AVEON Info tech - Coimbatore</h6>
        <ul>
          <li>
            <strong>React JS (Typescript)</strong> developer.
          </li>
          <li>
            Scratched the surface of <strong>Node JS, Microservices, React Native</strong>.
          </li>
          <li>
            Upgraded skills to use <strong>Fluent UI</strong> with React.
          </li>
          <li>
            Hands on experience on working with <strong>Agile methodology</strong>.
          </li>
        </ul>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={iconStyle}
        icon={
          <div style={iconContainerStyle}>
            <img src={TimeIcon} alt="Time" style={imageStyle} />
          </div>
        }
      />
    </VerticalTimeline>
  );
};

export default Experience;
