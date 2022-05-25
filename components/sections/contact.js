import React from "react";
import styled from "styled-components";

const ContactStyledSection = styled.section`
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

  .contacts {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    gap: 5px;

    div {
      display: flex;
      justify-content: center;
      padding: 20px;
      background: #1dd1a1;
      color: #191919;
      border-radius: 4px;
      font-weight: bold;

      a {
        padding-left: 5px;
        font-weight: normal;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .social {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;
    gap: 5px;

    div {
      display: flex;
      justify-content: center;
      padding: 20px;
      margin-top: 5px;
      background: #1dd1a1;
      color: #191919;
      border-radius: 4px;
      font-weight: bold;
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

  @media (max-width: 930px) {
    .contacts {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      gap: 5px;
    }
  }
`;

function Contact() {
  return (
    <ContactStyledSection id="contact">
      <h1>Contact</h1>
      <p>
        Come & Say <span>{'"Hi!"'}</span>
      </p>
      <div className="contacts">
        <div>
          School:{" "}
          <a href="mailto:bunleap.s@ligercambodia.org">
            bunleap.s@ligercambodia.org
          </a>
        </div>
        <div>
          {" "}
          Work:{" "}
          <a href="mailto:bunleap.sorn@gmail.com">bunleap.sorn@gmail.com</a>
        </div>
      </div>
      <div className="social">
        <div>Facebook</div>
        <div>YouTube</div>
        <div>Instagram</div>
      </div>
    </ContactStyledSection>
  );
}

export default Contact;
