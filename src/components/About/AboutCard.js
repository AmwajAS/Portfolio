import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Amwaj Abu Salah </span>
            :D 
            <br />
            I am passionate about data analysis and development, 
            with a focus on turning complex data into actionable insights.
            <br />
            I hold a degree in <span className="purple">Information Systems </span>from the University of Haifa, and I am currently
            <span className="purple"> seeking a position in the Data Field.</span>
            <br />
            <br />
           </p>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Data is just numbers until we unlock its true value through insights."{" "}
          </p>
          <footer className="blockquote-footer"> Amwaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
