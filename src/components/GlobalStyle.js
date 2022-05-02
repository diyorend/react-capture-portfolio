import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  html{
    @media (max-width: 1250px) {
      font-size: 80%;
    }
    @media (max-width:700px){
      font-size:60%;
    } 
    transition: all 0.5s ease;
    scroll-behavior: smooth;
  }
  body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
  }
  button{
    @media (max-width: 900px){
      border: 1px solid #23d997;
    }
    font-size: 1.4rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem 2.5rem;
    border: 2px solid #23d997;
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
    font-size: 3.6rem;
    font-weight: lighter;
    /* color: #eee; */
  }
  h3{
    color: #eee;
  }
  h4{
    font-weight: bold;
    color: #eee;
    font-size: 1.7rem;
  }
  span{
    color: #23d997;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
    padding: 1.6rem 0;
    color: #ccc;
    line-height: 150%;
  }
  a{
    font-size: 1.1rem;
  }
`;

export default GlobalStyle;
