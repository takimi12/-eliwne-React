import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs";
import styles from './ProductList.module.scss';

const ProductOneCategorySub = () => {

  const [subcategories, setSubcategories] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [productsName, setProductsName] = useState('');


const currentPath = window.location.pathname;
const segments = currentPath.split('/').filter(segment => segment !== '');
const lastSegment = segments[segments.length - 1];

useEffect(() => {
  if (!subcategories) {
    // Jeśli selectedCategory jest puste, użyj lastSegment
    fetchSubcategories(lastSegment);
  }
}, [])

const fetchSubcategories = () => {

   fetch(`  http://localhost:1337/api/series?populate=seria.${lastSegment}.Image`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => setSubcategories(data.data))
    .catch((error) => console.error('Błąd podczas pobierania danych:asadadadasd ', error));
};

console.log(subcategories)


  return (
    <>
    <Breadcrumbs myProp="active" />
      <section className={styles.products}>
      
        {subcategories ? (
  subcategories.map((subcategory) => (
    <div key={subcategory.id}>
      {subcategory.attributes.seria.map((serie) => (
        <div key={serie.id} className={styles.parentList}>
          {serie[lastSegment] && serie[lastSegment].map((item) => (
            <div key={item.id} className={styles.imageWraper}>
              <img
                src={`http://localhost:1337${item.Image.data.attributes.formats.thumbnail.url}`}
                alt={item.Title} />
             <h5>{item.Title}</h5>
            </div>
          ))}
        </div>
      ))}
    </div>
  ))
) : (
  <div>Loading...</div>
)}



      </section>


{/* <Series /> */}



    </>
  );
  };
  
  export default ProductOneCategorySub; 
