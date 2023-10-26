import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contacrt/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
