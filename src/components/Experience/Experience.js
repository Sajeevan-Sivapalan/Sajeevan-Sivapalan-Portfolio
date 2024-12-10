import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experienceData = [
    {
      title: "SENZMATE IOT INTELLIGENCE",
      subtitle: "Associate Software Developer",
      period: "Jan 2024 – July 2024",
      location: "Colombo, SL",
      description: [
        "Developed and maintained backend systems with Spring Boot and MQTT for real-time data handling.",
        "Integrated Mosquitto MQTT authentication using C with MongoDB.",
        "Configured Elasticsearch, Kibana, Kafka, and Logstash on Microsoft Azure for analytics.",
        "Debugged failed test cases and ensured successful execution.",
      ],
    },
    {
      title: "SENZMATE IOT INTELLIGENCE",
      subtitle: "Software Engineering Intern",
      period: "June 2023 – December 2023",
      location: "Colombo, SL",
      description: [
        "Set up firewalls, MQTT, Kafka, and deployed applications on Microsoft Azure VM.",
        "Developed mock devices with Spring Boot for system testing.",
        "Managed Hadoop clusters and integrated Hive on Azure VM.",
        "Implemented APIs with MongoDB and MQTT integration.",
      ],
    },
  ];

  return (
    <Container
      fluid
      className="experience-section"
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
          <strong className="purple">EXPERIENCE</strong>
        </h1>
        <p
          style={{
            color: "#b8b8d1",
            textAlign: "center",
            fontSize: "1.2em",
            marginBottom: "40px",
          }}
        >
          My professional journey at a glance.
        </p>
        <Row className="justify-content-center align-items-stretch">
          {experienceData.map((exp, index) => (
            <Col
              xs={12}
              sm={6}
              md={6}
              key={index}
              className="d-flex align-items-stretch"
              style={{ marginBottom: "20px" }}
              data-aos="fade-up"
            >
              <ExperienceCard
                title={exp.title}
                subtitle={exp.subtitle}
                period={exp.period}
                location={exp.location}
                description={exp.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
