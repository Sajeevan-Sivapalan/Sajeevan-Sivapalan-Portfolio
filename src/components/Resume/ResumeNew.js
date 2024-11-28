import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Sajeevan_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-200px",
          width: "400px",
          height: "400px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      ></div>

      <Container>
        <h1
          className="project-heading text-center"
          style={{
            fontSize: "2.5em",
            fontWeight: "bold",
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
            >
              <AiOutlineDownload />
              Download CV
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* PDF Viewer */}
          <Col
            xs={12}
            id="pdf-container"
            style={{
              border: "1px solid #b8b8d1",
              borderRadius: "15px",
              background: "#ffffff",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
              padding: "20px",
              maxWidth: "800px", // Fixed maximum width
              width: "90%", // Responsive width for smaller screens
              zIndex: 1,
              position: "relative",
            }}
          >
            <Document file={pdf}>
              <Page
                pageNumber={1}
                scale={boxWidth / 800} // Dynamically scale PDF based on box width
                style={{
                  margin: "0 auto",
                }}
              />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
