import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Navigation from "./Components/Navigation";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="max-w-5xl m-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
