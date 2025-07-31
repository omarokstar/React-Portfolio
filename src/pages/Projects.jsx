import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ecommerce from "../assets/projects/ecommerce.png";
import jobboard from "../assets/projects/jobboard.png";
import medical from "../assets/projects/medical.png";
import pharmacy from "../assets/projects/pharmacy.png";

const Projects = () => {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few featured projects demonstrating real-world software solutions.
        </p>

      <Row className="justify-content-center">
  <Col xs={12} md={6} className="project-card mb-4">
    <ProjectCard
      imgPath={ecommerce}
      title="E-Commerce App"
      description="Full-stack eCommerce app built with Angular and Express. Features user authentication, cart management, admin panel, and secure payments."
      frontRepo="https://github.com/mashady/angular-ecommerce"
      backRepo="https://github.com/mashady/node-js-ecommerce"
      demoLink="https://drive.google.com/file/d/1A_Gxu2o4tW-r8n_ksd2kciGxnjpfQEQJ/view?usp=sharing"
    />
  </Col>

  <Col xs={12} md={6} className="project-card mb-4">
    <ProjectCard
      imgPath={jobboard}
      title="Job Board"
      description="Job portal using Laravel and Vue. Includes job filtering, employer & candidate workflows, and dynamic listings."
      frontRepo="https://github.com/Esraa-mohamed1/job-board-laravel-vue"
      backRepo="https://github.com/omarokstar/job-board-laravel-api"
      demoLink="https://drive.google.com/file/d/1qIukp_QrRVxhqArbO8SzL9RMg20WrP3T/view?usp=sharing" 
    />
  </Col>

  <Col xs={12} md={6} className="project-card mb-4">
    <ProjectCard
      imgPath={medical}
      title="Medical Portal"
      description="A Django and React-based system to manage appointments, doctor profiles, and departments with secure user roles."
      frontRepo="https://github.com/omarokstar/medical-portal-react"
      backRepo="https://github.com/omarokstar/medical-portal-django"
      demoLink="https://drive.google.com/file/d/1Fxw4afFRcChXErya5rcaF-Un6J0hI-U5/view?usp=sharing"

    />
  </Col>

  <Col xs={12} md={6} className="project-card mb-4">
    <ProjectCard
      imgPath={pharmacy}
      title="Drug Finder"
      description="Search for nearby pharmacies and available medicines. Features geolocation, nurse request, and real-time availability."
      frontRepo="https://github.com/omarokstar/drug-finder"
      backRepo="https://github.com/omarokstar/drug-finder-backend"
      demoLink="https://drug-finderr.netlify.app/"
    />
  </Col>
</Row>

      </Container>
    </Container>  
  );
};

export default Projects;
