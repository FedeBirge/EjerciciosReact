import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
  
      <Footer />
    </BrowserRouter>
  );
};

export default App;
