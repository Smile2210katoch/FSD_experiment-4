import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Services() {
  return (
    <Container fluid className="services-section">
      <h2 className="services-heading text-center">
        🚀 My Work & Research
      </h2>

      <Card className="services-card">
        <Card.Body>
          <Row>

            {/* PROJECTS */}
            <Col md={6} xs={12} className="section">
              <h3 className="section-title">
                🔧 Projects
                <Badge bg="primary" className="ms-3">Technical</Badge>
              </h3>

              <div className="item">
                <h5>Sonar System using Arduino</h5>
                <p>
                  Built a sonar-based detection system using Arduino and
                  ultrasonic sensors for real-time obstacle monitoring.
                </p>
              </div>

              <div className="item">
                <h5>File Encryption System</h5>
                <p>
                  Developed a secure encryption system using cryptographic
                  techniques for secure storage and transfer.
                </p>
              </div>
            </Col>

            {/* RESEARCH */}
            <Col md={6} xs={12} className="section">
              <h3 className="section-title">
                📄 Research Work
                <Badge bg="success" className="ms-3">Academic</Badge>
              </h3>

              <div className="item">
                <h5>Credit Card Fraud Detection</h5>
                <p>
                  Applied machine learning and statistical techniques to
                  detect fraudulent transactions.
                </p>
              </div>

              <div className="item">
                <h5>Statistical + ML Integration</h5>
                <p>
                  Combined statistical modeling with machine learning to
                  improve prediction accuracy and explainability.
                </p>
              </div>
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Services;