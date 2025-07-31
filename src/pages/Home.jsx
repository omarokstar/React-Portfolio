import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import pic3 from '../assets/pic3.jpg'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import 'animate.css';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Omar Khaled</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={3} style={{ paddingBottom: 20 }}>
              
       <div class="slider-item portfolio-picture">
        <img src={pic3} alt='' className="portfolio-square" />
      </div>


            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home