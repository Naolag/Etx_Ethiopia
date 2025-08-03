import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";



export default function App() {
  return(
    <BrowserRouter>
      
      <Home/>
    </BrowserRouter>
  )
}
