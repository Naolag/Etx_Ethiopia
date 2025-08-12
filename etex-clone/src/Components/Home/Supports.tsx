import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

import AU from "../../Assets/AU.webp";
import ISS from "../../Assets/ISS.webp";
import Insa from "../../Assets/Insa.webp";
import mint from "../../Assets/infoTeck.webp";
import MOE from "../../Assets/Moe.webp";
import MOT from "../../Assets/MOT.webp";
import uae from "../../Assets/UAE.webp";
import MOFA from "../../Assets/Ministry-o-FAE.webp";
import mait from "../../Assets/EtAi.webp";
import AI from "../../Assets/Ai.webp";
import et from "../../Assets/et.jpg";
import "./Supports.css";

export default function Supports() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  const partners = [
    { id: 1, name: "AU", logo: AU },
    { id: 2, name: "ISS", logo: ISS },
    { id: 3, name: "Mint", logo: mint },
    { id: 4, name: "MOE", logo: MOE },
    { id: 5, name: "MOT", logo: MOT },
    { id: 6, name: "UAE", logo: uae },
    { id: 7, name: "MOFA", logo: MOFA },
    { id: 8, name: "Insa", logo: Insa },
    { id: 9, name: "Mait", logo: mait },
    { id: 10, name: "Ai", logo: AI },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="min-w-[320px] bg-[#0B1236] py-10">
      <div className="container mx-auto px-4">
        <div className="font-frizon text-4xl md:text-5xl text-[#00EBDC] text-center pt-10 mb-10">
          Supporting Partners
        </div>

        <div
          className="carousel-container mx-auto flex items-center justify-center rounded-4xl w-[85%] h-56 p-[3px] scale-110"
          style={{
            backgroundImage: `url(${et})`,
            backgroundSize: "1100px",
            height: "350px",
            backgroundPosition: "center center",
          }}
        >
          <div className="bg-white w-[99%] h-[99%]">
            <div className="bg-white rounded-lg py-8 px-2">
              <Slider {...settings}>
                {partners.map((partner) => (
                  <div key={partner.id} className="px-2">
                    <div className="h-60 flex items-center justify-center relative">
                      {/* Thin Gradient Line */}
                      <div
                        className={`absolute rounded-xl p-[2px] transition-opacity duration-300 pointer-events-none`}
                        style={{
                          background: "linear-gradient(270deg, #00EBDC, #f9f70c, #00EBDC, #f9f70c)",
                          backgroundSize: "400% 400%",
                          animation: hoveredId === partner.id ? "gradient-animation 3s linear infinite" : "none",
                          opacity: hoveredId === partner.id ? 1 : 0,
                          width: "170px",
                          height: "170px",
                        }}
                      >
                        {/* White inner area so only a thin border shows */}
                        <div className="w-full h-full bg-white rounded-xl"></div>
                      </div>

                      {/* Image */}
                      <div className="bg-white rounded-xl relative z-10 w-[166px] h-[166px] flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-40 w-auto object-contain px-1"
                          onMouseEnter={() => setHoveredId(partner.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>


 
   
    <div className="relative flex items-center justify-center min-h-screen bg-[#0a0e27] overflow-hidden px-4">
      {/* Rotating Lines */}
      <div className="absolute w-[120%] h-[120%] rounded-lg border-t-4 border-[#00EBDC] animate-spin-slow"></div>
      <div className="absolute w-[120%] h-[120%] rounded-lg border-b-4 border-[#f9f70c] animate-spin-reverse-slow"></div>

      {/* Text Container */}
      <div className="max-w-5xl text-center">
        <h1 className="font-frizon text-2xl md:text-4xl text-[#00EBDC] mb-4">
          Ethiopia: One of Africa’s Fastest-Growing Economies, Leading the Digital Revolution!
        </h1>

        <p className="text-white text-xl font-mono mt-4">
          Ethiopia is undergoing a rapid digital transformation, driven by its
          <span className="text-[#f9f70c]"> Digital Ethiopia 2025 Strategy</span> and aligned with the
          <span className="text-[#f9f70c]"> African Union Agenda 2063.</span> This transformation will be at the center of
          <span className="text-[#f9f70c]"> ETEX 2025 – Ethiopia’s premier tech expo</span> – taking place at the
          <span className="text-[#f9f70c]"> Addis International Convention Center in Addis Ababa</span> from
          <span className="text-[#f9f70c]"> May 16–18, 2025.</span> Focused on
          <span className="text-[#f9f70c]"> innovation, security,</span> and
          <span className="text-[#f9f70c]"> transformation</span>, the event reflects the country’s emergence as a regional leader in
          <span className="text-[#f9f70c]"> Cybersecurity, AI, Smart Cities, Fintech, and Tech Education,</span>
          with the <span className="text-[#f9f70c]">IT services</span> market projected to reach
          <span className="text-[#f9f70c]">$2.44 billion by 2025.</span>
        </p>

        <p className="text-white text-xl font-mono mt-10">
          Cybersecurity is at the forefront of this transformation, with security solutions and services now accounting for
          <span className="text-[#f9f70c]"> 40%</span> of market revenue. Application and data security remain a top priority for
          <span className="text-[#f9f70c]"> 70%</span> of organizations, reflecting Ethiopia’s commitment to a resilient digital future.
        </p>

        <p className="text-white text-xl font-mono mt-10">
          The nation’s economic progress is further reinforced by IMF’s recent approval of a
          <span className="text-[#f9f70c]">$248 million</span> disbursement under the
          <span className="text-[#f9f70c]">$3.4 billion</span> Extended Credit Facility (ECF) arrangement, supporting Ethiopia’s continued growth and technological advancement.
        </p>
      </div>
    </div>
  
  
    </section>
  );
}


