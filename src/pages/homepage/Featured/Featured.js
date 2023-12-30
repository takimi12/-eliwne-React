import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="Featured">
       <div className="text-center">
        <div className="text-center-setting">
          
          <h3 className="display-second">Nowa seria Neptune
podkreślająca styl Twojego wnętrza</h3>
          <button className=" button" ><Link to="/produkty/Zeliwne/Emmeline">Zobacz serię Emmeline</Link></button>
        </div>
      </div>
</section>  
  );
};

export default Featured;
