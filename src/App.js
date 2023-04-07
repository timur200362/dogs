import React from "react";
import Dogs from "./components/Dogs";
import DogDetails from "./components/DogDetails";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <>
      <Router>                
        <Routes>
          <Route path="/" element={<Dogs />} />
          <Route path="details/:id" element={<DogDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
