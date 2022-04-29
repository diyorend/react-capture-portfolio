import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
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
  #logo {
    font-size: 1.8rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  h1 {
    flex: 1 1 40rem;
  }
  a {
    text-decoration: none;
    color: #eee;
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
