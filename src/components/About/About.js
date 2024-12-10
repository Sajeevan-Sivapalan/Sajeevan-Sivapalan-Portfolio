import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ background: "#1a1a2e", color: "#ffffff" }}>
      <Container>
        <Row className="justify-content-center" style={{ padding: "50px 20px" }} data-aos="fade-up">
          <Col xs={12} md={10} className="text-center">
            <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>
              Know Who <span className="purple">I'M</span>
            </h1>
            <p style={{ fontSize: "1.2em", margin: "10px 0 30px", color: "#b8b8d1" }} data-aos="fade-right">
              Discover my journey, passions, and the skills I bring to the table.
            </p>
            <Aboutcard />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h2 className="project-heading text-center" style={{ margin: "40px 0", fontWeight: "bold" }}>
              My <span className="purple">Professional Skillset</span>
            </h2>
          </Col>
        </Row>
        <Techstack />
        <Row>
          <Col xs={12}>
            <h2 className="project-heading text-center" style={{ margin: "40px 0", fontWeight: "bold" }}>
              Tools <span className="purple">I Use</span>
            </h2>
          </Col>
        </Row>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
