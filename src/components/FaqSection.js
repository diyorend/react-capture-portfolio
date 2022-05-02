import React from "react";
//style
import styled from "styled-components";
import { About } from "../styles";
// toggle
import Toggle from "./Toggle";
//animation
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const FaqSection = () => {
  const [el, controls] = useScroll();

  return (
    <FAQ variants={scrollReveal} ref={el} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              unde iusto sunt, dolor ut minus.
            </p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              unde iusto sunt, dolor ut minus.
            </p>
            <p>
              Lorem, ipsum dolor. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Sit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor,</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              nihil, fuga ut consectetur dolorem recusandae incidunt non eveniet
              ratione perferendis?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products Do You Offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              animi corrupti! Qui quasi maiores illo!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              dolor.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
    height: 0.1rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  .question {
    padding: 0.7rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 0.5rem 0;
    p {
      padding: 0.5rem 0;
    }
  }
`;

export default FaqSection;
