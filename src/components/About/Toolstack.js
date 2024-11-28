import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiFigma,
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa";

function Toolstack() {
  const tools = [
    { name: "VS Code", icon: <SiVisualstudiocode style={{ color: "#0078D4" }} /> },
    { name: "Android Studio", icon: <FaAndroid style={{ color: "#3DDC84" }} /> },
    { name: "Visual Studio", icon: <SiVisualstudio style={{ color: "#5C2D91" }} /> },
    { name: "Postman", icon: <SiPostman style={{ color: "#FF6A00" }} /> },
    { name: "Figma", icon: <SiFigma style={{ color: "#F24E1E" }} /> },
  ];

  return (
    <Row className="justify-content-center" style={{ padding: "30px 0" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }}>
          <HoverCard tool={tool} />
        </Col>
      ))}
    </Row>
  );
}

function HoverCard({ tool }) {
  const [hover, setHover] = useState(false);

  return (
    <Card
      style={{
        background: "#1a1a2e",
        border: "none",
        borderRadius: "15px",
        padding: "20px",
        textAlign: "center",
        boxShadow: hover
          ? "0 4px 4px 5px rgba(129, 72, 144, 0.561)" // Elevated shadow on hover
          : "0 4px 5px 3px rgba(119, 53, 136, 0.459)", // Normal shadow
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition effect
        transform: hover ? "scale(1.05)" : "scale(1)", // Slight zoom effect on hover
      }}
      onMouseEnter={() => setHover(true)} // Set hover state to true
      onMouseLeave={() => setHover(false)} // Reset hover state
    >
      <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{tool.icon}</div>
      <Card.Body>
        <Card.Title style={{ color: "#ffffff", fontSize: "1.2rem" }}>{tool.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Toolstack;
