import { Col } from "react-bootstrap";
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { FaGithub } from "react-icons/fa6";

export const ProjectCard = ({ title, desc, imgUrl, liveUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{desc}</span>
          <div className="icons-container">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <BoxArrowUpRight size={24} />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <FaGithub size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
