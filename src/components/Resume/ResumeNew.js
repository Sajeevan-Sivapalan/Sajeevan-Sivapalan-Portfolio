import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Sajeevan_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function ResumeNew() {
  const [boxWidth, setBoxWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("pdf-container");
      if (container) {
        const containerWidth = container.offsetWidth;
        setBoxWidth(containerWidth > 800 ? 800 : containerWidth); // Limit the box width to 800px max
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        background: "#1a1a2e",
        color: "#ffffff",
        padding: "80px 0 50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-150px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
        data-aos="fade-right"
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-200px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
        data-aos="fade-left"
      ></div>

      <Container>
        <h1
          className="project-heading text-center"
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
            marginTop: "65px",
            marginBottom: "20px",
            zIndex: 1,
            position: "relative",
          }} 
        >
          <strong className="purple">Resume</strong>
        </h1>
        <p
          style={{
            color: "#b8b8d1",
            textAlign: "center",
            fontSize: "1.2em",
            marginBottom: "40px",
            zIndex: 1,
            position: "relative",
          }}
        >
          Here you can view or download my resume.
        </p>
        <Row className="justify-content-center">
          {/* Download Button */}
          <Col xs={12} className="text-center" style={{ marginBottom: "30px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{
                backgroundColor: "#6c63ff",
                borderColor: "#6c63ff",
                padding: "10px 20px",
                fontSize: "1.2rem",
                borderRadius: "50px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#5a52e0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#6c63ff")}
              data-aos="zoom-in"
            >
              <AiOutlineDownload />
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
