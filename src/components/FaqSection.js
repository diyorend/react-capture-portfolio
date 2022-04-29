import React from "react";
//style
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <FAQ>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            unde iusto sunt, dolor ut minus.
          </p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            unde iusto sunt, dolor ut minus.
          </p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            unde iusto sunt, dolor ut minus.
          </p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products Do You Offer?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            unde iusto sunt, dolor ut minus.
          </p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 2rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
