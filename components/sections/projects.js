import React from "react";
import styled from "styled-components";

const ProjectsStyledSection = styled.section`
  max-width: 900px;
  width: 100%;
  margin-top: 50px;

  h1 {
    margin: 0;
    padding: 5px 10px;
    color: #191919;
    background: #1dd1a1;
    display: inline-block;
  }

  .button {
    display: inline-block;
    margin-top: 5px;
    padding: 15px 30px;
    background: none;
    border: 1px solid #1dd1a1;
    color: #1dd1a1;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #1dd1a1;
      color: #191919;
    }
  }

  span {
    color: #1dd1a1;
    font-size: 15px;

    &:hover {
      color: #191919;
      background: #1dd1a1;
    }
  }
`;

function Projects() {
  return (
    <ProjectsStyledSection id="projects">
      <h1>Projects</h1>
      <p>
        Coming Soon ... <span>⚠ Work-in-Progress!!!</span>
      </p>
    </ProjectsStyledSection>
  );
}

export default Projects;
