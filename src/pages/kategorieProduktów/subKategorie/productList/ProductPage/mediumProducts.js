import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

import telephone from "../../../../../static/ProductPage/telephonepage.svg";
import post from "../../../../../static/ProductPage/postproductpage.svg";
import car from "../../../../../static/ProductPage/cardeliver.svg";

import FutureSection from "../../../../homepage/FutureSection/FutureSection";
import ProductPageFlorence from "../../../../../components/productPage/ProductPageFlorence";
import ProductPagePopup from "../../../../../components/productPage/ProductPagePopUp";

const ProductPageSingle = () => {
  const [subcategories, setSubcategories] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const currentPath = window.location.pathname;
  const segments = currentPath.split('/').filter(segment => segment !== '');
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    if (!subcategories) {
      fetchSubcategories(lastSegment);
    }
  }, []);

  const fetchSubcategories = (category) => {
    fetch(`http://localhost:1337/api/produkts?populate=${category}.Foto.BigFoto`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setSubcategories(data.data);

      })
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };
  return (
    <>
           
      {subcategories &&
        subcategories.map((subcategory) => (
          <div key={subcategory.id} className={styles.products}>
          
            <div className={styles.default}>
        
              {subcategory.attributes.Emmeline2kolumny.map((item) => (
               
                  <div className={styles.fotoWrapper}>
                    {item.Foto &&
                      item.Foto.map((photo) => (
                        photo.BigFoto &&
                          photo.BigFoto.data &&
                          photo.BigFoto.data.map((image) => (
                            <img
                              key={image.id}
                              src={`http://localhost:1337${image.attributes.url}`}
                              alt={image.attributes.name}
                            />

                          ))
                      ))}
                  </div>
                
              ))}

            </div>
            <div className={styles.mobile}>
              <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              onSlideChangeTransitionEnd={(swiper) => {
                
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                // Dodaj dodatkowe breakpoints, jeśli chcesz dostosować liczbę slajdów dla innych szerokości ekranu
              }}
            >
              {subcategory.attributes.Emmeline2kolumny.map((item) => (
               
                  <div className={styles.fotoWrapper}>
                    {item.Foto &&
                      item.Foto.map((photo) => (
                        photo.BigFoto &&
                          photo.BigFoto.data &&
                          photo.BigFoto.data.map((image) => (
                            <SwiperSlide key={item.id}>
                            <img
                              key={image.id}
                              src={`http://localhost:1337${image.attributes.url}`}
                              alt={image.attributes.name}
                              className={styles.swiperImage}
                            />
                            </SwiperSlide>
                          ))
                      ))}
                  </div>
                
              ))}
                         <p>Numer slajdu:  Numer slajdu: {currentSlide + 1} z {subcategory.attributes.Emmeline2kolumny[0].Foto[0].BigFoto.data.length}</p>
 
            </Swiper>
            </div>
            <div className={styles.rightSection}>
              {subcategory.attributes.Emmeline2kolumny.map((item) => (
                <div key={item.id}>
                  <div className={styles.title}>
                    <h3 className={styles.mainHeading}>{item.Title}</h3>
                    <p>{item.SmallTitle}</p>
                  </div>
                  <p className={styles.description}>{item.Description}</p>
                  <div>
                    <p>Dostępna Wysokość</p>
                    <div className={styles.availableHeight}>
                      <p>{item.Wysokosc1} mm</p>
                      <p>{item.Wysokosc2} mm</p>
                      <p>{item.Wysokosc3} mm</p>
                      <p>{item.Wysokosc4} mm</p>
                    </div>
                    <div className={styles.priceWrapper}>
                      <h4>Od</h4>
                      <h4>{item.Cena} zł</h4>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <button type="button" data-button="true">
                        <span className="button-text-big">Skontaktuj się</span>
                      </button>
                    </div>

                    <div className={styles.time}>
                      <img src={car} alt="Logo" />
                      <p className="body-small-smaller-second">Dostawa: 6 - 8 tygodni</p>
                    </div>

                    <div className={styles.wrapperDelivery}>
                      <div className={styles.delivery}>
                        <img src={telephone} alt="Logo" />
                        <p className="body-small-smaller-second">123123123</p>
                      </div>
                      <div className={styles.delivery}>
                        <img src={post} alt="Logo" />
                        <p className="body-small-smaller-second">test@test.pl</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      <FutureSection />
      <ProductPageFlorence />
      <ProductPagePopup />
    </>
  );
};

export default ProductPageSingle;
