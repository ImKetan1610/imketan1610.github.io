import { Container } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import colorSharp from "../../assets/img/color-sharp2.png";

const GitHubCalendarComponent = () => {
  return (
    <section className="position-relative">
      <Container>
        <div className="container text-center my-4 bg-red">
          <h3 className="calendar-title">My GitHub Contribution Calendar</h3>

          <div className="d-flex justify-content-center flex-column align-items-center">
            <GitHubCalendar username="ImKetan1610" />
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <img
                className="img-fluid"
                src={`https://github-readme-stats.vercel.app/api?username=ImKetan1610&show_icons=true&locale=en`}
                alt="GitHub Stats"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <img
                className="img-fluid"
                src={`https://github-readme-streak-stats.herokuapp.com/?user=ImKetan1610`}
                alt="GitHub Streak Stats"
              />
            </div>
          </div>
        </div>
      </Container>
      <img className="background-image-right position-absolute" src={colorSharp} alt="Background" />
    </section>
  );
};
export default GitHubCalendarComponent;
