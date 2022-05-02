import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 5%;
  color: white;
`;
export const Desc = styled.div`
  flex: 1;
  padding-right: 3rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
