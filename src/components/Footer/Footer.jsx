import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          
            <Col xs={12} md={6} className="mb-3 mb-md-0">
            <div>
              <span className="d-block">© {year} Omar Khaled Salah</span>
              <small>All rights reserved.</small>
            </div>
          </Col>
          <Col md="6" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/omarokstar"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="omar-okstar"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/omar-khaled-20210317b"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="omar-okstar"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer