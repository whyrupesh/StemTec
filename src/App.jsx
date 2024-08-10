import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import IotDevelopmentBoard from "./products/IotDevelopmentBoard";

export default function App() {
  return (
    <>
      <Navbar />
      <hr className=" bg-gray-500" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/IotDevelopmentBoard" element={<IotDevelopmentBoard />} />
      </Routes>
    </>
  );
}
