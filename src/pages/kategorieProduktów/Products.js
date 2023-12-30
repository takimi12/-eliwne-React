// Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import styles from './Products.module.scss';

function Products() {


  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch('http://localhost:1337/api/kategorie-grzejnikows?populate=Kategorie.Image', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  }, []);




  return (
    <>
      <Breadcrumbs />

      <section className={styles.sectionProduct}>
        <h4 className={styles.title}>Produkty</h4>

        <div className={styles.productsWrapper}>
          {categories.map((category) => (
            <Link
              to={`/produkty/${category.attributes.Kategorie.Api}`}
              className={styles.produkty}
              key={category.id}
            >
              <img src={` http://localhost:1337${category.attributes.Kategorie.Image.data.attributes.url}`} alt="zdjęcie" />
              <h5>{category.attributes.Kategorie.Title}</h5>
            </Link>
          ))}
        </div>
      </section>


    </>
  );
}

export default Products;
