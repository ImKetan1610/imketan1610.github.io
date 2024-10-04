import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack Web Developer",
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "MERN Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random());
  const period = 2000;

  function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  }

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi! I'm Ketan Makode, `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Hello stranger! 👋, I am Ketan Makode and I am a MERN Stack
              Developer, passionate about building digital products that improve
              everyday experience for people. I love to work on exciting
              projects that test what I've learnt, whilst being exposed to the
              power and potential of the ever-evolving technologies around us.
            </p>
            <button onClick={() => console.log("connect")}>
              {" "}
              Lets Connect
              <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
