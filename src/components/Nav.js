import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
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
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 1 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  @media (max-width: 900px) {
    flex-direction: column;
    ul {
      justify-content: space-between;
      width: 100%;
    }
    h1 {
      padding: 0.5rem;
    }
  }
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  #logo {
    font-size: 1.8rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
  h1 {
    flex: 1;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: #eee;
  }
  ul {
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.25rem;
  background: #23d997;
  width: 0;
  margin-top: 0.4rem;
  border-radius: 1rem;
`;

export default Nav;
