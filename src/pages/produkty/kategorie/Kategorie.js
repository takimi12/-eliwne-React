import React, { useEffect, useState } from "react";
import kart1 from "../../../static/Produkt/Subkategorie/kat1.png";
import kart2 from "../../../static/Produkt/Subkategorie/kat2.png";
import kart3 from "../../../static/Produkt/Subkategorie/kat3.png";
import kart4 from "../../../static/Produkt/Subkategorie/kat4.png";
import breadcrumb from "../../../static/Produkt/breadcrumb.svg"; 

import MostPopular from "../../../pages/homepage/MostPopular/MostPopular";



const Products = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const consumerKey = "ck_de987438de0a14980b115a1e9170560a61a12956";
    const consumerSecret = "cs_80800b51bc64b69b97db8c7e898acd3ee840a080"; // Dodaj brakujący znak "a" na końcu klucza
    const apiUrl = "https://et2.ergotree.pl/wp-json/wc/v3/products/categories";

    const fetchCategories = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            "Authorization": `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`,
          },
        });

        if (!response.ok) {
          throw new Error("Request failed with status: " + response.status);
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const categoryImages = {
    "Grzejniki żeliwne": kart1,
    "Grzejniki łazienkowe": kart2,
    "Zawory": kart3,
    "Akcesoria": kart4,
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name === "Akcesoria" ||
      category.name === "Grzejniki żeliwne" ||
      category.name === "Grzejniki łazienkowe" ||
      category.name === "Zawory"
  );

  return (
    <>
    <section className="ProductPageOneCategory">
      <div>
      <div className="location">
            <p className="body-small"> <a href="/">Strona Główna</a></p>
            <span> <img src={breadcrumb} alt="Logo" /></span>
            <p className="body-small"><a href="/productS-all-category">Produkty</a></p>
            <span> <img src={breadcrumb} alt="Logo" /></span>
            <p className="body-small">Grzejniki żeliwne</p>
          </div>
        <h4 className="h4">Produkty</h4>
        <ul>
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <div className="ImageWrapper">
                <img className="ProductPageOneCategoryImage" src={categoryImages[category.name]} alt="Logo" />
              </div>
            <h6 className="h6-600">  {category.name}</h6>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <MostPopular />

    </>
  );
};

export default Products;
