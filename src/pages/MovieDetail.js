import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MovieState from "../movieState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="mainImg" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award title={award.title} description={award.description} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="secondaryImg" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};
const Details = styled(motion.div)`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  @media (max-width: 700px) {
    min-height: 60vh;
  }

  h2 {
    text-align: center;
    padding: 2rem;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Awards = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    min-height: 50vh;
    padding: 1.5rem;
  }
  min-height: 80vh;
  padding: 2rem 5%;
  align-items: center;
  justify-content: space-around;
`;
const AwardStyled = styled.div`
  @media (max-width: 700px) {
    padding: 1rem;
    p {
      padding: 1rem;
    }
  }
  padding: 2rem;

  .line {
    width: 100%;
    background: #23d997;
    height: 0.2rem;
    margin: 0.5rem;
  }
  p {
    padding: 2rem 0;
  }

  h3 {
    font-size: 2rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// micro component
const Award = ({ description, title }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  );
};

export default MovieDetail;
