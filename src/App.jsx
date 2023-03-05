import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Navigation from "./Components/Navigation";
import Work from "./Components/Work";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
