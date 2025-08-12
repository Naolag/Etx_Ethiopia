import React from "react";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home";
import Agenda from "./Pages/Agenda";
import Sponsors from "./Pages/Sponsors";
import Socials from "./Components/Layout/Socials";
import Footer from "./Components/Layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section id="home"> <Home /> </section>
       <section id="agenda"><Agenda/></section>
       <section id="sposors"><Sponsors/></section>
      </main>
      <Socials />
      <Footer/>
   
    </div>
  );
}
