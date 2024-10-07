// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
      
//     </Row>
//   );
// }

// export default Toolstack;


import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiPython,
  SiPhp,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJupyter,
  SiIntellijidea,
  SiEclipseide,
  SiAndroidstudio,
  SiGit,
  SiDocker
} from "react-icons/si";
import { DiJava } from "react-icons/di";

function Toolstack() {
  return (
    <div>
      {/* Programming Languages */}
      <h3 className="stack-category">Programming Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython className="tech-icon" />
          <h5 className="icon-name">Python</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava className="tech-icon" />
          <h5 className="icon-name">Java</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiC className="tech-icon" />
          <h5 className="icon-name">C</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp className="tech-icon" />
          <h5 className="icon-name">PHP</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript className="tech-icon" />
          <h5 className="icon-name">JavaScript (JS)</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 className="tech-icon" />
          <h5 className="icon-name">HTML</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 className="tech-icon" />
          <h5 className="icon-name">CSS</h5>
        </Col>
      </Row>

      {/* IDEs & Tools */}
      <h3 className="stack-category">IDEs & Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode className="tech-icon" />
          <h5 className="icon-name">VS Code</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiEclipseide className="tech-icon" />
          <h5 className="icon-name">Eclipse</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter className="tech-icon" />
          <h5 className="icon-name">Jupyter</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiIntellijidea className="tech-icon" />
          <h5 className="icon-name">IntelliJ</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio className="tech-icon" />
          <h5 className="icon-name">Android Studio</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGit className="tech-icon" />
          <h5 className="icon-name">Git</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
           <SiDocker className="tech-icon" />
            <h5 className="icon-name">Docker</h5>
        </Col>
      </Row>

      {/* Additional Tools */}
      {/* <h3 className="stack-category">Additional Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiMacos className="tech-icon" />
          <h5 className="icon-name">macOS</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode className="tech-icon" />
          <h5 className="icon-name">VS Code</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman className="tech-icon" />
          <h5 className="icon-name">Postman</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack className="tech-icon" />
          <h5 className="icon-name">Slack</h5>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel className="tech-icon" />
          <h5 className="icon-name">Vercel</h5>
        </Col>
      </Row> */}
    </div>
  );
}

export default Toolstack;
