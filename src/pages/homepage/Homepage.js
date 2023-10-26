import React from "react";
import Renovation from "./renovation/Renovation";
import Opinion from "./Opinion/Opinion";
import Inspirattion from "./inspiration/Inspiration";
import Featured from "./Featured/Featured";
import FutureSection from "./FutureSection/FutureSection";

const Home = () => {
  return (
    <>

       {/* <Hero />  
            <MostPopular /> */}
            <Inspirattion />
            <FutureSection />
            <Renovation />
            <Opinion />
            <Featured />
    </>
  );
};

export default Home;
