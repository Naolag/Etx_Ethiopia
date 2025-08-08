import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import Sponsors from "./Pages/Sponsors";
import Socials from "./Components/Layout/Socials";




export default function App() {
  return(
    <BrowserRouter>
      <Home/>
      <Agenda/>
      <Sponsors/>
      <Socials/>
    </BrowserRouter>
  )
}
