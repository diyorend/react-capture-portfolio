import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#about">Capture</a>
      </h1>
      <ul>
        <li>
          <a href="#about">1. About Us</a>
        </li>
        <li>
          <a href="#work">2. Our Work</a>
        </li>
        <li>
          <a href="#contact">3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: #282828;
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    a {
      font-size: 1.8rem;
      font-weight: lighter;
      font-family: "Lobster", cursive;
    }

    flex: 1 1 40rem;
  }
  ul {
    flex: 1 1 40rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    li {
      position: relative;
    }
  }
`;

export default Nav;
