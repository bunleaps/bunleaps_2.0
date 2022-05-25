import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HeroSrc from "../../images/hero.jpg";

const HeroStyledSection = styled.section`
  width: 900px;
  height: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .heroImage {
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
    align-items: center;

    .heroImg {
      border-radius: 50%;
    }
  }

  .heroMain {
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
    }

    h1 {
      margin: 0;
      font-size: 40px;
    }

    h2 {
      margin: 0;
      font-size: 30px;
    }

    .name {
      color: #1dd1a1;
    }

    .slogan {
      color: whitesmoke;
    }

    p {
      width: 90%;

      .mark {
        color: #1dd1a1;
        font-size: 15px;

        &:hover {
          color: #191919;
          background: #1dd1a1;
        }
      }
    }

    .button {
      display: inline-block;
      margin-top: 5px;
      margin-right: 10px;
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
  }

  @media (max-width: 930px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 150px;

    .heroImage {
      margin-top: 50px;
      justify-content: center;

      div {
        margin-left: 8%;
      }
    }

    .heroMain {
      justify-content: center;
      div {
        justify-content: center;
        text-align: center;
        width: 80%;

        p {
          width: 50%;
          display: inline-block;
        }

        div {
          display: inline-block;
        }
      }
    }
  }
`;

function Hero() {
  return (
    <HeroStyledSection>
      <div className="heroImage">
        <div>
          <Image
            className="heroImg"
            src={HeroSrc}
            width={300}
            height={300}
            alt="Hero Image"
          />
        </div>
      </div>
      <div className="heroMain">
        <div>
          <span>Hi, my name is</span>
          <h1 className="name">Bunleap Sorn</h1>
          <h2 className="slogan">I built things for the web.</h2>
          <p>
            I&apos;m a <span className="mark">front-end developer</span>{" "}
            specializing in building exceptional web interfaces and experiences.
            Currently, I&apos;m focused on building accessible web app for the
            web.
          </p>
          <div>
            <a className="button" href="#projects">
              Projects
            </a>
            <a className="button">GitHub</a>
          </div>
        </div>
      </div>
    </HeroStyledSection>
  );
}

export default Hero;
