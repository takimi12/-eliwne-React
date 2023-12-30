import React, { useEffect, useState } from 'react';
import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs";
import styles from './ProductList.module.scss';
import Series from "../../../../components/series/Series";

const ProductOneCategorySub = () => {
  const [subcategories, setSubcategories] = useState(null);
  const [apiValues, setApiValues] = useState(null);


  const currentPath = window.location.pathname;
  let segments = currentPath.split('/').filter(segment => segment !== '');
  let lastSegment = segments[segments.length - 1];
const [currentPath1, setCurrentPath1] = useState(null);



useEffect(() => {
  if (currentPath1 !== null) {
    lastSegment = currentPath1;
    if (lastSegment.endsWith('y')) {
      lastSegment = lastSegment.slice(0, -1) + 'ie';
    }
    fetchSubcategories();
  } else {
    if (!subcategories) {
     
      fetchSubcategories();
    }
  }
  window.scrollTo(0, 0);
}, [currentPath1]); 

  const fetchSubcategories = () => {
    fetch(`http://localhost:1337/api/${lastSegment}s?populate=Image`, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSubcategories(data.data);
        const apiValues = data.data.map(subcategory => subcategory.attributes.Api || null);
        setApiValues(apiValues);
      })
      .catch((error) => {
        console.error('Błąd podczas pobierania danych:', error);
        // Tutaj możesz dodać kod obsługi błędów, np. wyświetlanie komunikatu dla użytkownika
      });
  };

  const handleCategoryClick = (title) => {
    setCurrentPath1(title);
  };


  return (
    <>
      <Breadcrumbs myProp="active" />
      <section className={styles.products}>
      
        {subcategories && subcategories.map((subcategory) => (
          <div key={subcategory.id} className={styles.parentList}>
            <div className={styles.singleProduct}>
            <img
              src={`http://localhost:1337${subcategory.attributes.Image.data[0].attributes.url}`}
            />
            <h5>{subcategory.attributes.Title}</h5>
          </div>
          </div>
        ))}
      </section>
      <Series apiValues={apiValues}  onCategoryClick={handleCategoryClick} />
    </>
  );
};

export default ProductOneCategorySub;
