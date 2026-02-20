import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container
      fluid
      className="about-section"
      style={{ padding: "4rem 2rem", minHeight: "90vh" }}
    >
      <h2 className="text-center mb-4">About Me</h2>

      <Row className="align-items-center">
        <Col md={4} className="text-center mb-3">
          <Image
            src="https://via.placeholder.com/250"
            roundedCircle
            fluid
            alt="Profile"
          />
        </Col>

        <Col md={8}>
          <p>
            Hi! I'm <strong>Smile Katoch</strong>, a passionate web developer
            skilled in building responsive and interactive web applications.
            I enjoy working with React, JavaScript, HTML, CSS, and Bootstrap.
          </p>

          <p>
            I love learning new technologies and applying them in projects
            that solve real-world problems. My goal is to create websites
            and applications that are not only functional but also visually appealing.
          </p>

          <p>
            <strong>Hobbies:</strong> Coding, Reading, Traveling, Gym
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;