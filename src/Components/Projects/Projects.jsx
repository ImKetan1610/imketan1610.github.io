import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp from "../../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      desc: "The Quiz Builder App is a full-featured platform that allows users to create, manage, and take quizzes. It includes both a frontend and backend, offering user authentication, quiz analytics, and much more.",
      imgUrl: projImg1,
      liveUrl: "https://cuvette-quiz-builder-app.netlify.app/",
      githubUrl: "https://github.com/ImKetan1610/Quiz-App",
    },
    {
      title: "Story Viewer",
      desc: "In this app you can add your stories as per the category and then you can check it by clicking over it.",
      imgUrl: projImg2,
      liveUrl: "https://story-veiwer.vercel.app/",
      githubUrl: "https://github.com/ImKetan1610/story-veiwer",
    },
    {
      title: "Github Finder",
      desc: "It is simple app, built using React, HTML and CSS. Used github api for the required data and rendered the data on pages.",
      imgUrl: projImg3,
      liveUrl: "https://github-finder-tau-lyart.vercel.app/",
      githubUrl: "https://github.com/ImKetan1610/github-finder",
    },
    {
        title: "Github Finder",
        desc: "It is simple app, built using React, HTML and CSS. Used github api for the required data and rendered the data on pages.",
        imgUrl: projImg3,
        liveUrl: "https://github-finder-tau-lyart.vercel.app/",
        githubUrl: "https://github.com/ImKetan1610/github-finder",
      },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of my projects that showcase my skills in
                    full-stack development. Each project demonstrates my ability
                    to create functional, user-friendly applications, from
                    interactive quizzes to storytelling platforms. I utilize
                    modern technologies and best practices to ensure a seamless
                    experience for users, and I continuously strive to enhance
                    my coding proficiency.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left1" src={colorSharp}></img>
    </section>
  );
};

export default Projects;
