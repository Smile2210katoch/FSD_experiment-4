import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container
      fluid
      className="home-page"
      style={{ padding: "4rem", minHeight: "90vh" }}
    >
      <Row className="align-items-center">
        <Col md={6} style={{ padding: "2rem" }}>
          <h1>
            Hi, I'm <span style={{ color: "#0d6efd" }}>Smile Katoch</span>
          </h1>
          <h3 className="mb-3">A Passionate Web Developer</h3>
          <p>
            I specialize in creating responsive and dynamic web applications
            using React, JavaScript, HTML, CSS, and Bootstrap. I love building
            projects that combine clean design with efficient functionality.
          </p>
          <div className="mt-3">
            <Button
              as={Link}
              to="/about"
              variant="primary"
              className="me-2"
            >
              About Me
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="outline-primary"
            >
              Contact Me
            </Button>
          </div>
        </Col>

        <Col md={6} className="text-center">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{ maxWidth: "300px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;