import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
  }
  button{
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border: 3px solid #23d997;
    background: transparent;
    color:#fff;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;

    &:hover{
      background: #23d997;
      color: #222;
    }
  }
  

  h2{
    font-size: 4rem;
    font-weight: lighter;
    color: #eee;
  }
  h3{
    color: #eee;
  }
  h4{
    font-weight: bold;
    color: #eee;
    font-size: 2rem;
  }
  span{
    color: #23d997;
    font-weight: bold;
  }
  p{
    font-size: 1.4rem;
    padding: 2rem 0;
    color: #ccc;
    line-height: 150%;
  }
  a{
    font-size: 1.1rem;
  }
`;

export default GlobalStyle;
