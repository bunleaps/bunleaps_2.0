import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavStyledSection = styled.div`
  width: 900px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #1dd1a1;

  ul {
    display: flex;

    li {
      margin: 10px;
      list-style-type: none;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: #1dd1a1;
      }
    }
  }

  @media (max-width: 930px) {
    height: 140px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: none;

    ul {
      li {
        margin: 0 15px;
      }
    }
  }
`;

function Nav() {
  const navlink = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <NavStyledSection>
      <h1>Hello 👋</h1>
      <ul>
        {navlink.map((nav, i) => (
          <Link key={i} href={nav.link}>
            <li>{nav.name}</li>
          </Link>
        ))}
      </ul>
    </NavStyledSection>
  );
}

export default Nav;
