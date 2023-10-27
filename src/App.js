import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contacrt/Contact";
import Biznes from "./pages/biznes/Biznes";
import Opinie from "./pages/Opinie/Opinie";
import Renowacja from "./pages/renowacja/Renowacja";
import Produkt from "./pages/ProductPage/Products";

import Produkty from "./pages/produkty/Products";
import Kategorie from "./pages/produkty/kategorie/Kategorie";
import Subkategorie from "./pages/produkty/kategorie/subkategorie/Subkategorie";
import NotFound from "./pages/notFound/NotFound";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Renowacja' element={<Renowacja />} />
        <Route path='/Produkt' element={<Produkt />} />
        <Route path='/Produkty' element={<Produkty />} />
        <Route path='/produkty/kategorie' element={<Kategorie />} />
        <Route path='/produkty/kategorie/subkategorie' element={<Subkategorie />} />
        <Route path='/Opinie' element={<Opinie />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Biznes' element={<Biznes />} />
        <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
