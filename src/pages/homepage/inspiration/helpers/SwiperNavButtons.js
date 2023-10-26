import React from 'react';
import { useSwiper } from 'swiper/react';
import ArrowPrev from "../../../../static/HomePage/SwiperPrev.svg";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>  <img src={ArrowPrev} alt="Logo" />  </button>
      <button onClick={() => swiper.slideNext()}>  <img src={ArrowPrev} alt="Logo" />  </button>
    </div>
  );
};