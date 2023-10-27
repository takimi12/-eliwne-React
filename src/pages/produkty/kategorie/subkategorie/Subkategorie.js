import React from "react";

import breadcrumb from "../../../../static/Produkt/breadcrumb.svg"; 
import Subfoto1 from "../../../../static/Produkt/Subkategorie/kat1.png";
import Subfoto2 from "../../../../static/Produkt/Subkategorie/kat2.png";
import Header from "../../../../static/Produkt/Subkategorie/HeaderSection.png";
import MostPopular from "../../../homepage/MostPopular/MostPopular";




const ProductOneCategorySub = () => {
  
    const breakpoints = {
      600: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1150: {
        slidesPerView: 4,
      },
    };
  
  
  
    return (
      <>

        <section className="HeroCategorySub">
          <img className="HeroSubImageWrapper" src={Header} alt="header" />
          <div className="location">
            <p className="body-small-smaller"> <a href="/">Strona Główna</a></p>
            <span> <img src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller"><a href="/productS-all-category">Produkty</a></p>
            <span> <img src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller">Grzejniki żeliwne</p>
            <span> <img src={breadcrumb} alt="Logo" /></span>
            <p className="body-small-smaller">Emmeline</p>
          </div>
        </section>
        <section className="HeroCategorySubProduct">
          <div className="wrapper-product"><img src={Subfoto1} alt="Subfoto1" /></div>
          <div className="wrapper-product"><img src={Subfoto2} alt="Subfoto2" /></div>
        </section>
      <MostPopular />

      </>
    );
  };
  
  export default ProductOneCategorySub; 
