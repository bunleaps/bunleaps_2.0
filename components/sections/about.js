import React from "react";
import Image from "next/image";
import aboutPic from "../../images/about.jpg";
import styled from "styled-components";

const StyledAboutSection = styled.section`
  max-width: 900px;

  h1 {
    margin: 0;
    padding: 5px 10px;
    color: #191919;
    background: #1dd1a1;
    display: inline-block;
  }
`;

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr;
  justify-content: space-between;

  .info {
    p {
      span {
        color: #1dd1a1;
        font-size: 15px;

        &:hover {
          color: #191919;
          background: #1dd1a1;
        }
      }
    }

    h3 {
      margin: 0;
      padding: 5px 10px;
      color: #191919;
      background: #1dd1a1;
      display: inline-block;
    }

    ul {
      columns: 3 auto;
    }
  }

  .pic {
    margin-left: 10%;
    .aboutMe {
      border-radius: 4%;
    }
  }

  @media (max-width: 930px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr -1fr;

    .info {
      ul {
        columns: 2 auto;
      }
    }

    .pic {
      display: none;
    }
  }
`;

function About() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "WordPress",
    "Python",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Premiere Pro",
    "Figma",
  ];
  return (
    <StyledAboutSection id="about">
      <h1>About Me</h1>
      <StyledAbout>
        <div className="info">
          <p>
            Bunleap was born and raised by a family in the city of{" "}
            <span>Takeo province, Cambodia</span>. At the age of eleven and got
            in the top five in his class, Bunleap was selected out of thousands
            of candidates to attend the <span>Liger Leadership Academy</span> on
            a seven-year scholarship.
          </p>
          <p>
            Inspired by this opportunity, Bunleap wants to follow his dream as a{" "}
            <span>front end web developer</span>, <span>entrepreneur</span>, and{" "}
            <span>engineer</span>. These three keywords contain the essence of
            who he is. Even though he has many dreams, he is still open to{" "}
            <span>new experiences</span> and <span>challenges</span> to
            understand more about himself.
          </p>
          <h3>My Skills Set</h3>
          <ul>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="pic">
          <Image
            className="aboutMe"
            src={aboutPic}
            width={300}
            height={300}
            alt="My Picture"
          />
        </div>
      </StyledAbout>
    </StyledAboutSection>
  );
}

export default About;
