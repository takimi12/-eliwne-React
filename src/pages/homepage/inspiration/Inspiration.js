
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SwiperNavButtons } from './helpers/SwiperNavButtons';
import { ReactSVG } from 'react-svg';
import Inspiration from "../../../static/HomePage/InspirationPlus.svg";

import first from "../../../static/HomePage/first-main-photo.png";
import second from "../../../static/HomePage/second-main-photo.png";
import third from "../../../static/HomePage/third-main-photo.png";
import fourth from "../../../static/HomePage/fourth-main-photo.png";
import five from "../../../static/HomePage/five-main-photo.png";
import arrow from "../../../static/HomePage/Arrows.png";

const SectionSwiper = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Ref dla elementu popup
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isBottomSectionExpanded, setIsBottomSectionExpanded] = useState(false); // Nowy stan do śledzenia rozwinięcia BottomInfoSection
  const [isConfigurationClicked, setIsConfigurationClicked] = useState(false); // Nowy stan do śledzenia pierwszego kliknięcia konfiguracji

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedSlideIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedImage(null);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleConfigurationClick = () => {
    setIsConfigurationClicked(true);
    setIsBottomSectionExpanded((prevState) => !prevState); // Zmień stan, aby pokazać/ukryć BottomInfoSection
    const buttonText = isBottomSectionExpanded ? "Konfiguracja" : "Zwiń";
    document.querySelector(".clickunder900").textContent = buttonText;

    // Przewijanie popupu na dół lub górę w zależności od stanu
    if (popupRef.current) {
      if (!isBottomSectionExpanded) {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      } else {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }
  }, [showPopup]);

  const images = [first, second, third, fourth, five];

  useEffect(() => {
    if (showPopup && isBottomSectionExpanded) {
      // Przewijanie na dół do rozwiniętej sekcji
      if (popupRef.current) {
        popupRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [showPopup, isBottomSectionExpanded]);

  return (
    <>
      <section className='swiper-section-inspiration'>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesOffsetBefore={40}
          navigation
        >
          <div className='swiper-top'>
            <h4 className="h4">Inspiracje</h4>
            <SwiperNavButtons />
          </div>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='hover-effect-div' onClick={() => handleImageClick(image, index)}>
                <img src={image} alt="Slide Image" />
                <div className='hover-effect-div-inner'>
                  <ReactSVG src={Inspiration} alt="Logo" />
                  <h5 className='Look'>Zobacz</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {showPopup && (
          <div ref={popupRef} className="popup-overlay" onClick={closePopup}>
            <div className="popup" onClick={handlePopupClick}>
                <Swiper
                  slidesPerView={1}
                  initialSlide={selectedSlideIndex}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="imageSecition">
                         <SwiperNavButtons />
                      <img className="PopupMainImage" src={image} alt={`Popup Image ${index}`} />
                      </div>
                      <div className={`info ${isBottomSectionExpanded ? 'expanded' : ''}`}> {/* Dodaj warunkowy className */}
                <div className="TopInfoSection">
                  <h5 className="h5">Grace</h5>
                  <p className="body-small-smaller-third">Ilość kolumn: 2</p>
                  <p className="body-small-smaller-third">Wysokość: 478</p>
                </div>
                <div className="BottomInfoSection">
                  <h3 className="h6-600-third">Konfiguracja ze zdjęcia</h3>
                  <div className="bottoInfosecttionText">
                    <div className="photowithtext">
                    <div className="photo"></div>
                    <div className="text">
                      <p className="body-small-bigger-third">Wykończenie</p>
                      <p className="body-small-smaller-third">RAL 7072</p>
                    </div>
                  </div>
                  <div className="photowithtext">
                    <div className="photo"></div>
                    <div className="text">
                      <p body-small-bigger-third>Wykończenie</p>
                      <p className="body-small-smaller-third">RAL 7072</p>
                    </div>
                  </div>
                  <div className="photowithtext">
                    <div className="photo"></div>
                    <div className="text">
                      <p className="body-small-bigger-third">Wykończenie</p>
                      <p className="body-small-smaller-third">RAL 7072</p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="buttonwraper">
                  <button><a href="#">Zobacz produkt</a></button>
                </div>
                <div className="ConfigurationUnder900" onClick={handleConfigurationClick}>
                  <h6 className="h6-600 clickunder900">
                    {isConfigurationClicked ? "Zwiń" : "Konfiguracja"}
                  </h6>
                  <img className="popuparrow" src={arrow} />
                </div>
              </div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <button className="close-button" onClick={closePopup}>
                X
              </button>
            </div>
        )}
      </section>
    </>
  );
};

export default SectionSwiper;

