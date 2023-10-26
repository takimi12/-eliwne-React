import React from "react";
import { processSteps } from "./data/RenovationProcesData";


const RenovationProces = () => {
    return (
      <>
        <section className="RenovationPageInfo">
          <h4 className="MainSectionHeading h4">Jak wygląda proces Renowacji</h4>
          <div className="ColWrapper">
            {processSteps.map((step, index) => (
              <div className="col-6" key={index}>
                <div className="foto">
                  <img className="photo-section" src={step.image} alt="photosection"/>
                </div>
                <div className="text">
                  <div className="inner-text">
                    <p className="SmallHeading body-small-bigger">{step.number}</p>
                    <h5 className="MainHeading h5">{step.heading}</h5>
                    <h6 className="h6-400">{step.description}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };
  
  export default RenovationProces;
  
  
  