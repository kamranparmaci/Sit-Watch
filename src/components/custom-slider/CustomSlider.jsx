// https://swiperjs.com/react check official documentation for more Information

import { useState, useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { IMG_API } from "../../constant";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./CustomSliderStyles.css";

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

const CustomSlider = ({ url }) => {
  const [width, setWidth] = useState(0);

  const moviesOrTvs = useMovies(url);

  const history = useHistory();

  const setSliderPreview = () => {
    if (window.innerWidth <= 500) {
      setWidth(2);
    } else if (window.innerWidth > 500 && window.innerWidth <= 768) {
      setWidth(3);
    } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
      setWidth(4);
    } else if (window.innerWidth > 1024) {
      setWidth(6);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setSliderPreview);
    setSliderPreview();
    return () => {
      window.removeEventListener("resize", setSliderPreview);
    };
  });

  return (
    <>
      <Swiper
        slidesPerView={width}
        spaceBetween={8}
        slidesPerGroup={2}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        className="mySwiper"
      >
        {moviesOrTvs.length > 0 &&
          moviesOrTvs.map((movieOrTv) => {
            const onclick = () => {
              history.push(
                movieOrTv.title
                  ? `/movies/${movieOrTv.id}`
                  : `/tv/${movieOrTv.id}`
              );
            };
            return (
              <SwiperSlide key={uuidv4()} onClick={onclick}>
                <img
                  src={IMG_API + movieOrTv.poster_path}
                  alt={movieOrTv.title ? movieOrTv.title : movieOrTv.name}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default CustomSlider;
