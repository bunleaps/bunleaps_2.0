import React from "react";
import styled from "styled-components";
import Nav from "./nav";

const LayoutStyledSection = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }) {
  return (
    <LayoutStyledSection>
      <Nav />
      {children}
    </LayoutStyledSection>
  );
}

export default Layout;
