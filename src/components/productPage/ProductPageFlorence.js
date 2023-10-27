import React from "react";
import Product2 from "../../static/ProductPage/components/Products2.png";


const ProductPageFlorence = () => {
  return (
    <section className="ProductPageFlorence">
      <div className="MainWrapper">
        <div className="MainWrapperText">
          <p className="body-small-bigger">SERIA FLORENCE</p>
          <h2 className="display">Wyjątkowe grzejniki, które podkreślą styl Twojego wnętrza</h2>
          <div>
            <h6 className="h6">
          That`&apos;`s usabiltiy hit focus diarize nail. Shoot board get zoom community panel domains window do wiggle. Up it`&apos;`s latest goto need. Three price no design box read win. Like quick air awareness where at. Meeting must journey expectations churning done contribution.
          </h6>
          </div>
        </div>
      </div>
      <div>
        <img className="MainPhoto" src={Product2} alt="Product2" />
      </div>
    </section>
  );
};

export default ProductPageFlorence;
