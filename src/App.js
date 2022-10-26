import React from 'react';
import {Switch, route, Link} from "react-router-dom"
import {Navbar} from "./components";
import './App.css';


function App() {
     return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">main</div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
