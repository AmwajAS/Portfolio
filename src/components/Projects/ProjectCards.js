import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import reportLogo from "../../Assets/Projects/report.png";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Button container to ensure consistent alignment */}
        <div className="button-container" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {/* Render GitHub button only if buttonText is provided */}
          {props.buttonText && props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px", marginTop:"20px" }}>
              <BsGithub /> &nbsp;
              {props.buttonText} {/* Custom button text for GitHub or PowerBI */}
            </Button>
          )}

          {/* Render Demo button only if demoLink and demoButtonText are provided */}
          {props.demoLink && props.demoButtonText && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              {props.demoButtonText === "View Report" && (
                <img 
                  src={reportLogo} 
                  alt="report logo" 
                  style={{ width: "20px", marginRight: "8px" }}
                />
              )}
              {props.demoButtonText} {/* Custom text for Demo button */}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
