import React, { Fragment } from "react";
import { Col, Card } from "reactstrap";
import './Projects.css'

const Projects = (props) => {

    const goto = (e, link) => {

        window.open(link, '_blank');
    }

    return(
        <Fragment>
            {props.projects.map(project => (
                <Col key={project.link} lg="4" md="4" sm="12" onClick={(event) => goto(event, project.link)}>
                    <Card body className='Project'>
                        <h4 className="bold"> {project.name} </h4>
                        <p>{project.link}</p>
                    </Card>
                </Col>
            ))}
        </Fragment>
    )
  ;
};

export default Projects