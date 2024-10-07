import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import LottieAnimation from "./LottieAnimation";
import Toolstack from "./Toolstack";
import DataToolStack from "./DataToolstack";
function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
            <LottieAnimation /> {/* Use the Lottie component here */}
          </Col>
          
        </Row>
        <h1 className="project-heading">
          Professional Data <strong className="purple">Skillset </strong>
        </h1>
        <DataToolStack />
        &nbsp;
        <h1 className="project-heading">
          <strong className="purple">Extra</strong> Skills, cuz, why not?
        </h1>
        <Toolstack />
        {/* <DataToolStack /> */}

      </Container>
    </Container>
  );
}

export default About;