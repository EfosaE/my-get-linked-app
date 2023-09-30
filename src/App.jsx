import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Audio } from "react-loader-spinner";

const LazyContact = React.lazy(() => import("./Pages/Contact/Contact"));
const LazyRegister = React.lazy(() => import("./Pages/Register/Register"));

function App() {    
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<Audio/>}>
              <LazyContact />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <React.Suspense fallback={<Audio/>}>
              <LazyRegister/>
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
