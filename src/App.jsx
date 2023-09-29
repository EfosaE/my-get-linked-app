import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
