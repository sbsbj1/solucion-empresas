import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";

function App() {

    const [apiResponse, setApiResponse] = useState("");
  
    const callAPI = async () =>{
      try {
        const response = await fetch("http://localhost:9000/api/");
        const data = await response.json();
        setApiResponse(data.message);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
  
    useEffect(() => {
      callAPI();
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
