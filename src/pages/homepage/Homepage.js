import React from "react";
import Renovation from "./renovation/Renovation";
import Opinion from "./Opinion/Opinion";
import Inspirattion from "./inspiration/Inspiration";


const Home = () => {
  return (
    <>

       {/* <Hero />  
            <MostPopular /> */}
            <Inspirattion />
            {/* <FutureSection /> */}
            <Renovation />
            <Opinion />
            {/* <Featured /> */}
    </>
  );
};

export default Home;
