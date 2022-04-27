import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GifDetail from "./Screen/GifDetail";
import Homescreen from "./Screen/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/gif/:id" element={<GifDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
