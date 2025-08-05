import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import Sponsors from "./Pages/Sponsors";




export default function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Agenda/>
      <Sponsors/>
    </BrowserRouter>
  )
}
