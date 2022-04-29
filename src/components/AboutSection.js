import React from "react";
import home1 from "../img/home1.png";
//style
import styled from "styled-components";

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
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 5%;
  color: white;
`;
const Desc = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
