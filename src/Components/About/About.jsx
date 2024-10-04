import { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Envelope, Phone, GeoAlt } from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import colorSharp from "../../assets/img/color-sharp.png"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container id="about" className="about-section mt-5" fluid>
      <Row className="align-items-center justify-content-center">
        {/* Left Side - Image */}
        <Col md={4} className="text-center">
          <Image
            src="https://avatars.githubusercontent.com/u/96099100?v=4" // Replace with your image path
            roundedCircle
            fluid
            className="profile-picture animate-left"
          />
        </Col>

        {/* Right Side - Personal Details */}
        <Col md={6} className="details animate-right">
          <h2 className="greeting animate-fade">
            Hi Everyone, I am <span>Ketan Makode</span>
          </h2>
          <p>
            from <b>Maharashtra, India</b>
          </p>
          <p>Date of Birth: October 16, 1995</p>
          <p>
            <GeoAlt /> 13, Zingabai Takli, Nagpur, Maharashtra <br />
            Zip code: 440030
          </p>
          <p>
            <Envelope /> ketan.makode@gmail.com
          </p>
          <p>
            <Phone /> +91-9850349620, +91-9021449978
          </p>
          <h4>Some of my interests apart from Coding:</h4>
          <ul>
            <li>Listening to Music</li>
            <li>Travelling</li>
          </ul>
        </Col>
      </Row>
      <img className="background-image-left" src={colorSharp} alt="" />
    </Container>
  );
};

export default About;
