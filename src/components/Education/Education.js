import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";

function Education() {
  const educationData = [
    {
      title: "SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY",
      subtitle: "BSc (Hons) in Information Technology Specializing in Software Engineering",
      period: "2021 - Present",
      location: "Malabe",
      description: "Studying advanced software engineering concepts with hands-on projects.",
    },
    {
      title: "S. THOMAS' COLLEGE",
      subtitle: "G.C.E A/L – Physical Science Stream",
      period: "2018 - 2020",
      location: "Mount-Lavinia",
      description: "Specialized in Combined Mathematics, Physics, and ICT for A/Ls.",
    },
    {
      title: "S. THOMAS' COLLEGE",
      subtitle: "G.C.E O/L",
      period: "2012 - 2020",
      location: "Mount-Lavinia",
      description: "Achieved academic excellence with distinctions in core subjects.",
    },
  ];

  return (
    <Container
      fluid
      className="education-section"
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        padding: "160px 0 50px",
      }}
    >
      <Container>
        <h1
          className="project-heading text-center"
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          <strong className="purple">EDUCATION</strong>
        </h1>
        <p
          style={{
            color: "#b8b8d1",
            textAlign: "center",
            fontSize: "1.2em",
            marginBottom: "40px",
          }}
        >
          My academic journey at a glance.
        </p>
        <Row className="justify-content-center align-items-stretch">
          {educationData.map((edu, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              key={index}
              className="d-flex align-items-stretch"
              style={{ marginBottom: "20px" }}
            >
              <EducationCard
                title={edu.title}
                period={edu.period}
                description={`${edu.subtitle} | ${edu.location}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
