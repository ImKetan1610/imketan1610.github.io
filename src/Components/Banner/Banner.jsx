import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} lg={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi! I'm Ketan Makode`}
              <span>A MERN stack developer</span>
            </h1>
            <p>
              Hello stranger! 👋, I am Ketan Makode and I am a MERN Stack
              Developer, passionate about building digital products that improve
              everyday experience for people. I love to work on exciting
              projects that test what I've learnt, whilst being exposed to the
              power and potential of the ever-evolving technologies around us.
            </p>
            <button onClick={()=>console.log("connect")}></button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
