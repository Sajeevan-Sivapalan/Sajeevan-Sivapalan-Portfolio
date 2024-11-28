import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const [hover, setHover] = useState(false);

  return (
    <Card
      style={{
        background: "linear-gradient(145deg, #212244, #1a1a2e)",
        border: "none",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: hover
          ? "0 4px 4px 5px rgba(129, 72, 144, 0.561)" // Elevated shadow on hover
          : "0 4px 5px 3px rgba(119, 53, 136, 0.459)", // Normal shadow
        color: "#ffffff",
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transitions
        transform: hover ? "scale(1.05)" : "scale(1)", // Slight zoom effect on hover
      }}
      onMouseEnter={() => setHover(true)} // Set hover state to true
      onMouseLeave={() => setHover(false)} // Reset hover state
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ fontSize: "1.1em", textAlign: "justify", marginBottom: "15px" }}>
            Hello Everyone! I am <span className="purple">Sajeevan Sivapalan</span> from{" "}
            <span className="purple">Sri Lanka.</span>
            <br />
            <br />
            I am a dedicated and innovative final-year Software Engineering undergraduate at the{" "}
            <span className="purple">Sri Lanka Institute of Information Technology (SLIIT)</span>.
            Throughout my academic journey, I have honed my skills in software design, development, and engineering principles, always striving to deliver impactful and efficient solutions.
            <br />
            <br />
            My expertise lies in <span className="purple">full-stack development</span>,{" "}
            <span className="purple">mobile app development</span>, and{" "}
            <span className="purple">cloud technologies</span>. I am passionate about using these
            skills to develop user-friendly applications that solve real-world problems and improve
            everyday experiences.
            <br />
            <br />
            I am driven by a strong commitment to lifelong learning and problem-solving, and I aim to
            contribute to innovative projects that make a meaningful impact on society.
          </p>
        </blockquote>
      </Card.Body>

    </Card>
  );
}

export default AboutCard;
