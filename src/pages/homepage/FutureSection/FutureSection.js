import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import features from './utils/Data'; 

const FutureSection = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">  </span>';
    },
  };



  return (
    <section className="FutureSection">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={3}
        slidesOffsetBefore={40}
        breakpoints={breakpoints}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="Feature">
              <div className="FeatureWrapper">
                <div className="FeatureIcon">
                  <img src={feature.image} alt={feature.alt} />
                </div>
                <h2 className="FeatureTitle h6-600-third">{feature.title}</h2>
                <div className="FeatureDescription h6">{feature.description}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FutureSection;
