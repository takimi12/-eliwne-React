import React from "react";
import certificate from "../../../static/HomePage/certificate-check.png";
import star from "../../../static/HomePage/Star-1.png";
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

import clientOpinions from './utils/Data'; 

const Clients = () => {


  return (
    <section className="Clients">
      <div className="top">
        <div className="left">
          <h4 className="h4">Opinie klientów</h4>
          <p className="body-small-brown">
            Średnia ocena<span className="body-small-bigger">4.9</span>
          </p>
        </div>
        <div className="right">
          <h6 className="h6 ">
            <a className="extra" href="/opinie">
              Zobacz wszystkie
            </a>
          </h6>
        </div>
      </div>
      <div className="client-opinion-parent">
        <Swiper spaceBetween={20} slidesPerView={3} slidesOffsetBefore={40}>
          {clientOpinions.map((opinion, index) => (
            <SwiperSlide key={index}>
              <div className="client-opinion">
                <div className="client-opinion-wrapper">
                  <div className="star">
                    {Array.from({ length: opinion.stars }).map((_, starIndex) => (
                      <img key={starIndex} src={star} alt="Star" />
                    ))}
                  </div>
                  <h6 className="h6-third">{opinion.text}</h6>
                  <h6 className="h6-300">{opinion.description}</h6>
                  <div className="sign">
                    <img src={certificate} alt="Certificate" />
                    <h6 className="h6-300">
                      {opinion.name}{" "}
                      <span className="body-small-smaller">{`from ${opinion.location}`}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
