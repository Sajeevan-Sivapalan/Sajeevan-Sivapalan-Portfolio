import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiJqueryLogo,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiCsharp,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiKotlin,
  SiFlutter,
  SiDocker,
  SiSpringboot,
  SiRedux,
  SiMarkdown,
  SiMui, // Correct Material-UI icon
  SiMicrosoftazure,
  SiExpress,
  SiSqlite,
} from "react-icons/si";
import { FaNpm, FaGitAlt, FaGithub, FaAndroid, FaDatabase } from "react-icons/fa";

function Techstack() {
  const techStack = [
    { name: "C++", icon: <DiPython style={{ color: "#00599C" }} /> },
    { name: "JavaScript", icon: <DiJava style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <DiReact style={{ color: "#61DAFB" }} /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
    { name: "Node.js", icon: <DiNodejsSmall style={{ color: "#339933" }} /> },
    { name: "npm", icon: <FaNpm style={{ color: "#CB3837" }} /> },
    { name: "Redux", icon: <SiRedux style={{ color: "#764ABC" }} /> },
    { name: "Express", icon: <SiExpress style={{ color: "#000000" }} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss style={{ color: "#38BDF8" }} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{ color: "#563D7C" }} /> },
    { name: "Material UI", icon: <SiMui style={{ color: "#007FFF" }} /> },
    { name: "Python", icon: <DiPython style={{ color: "#3776AB" }} /> },
    { name: "Markdown", icon: <SiMarkdown style={{ color: "#000000" }} /> },
    { name: "HTML5", icon: <DiHtml5 style={{ color: "#E34F26" }} /> },
    { name: "CSS3", icon: <DiCss3 style={{ color: "#1572B6" }} /> },
    { name: "jQuery", icon: <DiJqueryLogo style={{ color: "#0769AD" }} /> },
    { name: "Git", icon: <DiGit style={{ color: "#F05032" }} /> },
    { name: "GitHub", icon: <FaGithub style={{ color: "#ffffff" }} /> },
    { name: "VS Code", icon: <FaGitAlt style={{ color: "#0078D4" }} /> },
    { name: "Visual Studio", icon: <SiCsharp style={{ color: "#5C2D91" }} /> },
    { name: "Android Studio", icon: <FaAndroid style={{ color: "#3DDC84" }} /> },
    { name: "Flutter", icon: <SiFlutter style={{ color: "#02569B" }} /> },
    { name: "Java", icon: <DiJava style={{ color: "#F89820" }} /> },
    { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} /> },
    { name: "ASP.NET", icon: <SiCsharp style={{ color: "#512BD4" }} /> },
    { name: "Azure", icon: <SiMicrosoftazure style={{ color: "#0089D6" }} /> },
    { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} /> },
    { name: "IoT", icon: <FaDatabase style={{ color: "#00C4FF" }} /> },
    { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> },
    { name: "SQLite", icon: <SiSqlite style={{ color: "#003B57" }} /> },
    { name: "SQL Server", icon: <FaDatabase style={{ color: "#CC2927" }} /> },
    { name: "Kotlin", icon: <SiKotlin style={{ color: "#7F52FF" }} /> },
    { name: "PHP", icon: <SiPhp style={{ color: "#777BB4" }} /> },
    { name: "Microservices", icon: <SiExpress style={{ color: "#000000" }} /> },
    { name: "Testing", icon: <SiRedux style={{ color: "#00BFA5" }} /> },
    { name: "Problem Solving", icon: <FaDatabase style={{ color: "#2A9D8F" }} /> },
    { name: "Frontend Development", icon: <DiReact style={{ color: "#61DAFB" }} /> },
    { name: "Backend Development", icon: <DiNodejsSmall style={{ color: "#339933" }} /> },
  ];

  return (
    <Row className="justify-content-center" style={{ padding: "30px 0" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: "20px" }} data-aos="zoom-in">
          <HoverCard tech={tech} />
        </Col>
      ))}
    </Row>
  );
}

function HoverCard({ tech }) {
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
          ? "0 4px 4px 5px rgba(48, 112, 219, 0.561)" // Elevated shadow on hover
          : "0 4px 5px 3px rgba(48, 112, 219, 0.459)", // Normal shadow
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition effect
        transform: hover ? "scale(1.05)" : "scale(1)", // Slight zoom effect on hover
      }}
      onMouseEnter={() => setHover(true)} // Set hover state to true
      onMouseLeave={() => setHover(false)} // Reset hover state
    >
      <div style={{ fontSize: "3rem", marginBottom: "10px" }}>{tech.icon}</div>
      <Card.Body>
        <Card.Title style={{ color: "#ffffff", fontSize: "1.2rem" }}>{tech.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Techstack;
