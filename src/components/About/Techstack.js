// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <CgCPlusPlus />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;


import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTableau, SiMysql, SiSnowflake, SiPython, SiPostgresql, SiDocker, SiPowerbi } from "react-icons/si";
import { FaPowerOff } from "react-icons/fa"; // Example of another icon, replace with the appropriate icon for Power BI

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiPowerbi  className="tech-icon" />
          <h5 className="icon-name">Power BI</h5>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiTableau className="tech-icon" />
          <h5 className="icon-name">Tableau</h5>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiMysql className="tech-icon" />
          <h5 className="icon-name">MySQL</h5>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiSnowflake className="tech-icon" />
          <h5 className="icon-name">Snowflake</h5>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiPython className="tech-icon" />
          <h5 className="icon-name">Python</h5>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiPostgresql className="tech-icon" />
          <h5 className="icon-name">PostgreSQL</h5>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="icon-wrapper">
          <SiDocker className="tech-icon" />
          <h5 className="icon-name">Docker</h5>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
