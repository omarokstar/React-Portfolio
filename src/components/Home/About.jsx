import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Omar Khaled Salah</span> and I'm from <span className="yellow">Egypt</span>.
              <br />
              <br />
              I'm a Full-Stack Web Developer passionate about building scalable and user-friendly applications using technologies like 
              <b className="yellow"> Laravel, Django, Node.js, Angular, React, and Vue.js.</b>
              <br />
              <br />
              I enjoy solving problems, learning new technologies, and working on real-world projects that create impact.
              <br />
              <br />
              I have strong experience in
              <b className="yellow"> RESTful APIs, Authentication Systems, MongoDB, MySQL,</b> and modern frontend frameworks.
              <br />
              <br />
              I'm always exploring new trends in web development and contributing to
              <i>
                <b className="yellow"> Open Source Projects</b>
              </i>{" "}
              when I can.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect</span> with me on these platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/omarokstar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/omar-khaled-20210317b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
