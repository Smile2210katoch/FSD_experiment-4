import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Contact() {
  return (
    <Container
      fluid
      className="contact-section"
      style={{ minHeight: "90vh", padding: "4rem" }}
    >
      <h2 className="text-center contact-heading mb-4">Contact Me</h2>

      <Row className="justify-content-center">
        <Col lg={6} md={8} sm={10} xs={12}>
          <Card className="contact-card shadow">
            <Card.Body>

              <div className="contact-item mb-3">
                <strong>Mobile:</strong>
                <a href="tel:+917986335743"> 7986335743</a>
              </div>

              <div className="contact-item mb-3">
                <strong>Email:</strong>
                <a href="mailto:cuchd-23BAI70051@cuchd.in">
                  {" "}cuchd-23BAI70051@cuchd.in
                </a>
              </div>

              <div className="contact-item">
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/smilekatoch2210katoch"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}github.com/smilekatoch2210katoch
                </a>
              </div>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;