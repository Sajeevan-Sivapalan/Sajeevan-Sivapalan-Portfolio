import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function EducationCard(props) {
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
          ? "0px 8px 30px rgba(100, 149, 237, 0.7)" // Blue shadow on hover
          : "0px 4px 20px rgba(0, 0, 0, 0.5)", // Normal shadow
        height: "200px", // Fixed height
        width: "100%", // Ensures consistent width in the column layout
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
        transform: hover ? "scale(1.05)" : "scale(1)", // Scale up on hover
      }}
      onMouseEnter={() => setHover(true)} // Set hover state to true
      onMouseLeave={() => setHover(false)} // Reset hover state
    >
      <Card.Body>
        <Card.Title
          style={{
            color: "#b8b8d1",
            fontSize: "1.2em",
            fontWeight: "bold",
            marginBottom: "10px",
            textAlign: "center", // Center align title
          }}
        >
          {props.period}
        </Card.Title>
        <Card.Title
          className="purple"
          style={{
            fontSize: "1.3em",
            fontWeight: "bold",
            marginBottom: "15px",
            textAlign: "center", // Center align subtitle
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            color: "#ffffff",
            fontSize: "1em",
            textAlign: "center", // Center align description
          }}
        >
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
