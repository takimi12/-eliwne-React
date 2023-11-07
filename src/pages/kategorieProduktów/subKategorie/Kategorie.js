import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../../../CategoryContext';
import Series from '../../../components/series/Series';
import Breadcrumbs from '../../../components/breadcrumbs/breadcrumbs';
import styles from './Kategorie.module.scss';

function SubKategorie() {
  const { selectedCategory, setSelectedSubCategory } = useCategory();
  const [subcategories, setSubcategories] = useState(null);

  const currentPath = window.location.pathname;
  const segments = currentPath.split('/').filter(segment => segment !== '');
  const lastSegment = segments[segments.length - 1];


  useEffect(() => {
    if (!selectedCategory) {
      // Jeśli selectedCategory jest puste, użyj lastSegment
      fetchSubcategories(lastSegment);
    } else {
      // W przeciwnym razie, użyj selectedCategory
      fetchSubcategories(selectedCategory);
    }
  }, [selectedCategory]);

  const fetchSubcategories = (category) => {
    const headers = {
      Authorization: 'Bearer 9c33c0093885fbe25d1cb8855299d2102449b54e040ef81446c7fd770a52933f51003b3c6287fbabe9d8a23f258e8f18ebbc6ec6732edebe8611b66c643d8f6371b70874e152cfa7db1fcfb0c0e4d934da3e2babc6ebb499df2cb80769478eae5bb2084781913739096e0ae2759a38a5497ec4ed0cdd9c3045490ddd688793fc',
    };

    fetch(`https://api.naukastrapi.pl/api/${category}s?populate=*`, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setSubcategories(data.data))
      .catch((error) => console.error('Błąd podczas pobierania danych: ', error));
  };

  return (
 <>
    <Breadcrumbs />
 <div>
      <h4 className={styles.title}>Subkategorie</h4>
      <section className='products'>
        <div>
          {subcategories ? (
            subcategories.map((subcategory) => (
              <Link
                to={`/produkty/${lastSegment}/${subcategory.attributes.Api}`}
                onClick={() => setSelectedSubCategory(subcategory.attributes.Api)}
                className='subcategory'
                key={subcategory.id}
              >
                <li>
                  <img src={`https://api.naukastrapi.pl${subcategory.attributes.Obrazek.data.attributes.url}`} alt="Obrazek subkategorii" />
                  <h4>{subcategory.attributes.Tytul}</h4>
                </li>
              </Link>
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
}

export default SubKategorie;
