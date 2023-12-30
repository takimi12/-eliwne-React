import React, { useState, useEffect } from "react";
import styles from "./Products.module.scss";


import telephone from "../../../../../static/ProductPage/telephonepage.svg";
import post from "../../../../../static/ProductPage/postproductpage.svg";
import car from "../../../../../static/ProductPage/cardeliver.svg";


import FutureSection from "../../../../homepage/FutureSection/FutureSection";
import ProductPageFlorence from "../../../../../components/productPage/ProductPageFlorence";
import ProductPagePopup from "../../../../../components/productPage/ProductPagePopUp";
import Breadcrumbs from "../../../../../components/breadcrumbs/breadcrumbs";

const ProductPageSingle = () => {

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

 
 console.log(subcategories, 'subkategoria')

  const fetchSubcategories = (category) => {


    fetch(`http://localhost:1337/api/produkts?populate=${category}.Foto.BigFoto`, {
      method: 'GET',

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
             </div>
            <div className={styles.wrapperSmall}>
            </div>
          </div>

          <div className={styles.sectionRight}>
            <div className={styles.sticky} key={item.id}>
              <div className={styles.MainFoto}>
                <h1 className="h1-smaller"></h1>
                <h6 className={`h6-600-second ${styles.subtitle}`}></h6>
              </div>
              <div className={styles.desc}>
                <p className="MainDesc h6-300"></p>
              </div>

              <h6 className={`h6-300 ${styles.availableHegiht}`}>Dostępna wysokość</h6>
              <div className={styles.WrapperSquare}>
                <div className="size-parent">
                  <h6 className="h6-400-second"></h6>
                </div>
                <div className="size-parent">
                  <h6 className="h6-400-second"></h6>
                </div>
                <div className="size-parent">
                  <h6 className="body-small-smaller-second"></h6>
                </div>
                <div className="size-parent">
                  <h6 className="h6-400-second"></h6>
                </div>
              </div>

              <div className="MainPrize ">
                <h4 className="h4"></h4>
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