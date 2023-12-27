// Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Importuje funkcję useDispatch z react-redux
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import styles from './Products.module.scss';
import { setSelectedCategory } from '../../redux/actions'; // Importuje akcję setSelectedCategory

function Products() {
  const dispatch = useDispatch(); // Inicjalizuje useDispatch

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

  const handleCategoryClick = (selectedCategory) => {
    // Wywołuje akcję Redux po kliknięciu w link
    dispatch(setSelectedCategory(selectedCategory));
  };

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
              onClick={() => handleCategoryClick(category.attributes.Kategorie.Api)}
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
