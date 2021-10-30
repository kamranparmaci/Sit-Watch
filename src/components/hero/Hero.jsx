import React, { useState, useRef, useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import {
  HeroSection,
  HeroWrapper,
  BtnLight,
  HeroSlide,
  HeroSlider,
  HeroImage,
} from "./HeroStyles";
import { IMG_API } from "../../constant";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const movies = useMovies(`movie/popular`);

  const length = movies.length;
  const timeout = useRef(null);

  useEffect(() => {
    try {
      const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
      timeout.current = setTimeout(nextSlide, 10000);
    } catch (error) {
      console.log(error);
    }

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <HeroSection>
      <div className="container">
        <HeroWrapper>
          <h1>Which Movie Will You Choose? </h1>
          <h3>
            Don’t Miss Out New Movies and explore Millions of Movies & TV shows
          </h3>
          <BtnLight to="/movies/popular">Discover Now</BtnLight>

          {movies.length > 0 &&
            movies.map((movie, idx) => {
              return (
                <HeroSlide key={movie.id}>
                  {idx === current && (
                    <HeroSlider>
                      <HeroImage
                        src={IMG_API + movie.backdrop_path}
                        alt={movie.title}
                      />
                    </HeroSlider>
                  )}
                </HeroSlide>
              );
            })}
        </HeroWrapper>
      </div>
    </HeroSection>
  );
};

export default Hero;
