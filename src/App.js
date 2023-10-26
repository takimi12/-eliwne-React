import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contacrt/Contact";
import Biznes from "./pages/biznes/Biznes";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Biznes' element={<Biznes />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
