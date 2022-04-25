import React from "react";
import Home from "./pages/Home";
import Services from "./pages/Services"
import Products from "./pages/Products"
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/products" element={<Products />} />
</Routes>
  );
}

export default App;
