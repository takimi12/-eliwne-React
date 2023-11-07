import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../../CategoryContext'; // Zaimportuj useCategory z odpowiedniej ścieżki
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import styles from './Products.module.scss';

function Products() {
  const { setSelectedCategory } = useCategory(); // Użyj hooka useCategory, aby pobrać funkcję setSelectedCategory
  const [categories, setCategories] = useState([]);



  
  useEffect(() => {
    // Twój kod do wykonywania żądania HTTP i pobierania danych
    const headers = {
      Authorization: 'Bearer 9c33c0093885fbe25d1cb8855299d2102449b54e040ef81446c7fd770a52933f51003b3c6287fbabe9d8a23f258e8f18ebbc6ec6732edebe8611b66c643d8f6371b70874e152cfa7db1fcfb0c0e4d934da3e2babc6ebb499df2cb80769478eae5bb2084781913739096e0ae2759a38a5497ec4ed0cdd9c3045490ddd688793fc',
    };

    fetch('https://api.naukastrapi.pl/api/kategorie-grzejnikows?populate=*', {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  }, []);

  return (
    <>
    <Breadcrumbs />
      <h4 className={styles.title}>Produkty</h4>
   
      <section >
        <div>
          {categories.map((category) => (
          
            <Link
              to={`/produkty/${category.attributes.Api}`}
              className='produkty'
              onClick={() => setSelectedCategory(category.attributes.Api)}
              key={category.id}
            >
              <li>
                <img src={`https://api.naukastrapi.pl${category.attributes.Obrazek.data.attributes.url}`} alt="Obrazek kategorii" />
                <h4>{category.attributes.Tytul}</h4>
              </li>
            </Link>
          ))}
        </div>
      </section>
     </>
  );
}

export default Products;
