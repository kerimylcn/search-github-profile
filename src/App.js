import { useState , useEffect } from "react";
import './App.css';
import Search from "./Components/Search";
import logo from "./github-logo.jpg";



const App =() => {
   
 
   
  return (
    <div className="App">
      <img src={logo} className="logo"></img>
      <Search />
     
    </div>
  );
}

export default App;
