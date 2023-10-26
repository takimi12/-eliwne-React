import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
