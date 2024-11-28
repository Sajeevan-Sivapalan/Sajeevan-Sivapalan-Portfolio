import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Sajeevan.jpeg";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SAJEEVAN SIVAPALAN</strong>
              </h1>

              <div style={{ padding: 40, textAlign: "left" }}>
                <Type  />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20,marginTop:20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "15px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      
    </section>
  );
}

export default Home;
