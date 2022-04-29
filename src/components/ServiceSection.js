import React from "react";
//Icons
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="service">
      <div className="image">
        <img src={home2} alt="services img" />
      </div>
      <div className="desc">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={money} alt="clock" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
