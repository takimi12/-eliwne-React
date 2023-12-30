import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import KategorieProduktów from "./pages/kategorieProduktów/Products";
import SubKategorie from "./pages/kategorieProduktów/subKategorie/Kategorie";
import ListaProduktów from "./pages/kategorieProduktów/subKategorie/productList/ProductList";
import ProduktDetail from "./pages/kategorieProduktów/subKategorie/productList/ProductPage/Products";
import NotFound from "./pages/notFound/NotFound";
import Header from "./components/header/Header";

// pages
import Renowacja from "./pages/renowacja/Renowacja";
import Biznes from "./pages/biznes/Biznes";
import Opinie from "./pages/Opinie/Opinie";
import Kontakt from "./pages/contacrt/Contact";

const App = () => {
  return (
    <>

          <Header />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/produkty' element={<KategorieProduktów />} />
            <Route path='/produkty/:kategoria' element={<SubKategorie />} />
            <Route path='/produkty/:kategoria/:tytul' element={<ListaProduktów />} />
            <Route path='/produkt/:api' element={<ProduktDetail />} />
            <Route path='/renowacja' element={<Renowacja />} />
            <Route path='/biznes' element={<Biznes />} />
            <Route path='/opinie' element={<Opinie />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
      <Footer />
    </>
  );
};

export default App;
