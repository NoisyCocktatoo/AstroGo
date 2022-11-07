import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import APOD from "./components/pages/APOD";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/APOD" element={<APOD />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
