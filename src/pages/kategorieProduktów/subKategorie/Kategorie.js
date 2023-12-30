import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs';
import styles from './Kategorie.module.scss';
import Series from "../../../components/series/Series";

function Products() {

  const [subcategories, setSubcategories] = useState(null);

  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment = segments[segments.length - 1];

  const [currentPath1, setCurrentPath1] = useState('');



  useEffect(() => {
    if (!subcategories) {
      if (lastSegment.endsWith('y')) {
        lastSegment = lastSegment.slice(0, -1) + 'ie';
      }
    
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



  const handleSubCategoryClick = (title) => {
    setCurrentPath1(title);
  };


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
              to={`/produkty/${subcategory.attributes.Kategoria.ApiTitle}/${subcategory.attributes.Kategoria.Title}`}
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

            <Series  onCategoryClick={handleSubCategoryClick } />
 
     </>
  );
}

export default Products;
