import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard({ title, subtitle, period, location, description }) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        borderRadius: "15px",
        border: "none",
        boxShadow: hover
          ? "0 4px 4px 5px rgba(48, 112, 219, 0.561)" // Elevated shadow on hover
          : "0 4px 5px 3px rgba(48, 112, 219, 0.459)", // Normal shadow
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hover ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card.Body>
        <Card.Title
          style={{
            color: "#b8b8d1",
            fontSize: "1.2em",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {period}
        </Card.Title>
        <Card.Title
          style={{
            color: "#ffffff",
            fontSize: "1.3em",
            fontWeight: "bold",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle
          style={{
            color: "#b8b8d1",
            fontSize: "1em",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {subtitle} | {location}
        </Card.Subtitle>
        <ul style={{ color: "#ffffff", fontSize: "1em", paddingLeft: "20px" }}>
          {description.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
