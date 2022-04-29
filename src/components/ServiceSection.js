import React from "react";
import styled from "styled-components";
import { About, Hide, Desc, Image } from "../styles";

//Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <Services>
      <Desc>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>

          <Card>
            <Icon>
              <img src={teamwork} alt="clock" />
              <h3>Teamwork</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>

          <Card>
            <Icon>
              <img src={diaphragm} alt="clock" />
              <h3>Diaphragm</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>

          <Card>
            <Icon>
              <img src={money} alt="clock" />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Card>
        </Cards>
      </Desc>
      <Image>
        <img src={home2} alt="services img" />
      </Image>
    </Services>
  );
};

//style
const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex: 1 1 15rem;
  padding: 0.5rem;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  h3 {
    margin: 0 1rem;
    padding: 0.3rem 0.5rem;
    font-size: 1.5rem;
    background: #ccc;
    color: #333;
    border-radius: 1rem;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
`;

export default ServiceSection;
