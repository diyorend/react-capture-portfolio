import React from "react";
import home1 from "../img/home1.png";
//style
import { About, Hide, Desc, Image } from "../styles";
// Animatio
import { titleAnim, fade, photoAnim } from "../animation";
import { motion } from "framer-motion";
// Wave
import Wave from "./Wave";
// contact us path
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <About>
      <Desc>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography idea that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button onClick={() => navigate("/contact")} variants={fade}>
          Contact Us
        </motion.button>
      </Desc>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//styles

export default AboutSection;
