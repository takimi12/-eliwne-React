import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from "../../../../components/breadcrumbs/breadcrumbs";
import styles from './ProductList.module.scss';

const ProductOneCategorySub = () => {

  const [subcategories, setSubcategories] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [productsName, setProductsName] = useState('');

//http://localhost:1337/api/series?populate=Zeliwne.Emmeline.Image
//Zeliwne categoryName
//ProductList.js:14 Emmeline productsName
//http://localhost:1337/api/series?populate=Stalowe.Sem.Image
//Stalowe categoryName
//ProductList.js:14 Stalowy1 productsName

const currentPath = window.location.pathname;
const segments = currentPath.split('/').filter(segment => segment !== '');
const lastSegment = segments[segments.length - 1];

console.log(subcategories)


const fetchSubcategories = () => {

   fetch(`  http://localhost:1337/api/series?populate=seria.${lastSegment}.Image`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => setSubcategories(data.data))
    .catch((error) => console.error('Błąd podczas pobierania danych:asadadadasd ', error));
};




  return (
    <>
    <Breadcrumbs myProp="active" />
    <div>
      <h1 className={styles.title}>Subkategorie</h1>
      <section className={styles.products}>
        <div>
        {subcategories ? (
  subcategories.map((subcategory) => (
    <div key={subcategory.id}>
      {subcategory.attributes[categoryName] ? (
        subcategory.attributes[categoryName].map((zeliwneItem) => (
          <div key={zeliwneItem.id}>
            {zeliwneItem[productsName] ? (
              zeliwneItem[productsName].map((emmelineItem) => (
                <div key={emmelineItem.id}>
                  {emmelineItem.Title}
                  <img
        src={`http://localhost:1337${emmelineItem.Image.data.attributes.formats.thumbnail.url}`}
        alt={emmelineItem.Title}
      />
               </div>
              ))
            ) : (
              <div>Missing Emmeline</div>
            )}
          </div>
        ))
      ) : (
        <div>Missing Zeliwne</div>
      )}
    </div>
  ))
) : (
  <div>Loading...</div>
)}


        </div>
      </section>
    </div>


{/* <Series /> */}



    </>
  );
  };
  
  export default ProductOneCategorySub; 
