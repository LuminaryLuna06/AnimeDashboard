import React from "react";
import { Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import NavBar from "./components/Common/NavBar";
import Footer from "./components/Common/Footer";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Dashboard from "./pages/Dashboard";
import AnimePage from "./components/AnimePage/AnimePage";

import "./App.css";

function App() {
  return (
    <div className="text-gray-200 bg-gradient-to-r from-black to-slate-800 font-sans">
      <NavBar />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimePage />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </SkeletonTheme>
      <Footer />
    </div>
  );
}

export default App;
