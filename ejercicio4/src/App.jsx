import React from "react";

import Main2 from "./components/Main2";
import Main1 from "./components/Main1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div claseName="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/main1" element={<Main1 />} />
          <Route path="/main2" element={<Main2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
