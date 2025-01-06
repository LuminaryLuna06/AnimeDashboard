import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Admin from "./pages/Admin";
import AnimePage from "./components/AnimePage/AnimePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="bg-black text-gray-200">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimePage />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
