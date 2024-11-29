import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, skills, githubLink }) {
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
          ? "0px 8px 30px rgba(0, 0, 0, 0.7)" // Elevated shadow on hover
          : "0px 4px 20px rgba(0, 0, 0, 0.5)", // Normal shadow
        height: "100%", // Ensures uniform card height
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition effect
        transform: hover ? "scale(1.05)" : "scale(1)", // Scale effect on hover
      }}
      onMouseEnter={() => setHover(true)} // Set hover state to true
      onMouseLeave={() => setHover(false)} // Reset hover state
    >
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
            flexGrow: 1, // Ensures text takes up space
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
