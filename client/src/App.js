import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className="App-intro">
        {apiResponse}
      </p>
    </div>
  );
}

export default App;
