import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myPhoto from "../../Assets/CartoonizeEffect.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate about Transforming &nbsp;
              <i>
                <b className="purple">Raw Data </b> into 
                {" "}
                <b className="purple">
                Actionable Insights.
                </b>
              </i>
              <br />
              <br />
              I am a recent &nbsp;
              <i>
                <b className="purple">Information Systems </b> and 
                {" "}
                <b className="purple">
                Data Analysis Bootcamp
                </b> Graduate.
              </i>
              <br />
              <br />
              Proficient in  &nbsp;
              <i>
                <b className="purple"> Python, SQL, Excel, Data Modeling and Data Visualization.</b>  
              </i>
              <br />
              <br />
              Seeking an Entry-level position.  &nbsp;

              <br />

    
            </p>
          </Col>
          <Col md={4} className="myAvtar">
  <Tilt>
    <img src={myPhoto} className="img-fluid circular-img" alt="avatar" />
  </Tilt>
</Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmwajAS"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amwajas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
}
export default Home2;
