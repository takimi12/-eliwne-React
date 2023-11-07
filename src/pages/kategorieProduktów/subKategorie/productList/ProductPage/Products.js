import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";


import telephone from "../../../../../static/ProductPage/telephonepage.svg";
import post from "../../../../../static/ProductPage/postproductpage.svg";
import car from "../../../../../static/ProductPage/cardeliver.svg";


import { useCategory } from '../../../../../CategoryContext';
import FutureSection from "../../../../homepage/FutureSection/FutureSection";
import ProductPageFlorence from "../../../../../components/productPage/ProductPageFlorence";
import ProductPagePopup from "../../../../../components/productPage/ProductPagePopUp";
import Breadcrumbs from "../../../../../components/breadcrumbs/breadcrumbs";

const ProductPageSingle = () => {
  const {setProduct } = useCategory();
  const [subcategories, setSubcategories] = useState(null);

  
  const currentPath = window.location.pathname;
  const segments = currentPath.split('/').filter(segment => segment !== '');
  const lastSegment = segments[segments.length - 1];  
  


  useEffect(() => {
    if (!setProduct) {
      // Jeśli selectedCategory jest puste, użyj lastSegment
      fetchSubcategories(lastSegment);
    } else {
      // W przeciwnym razie, użyj selectedCategory
      fetchSubcategories(setProduct);
    }
  }, [setProduct]);

  const fetchSubcategories = (category) => {
    const headers = {
      Authorization: 'Bearer 9c33c0093885fbe25d1cb8855299d2102449b54e040ef81446c7fd770a52933f51003b3c6287fbabe9d8a23f258e8f18ebbc6ec6732edebe8611b66c643d8f6371b70874e152cfa7db1fcfb0c0e4d934da3e2babc6ebb499df2cb80769478eae5bb2084781913739096e0ae2759a38a5497ec4ed0cdd9c3045490ddd688793fc',
    };

    fetch(`https://api.naukastrapi.pl/api/${lastSegment}?populate=*`, {
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
<section className={styles.products}>
  <div className={styles.container}>
    {subcategories ? (
      subcategories.map((item) => (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperBig}>
              <img src={`https://api.naukastrapi.pl${item.attributes.BigFoto1.data.attributes.url}`} alt="Obrazek produktu" />
              <img src={`https://api.naukastrapi.pl${item.attributes.BigFoto2.data.attributes.url}`} alt="Obrazek produktu" />
              <img src={`https://api.naukastrapi.pl${item.attributes.BigFoto3.data.attributes.url}`} alt="Obrazek produktu" />
              <img src={`https://api.naukastrapi.pl${item.attributes.BigFoto4.data.attributes.url}`} alt="Obrazek produktu" />
            </div>
            <div className={styles.wrapperSmall}>
              <img src={`https://api.naukastrapi.pl${item.attributes.SmallFoto1.data.attributes.url}`} alt="Obrazek produktu" />
              <img src={`https://api.naukastrapi.pl${item.attributes.SmallFoto2.data.attributes.url}`} alt="Obrazek produktu" />
            </div>
          </div>

          <div className={styles.sectionRight}>
            <div className={styles.sticky} key={item.id}>
              <div className={styles.MainFoto}>
                <h1 className="h1-smaller">{item.attributes.Tytul}</h1>
                <h6 className={`h6-600-second ${styles.subtitle}`}>{item.attributes.Wariant}</h6>
              </div>
              <div className={styles.desc}>
                <p className="MainDesc h6-300">{item.attributes.Opis}</p>
              </div>

              <h6 className={`h6-300 ${styles.availableHegiht}`}>Dostępna wysokość</h6>
              <div className={styles.WrapperSquare}>
                <div className="size-parent">
                  <h6 className="h6-400-second">{item.attributes.Wysokosc1}</h6>
                </div>
                <div className="size-parent">
                  <h6 className="h6-400-second">{item.attributes.Wysokosc2}</h6>
                </div>
                <div className="size-parent">
                  <h6 className="body-small-smaller-second">{item.attributes.Wysokosc3}</h6>
                </div>
                <div className="size-parent">
                  <h6 className="h6-400-second">{item.attributes.Wysokosc4}</h6>
                </div>
              </div>

              <div className="MainPrize ">
                <h4 className="h4">{item.attributes.Cena}</h4>
              </div>

              <div className={styles.buttonWrapper}>
                <button type="button" data-button="true">
                  <span className="button-text-big">Skontaktuj się</span>
                </button>
              </div>
           
            <div className={styles.time}>
              <img src={car} alt="Logo" />
              <p className="body-small-smaller-second">Dostawa: 6 - 8 tygodni</p>
            </div>

            <div className={styles.wrapperDelivery}>
              <div className={styles.delivery}>
                <img src={telephone} alt="Logo" />
                <p className="body-small-smaller-second">123123123</p>
              </div>
              <div className={styles.delivery}>
                <img src={post} alt="Logo" />
                <p className="body-small-smaller-second">test@test.pl</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>Loading...</div>
    )}
  </div>
</section>


<FutureSection />
<ProductPageFlorence />
<ProductPagePopup />
    </>
  );
};

export default ProductPageSingle;