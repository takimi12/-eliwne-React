import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs';
import styles from './Kategorie.module.scss';
import Series from "../../../components/series/Series";

function Products() {

  const [subcategories, setSubcategories] = useState(null);

  const currentPath = window.location.pathname;
  const segments = currentPath.split('/').filter(segment => segment !== '');
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    if (!subcategories) {
      // Jeśli selectedCategory jest puste, użyj lastSegment
      fetchSubcategories(lastSegment);
    }
  }, [])


  const fetchSubcategories = (category) => {
    fetch(`http://localhost:1337/api/${category}s?populate=Kategoria.Obrazek`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setSubcategories(data.data))
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  };

  console.log(subcategories, 'subkategoria')

  return (
    <>
    <Breadcrumbs />
   
      <section className={styles.sectionProduct}>
      <h4 className={styles.title}>Produkty</h4>


        <div className={styles.productsWrapper}>
     

        {subcategories ? (
            subcategories.map((subcategory) => (
           <>     
              <Link
              to={`/produkty/${lastSegment}/${subcategory.attributes.Kategoria.Title}/${subcategory.attributes.Kategoria.Api}`}
              className={styles.produkty}
              key={subcategory.id}
            >

              <img src={` http://localhost:1337${subcategory.attributes.Kategoria.Obrazek.data.attributes.url}`} alt="zdjęcie" />
              <h5>{subcategory.attributes.Kategoria.Title}</h5>     

            </Link>
                        </>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>

            <Series />
 
     </>
  );
}

export default Products;
