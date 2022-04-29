import React from "react";
// Style
import GlobalStyle from "./components/GlobalStyle";
// Pages
import AboutUs from "./pages/AboutUs";
// global components
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
