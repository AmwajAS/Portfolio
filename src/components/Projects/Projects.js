import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import elevProject from "../../Assets/Projects/elevProject.jpg";
import sqlll from "../../Assets/Projects/sqlll.png";
import hackathon from "../../Assets/Projects/hack.png";
import plot from "../../Assets/Projects/plot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elevProject}
              isBlog={false}
              title="Elevation Bikes"
              description="As part of an intensive Data Analyst Bootcamp, this project focused on analyzing a bicycle company's dataset. The goal was to answer strategic business questions using data-driven decision-making (DDDM), including analyzing customer demographics and purchasing habits to increase sales."
              ghLink="https://app.powerbi.com/view?r=eyJrIjoiODlhNTIzYjEtODljZi00ZmNmLWFlNjUtZGI0NmUyYjI0N2Y3IiwidCI6IjE2YzFmYzM2LWNmNWQtNDhlYS1iNzFmLWYzMjc3MzNjNzQ3MCJ9&pageName=a9676bfa6983972c51b0"
              demoLink="https://app.powerbi.com/view?r=eyJrIjoiODlhNTIzYjEtODljZi00ZmNmLWFlNjUtZGI0NmUyYjI0N2Y3IiwidCI6IjE2YzFmYzM2LWNmNWQtNDhlYS1iNzFmLWYzMjc3MzNjNzQ3MCJ9&pageName=a9676bfa6983972c51b0"
              demoButtonText="View Report"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqlll}
              isBlog={false}
              title="SQL Challenges"
              description="Weekly SQL Challenges: Engaged in weekly SQL challenges to sharpen my skills in database querying, data manipulation, and extracting meaningful insights. These challenges helped in developing efficient solutions for real-world business scenarios." 
              ghLink="https://github.com/AmwajAS/SQL"
              demoLink="https://blogs.soumya-jit.tech/"
              buttonText="GitHub"
              // demoButtonText="GitHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={hackathon}
            isBlog={false}
            title="Predict-Diabetes-Complications"
            description="Hackathon: predict diabetes complications in the early stage done by building a model to predict diabetes complications early, up to 7 to 10 years in advance. We utilized 
GradientBoosting, Adaboost, KNNeighbors, Decision Tree, and RandomForest algorithms." 
            ghLink="https://github.com/AmwajAS/predict-diabetes-complications"
            demoLink="https://github.com/AmwajAS/predict-diabetes-complications"
            buttonText="GitHub"
            // demoButtonText="GitHub"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={plot}
            isBlog={false}
            title="Amazon Sales Analysis"
            description="Exploring the Amazon Sales Dataset follows these steps: first, clean and prepare the data for accuracy. summarize it using descriptive statistics. visualize patterns and relationships through charts. Detect outliers, and divide the data into groups for deeper insights. Finally, summarize the key findings." 
            ghLink="https://github.com/AmwajAS/AmazonSalesAnalysis"
            demoLink="https://github.com/AmwajAS/AmazonSalesAnalysis"
            buttonText="GitHub"
            // demoButtonText="GitHub"             
            />
          </Col>
          { /*<Col md={4} className="project-card"> 
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
