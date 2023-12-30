import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { SwiperNavButtons } from '../../pages/homepage/inspiration/helpers/SwiperNavButtons';
import styles from './Series.module.scss';

function Products({ apiValues, onCategoryClick, handleSubCategoryClick  }) {
  const [categories, setCategories] = useState([]);
  const lastSegment1 = apiValues;

  useEffect(() => {
    const fetchSubcategories = async (lastSegment1) => {
      const endpoint = !lastSegment1
        ? 'kategorie-grzejnikows?populate=Kategorie.Image'
        : `${lastSegment1[0]}s?populate=Kategoria.Obrazek`;

      try {
        const response = await fetch(`http://localhost:1337/api/${endpoint}`, {
          method: 'GET',
        });

        const data = await response.json();

        // Introduce a delay of 1000 milliseconds (1 second) before updating the state
     
          setCategories(data.data);
       } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
      }
    };

    fetchSubcategories(lastSegment1);
  }, [lastSegment1]);

  return (
    <section className={styles.products}>
      <div className={styles.swirperButton}>
        {lastSegment1 ? (
          <h4 className={`h4 ${styles.category}`}> Pozostałe serie</h4>
        ) : (
          <h4 className={`h4 ${styles.category}`}> Pozostałe kategorie</h4>
        )}
        <SwiperNavButtons />
      </div>
      <div>
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{   
            300: {
            slidesPerView: 1,
          },
            768: {
              slidesPerView: 1,
            },
          }}
          className={styles.swiper}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className={styles.swiperSlider}>
              {lastSegment1 ? (
                category.attributes.Kategoria ? (
                  <Link
                    className='produkty'
                    onClick={() => onCategoryClick(category.attributes.Kategoria.Title)}
                     to={`http://localhost:3000/produkty/${category.attributes.Kategoria.Title}/${category.attributes.Kategoria.Title}`}
                  >
                    <img
                      src={`http://localhost:1337${category.attributes.Kategoria.Obrazek.data.attributes.url}`}
                      alt="zdjęcie"
                    />
                    <h5>{category.attributes.Kategoria.Title}</h5>
                  </Link>
                ) : null
              ) : (
                category.attributes.Kategorie ? (
                  <Link
                    className='produkty'
                    onClick={() => handleSubCategoryClick (category.attributes.Kategoria.Title)}
             
                    to={`/produkty/${category.attributes.Kategorie.Api}`}
                  >
                    <img
                      src={`http://localhost:1337${category.attributes.Kategorie.Image.data.attributes.url}`}
                      alt="zdjęcie"
                    />
                    <h5>{category.attributes.Kategorie.Title}</h5>
                  </Link>
                ) : null
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;
