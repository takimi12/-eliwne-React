import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { SwiperNavButtons } from '../../pages/homepage/inspiration/helpers/SwiperNavButtons';
import styles from './Series.module.scss';


function Products() {

  const [categories, setCategories] = useState([]);


  
  useEffect(() => {
    // Twój kod do wykonywania żądania HTTP i pobierania danych
   
    
    fetch('http://localhost:1337/api/kategorie-grzejnikows?populate=Kategorie.Image', {
      method: 'GET',

    })
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  }, []);

  return (
     
     
     <section className={styles.products}>
        <div className={styles.swirperButton}>
        <h4 className={`h4 ${styles.category}`}>Kategorie Grzejników</h4>
        <SwiperNavButtons />
        </div>
         <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          className={styles.swiper}
        >
         
          {categories.map((category) => (
            <SwiperSlide key={category.id} className={styles.swiperSlider}>
              <Link
                className='produkty'
              >
                   <img src={` http://localhost:1337${category.attributes.Kategorie.Image.data.attributes.url}`} alt="zdjęcie" />
       
       <h5>{category.attributes.Kategorie.Title}</h5>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </section>

  );
}

export default Products;
