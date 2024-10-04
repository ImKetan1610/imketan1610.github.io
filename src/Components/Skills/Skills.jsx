import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp2.png";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiPostman,
  SiVisualstudio,
  SiVercel,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMui,
  SiBootstrap,
  SiGit,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaGithub, FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";

// Responsive settings for the carousels
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Here are some of my technical skills categorized into Frontend,
                Backend, and Tools that I use for web development.
              </p>

              {/* Frontend Skills Carousel */}
              <div className="skill-category">
                <h3>Tech Skills</h3>
                <Carousel responsive={responsive} infinite className="skills-slider">
                  <div className="item" >
                    <SiHtml5/>
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <SiCss3/>
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <SiJavascript />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <SiReact />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <SiRedux />
                    <h5>Redux Tool Kit</h5>
                  </div>
                  <div className="item">
                    <SiExpress />
                    <h5>Express</h5>
                  </div>
                  <div className="item">
                    <FaNodeJs />
                    <h5>NodeJS</h5>
                  </div>
                  <div className="item">
                    <DiMongodb />
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <SiMui />
                    <h5>Material UI</h5>
                  </div>
                  <div className="item">
                    <SiTailwindcss />
                    <h5>Tailwind CSS</h5>
                  </div>
                  <div className="item">
                    <SiBootstrap />
                    <h5>Bootstrap</h5>
                  </div>
                  
                </Carousel>
              </div>

              {/* Tools Skills Carousel */}
              <div className="skill-category">
                <h3>Tools</h3>
                <Carousel responsive={responsive} infinite className="skills-slider">
                  <div className="item">
                    <SiGit />
                    <h5>Git</h5>
                  </div>
                  <div className="item">
                    <SiNetlify />
                    <h5>Netlify</h5>
                  </div>
                  <div className="item">
                    <SiVercel />
                    <h5>Vercel</h5>
                  </div>
                  <div className="item">
                    <SiPostman />
                    <h5>Postman</h5>
                  </div>
                  <div className="item">
                    <SiVisualstudiocode />
                    <h5>VS Code</h5>
                  </div>
                  <div className="item">
                    <FaGithub />
                    <h5>Github</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="" />
    </section>
  );
};

export default Skills;
