import React from "react";
import home1 from "../img/home1.png";
//style
import styled from "styled-components";
import { About, Hide, Desc, Image } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Desc>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography idea that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Desc>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//styles

export default AboutSection;
