import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaCodeBranch } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project thumbnail" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.frontRepo && (
          <Button variant="primary" href={props.frontRepo} target="_blank" className="m-1">
            <BsGithub /> &nbsp; Frontend
          </Button>
        )}

        {props.backRepo && (
          <Button variant="dark" href={props.backRepo} target="_blank" className="m-1">
            <FaCodeBranch /> &nbsp; Backend
          </Button>
        )}

        {props.demoLink && (
          <Button variant="success" href={props.demoLink} target="_blank" className="m-1">
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
