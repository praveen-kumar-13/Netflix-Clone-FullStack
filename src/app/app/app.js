"use client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Landing from "../pages/landing/landing";
import Player from "../pages/player/player";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/player" element={<Player/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;