import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, skills, githubLink, image }) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      className="project-card-view"
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        borderRadius: "15px",
        border: "none",
        boxShadow: hover
          ? "0px 8px 30px rgba(0, 0, 0, 0.7)"
          : "0px 4px 20px rgba(0, 0, 0, 0.5)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={`${title} thumbnail`}
        style={{
          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          maxHeight: "150px",
          objectFit: "cover",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title
          className="purple"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            fontSize: "0.9rem",
            color: "#b8b8d1",
            flexGrow: 1,
            marginBottom: "15px",
          }}
        >
          {description}
        </Card.Text>
        <Card.Text
          style={{
            fontSize: "0.8rem",
            color: "#ffffff",
            marginBottom: "15px",
          }}
        >
          <strong>Skills:</strong> {skills.join(" · ")}
        </Card.Text>
        <Button
          href={githubLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#6495ED",
            borderColor: "#6495ED",
            fontSize: "0.9rem",
          }}
          disabled={!githubLink}
        >
          <BsGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
