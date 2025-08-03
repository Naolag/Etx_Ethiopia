import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import AU from "../../Assets/AU.png";
import ISS from "../../Assets/ISS.png";
import mint from "../../Assets/mint.png";
import MOE from "../../Assets/MOE.png";
import MOT from "../../Assets/MOT.png";
import uae from "../../Assets/uae.png";
import tele from "../../Assets/tele.png";
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const partners = [
    { id: 1, name: "AU", logo: AU },
    { id: 2, name: "ISS", logo: ISS },
    { id: 3, name: "Mint", logo: mint },
    { id: 4, name: "MOE", logo: MOE },
    { id: 5, name: "MOT", logo: MOT },
    { id: 6, name: "UAE", logo: uae },
    { id: 7, name: "Tele", logo: tele },
   
  ];

  return (
    <section className="min-w-[320px] bg-[#0B1236] py-10">
      <div className="container mx-auto px-4">
        <div className="font-frizon text-4xl md:text-5xl text-[#00EBDC] text-center pt-10 mb-10">
          Supporting Partners
        </div>
        <div className="bg-white rounded-lg py-8 px-2">
          <Slider {...settings}>
            {partners.map((partner) => (
              <div key={partner.id} className="px-2">
                <div className="h-20 md: lg:h-60 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-40 max-w-full object-contain px-1 transition-all duration-300 gradient-border"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div id="digital" className=" mx-auto w-[60%] relative">
        <div className="digital-line"></div>
        <div className="digital-line"></div>
        <p className="font-frizon text-2xl md:text-4xl text-[#00EBDC] mt-10">Ethiopia: One of Africa’s Fastest-Growing  Economies, Leading the Digital Revolution!</p>
        <p className="text-white text-2xl font-mono mt-4">Ethiopia is undergoing a rapid digital transformation, driven by its  <span className="text-[#f9f70c]">Digital Ethiopia 2025 Strategy</span> and aligned with the <span className="text-[#f9f70c]">African Union Agenda 2063.</span> This transformation will be at the center of <span className="text-[#f9f70c]">ETEX 2025 – Ethiopia’s premier tech expo</span> – taking place at the <span className="text-[#f9f70c]">Addis International Convention Center in Addis Ababa</span> from <span className="text-[#f9f70c]">May 16–18, 2025.</span> Focused on <span className="text-[#f9f70c]">innovation, security,</span> and <span className="text-[#f9f70c]">transformation</span>, the event reflects the country’s emergence as a regional leader in <span className="text-[#f9f70c]">Cybersecurity, AI, Smart Cities, Fintech, and Tech Education,</span> with the <span className="text-[#f9f70c]">IT services</span> market projected to reach <span className="text-[#f9f70c]">$2.44 billion by 2025.</span></p>
        <p  className="text-white text-2xl font-mono mt-10">Cybersecurity is at the forefront of this transformation, with security solutions and services now accounting for <span className="text-[#f9f70c]">40%</span> of market revenue. Application and data security remain a top priority for <span className="text-[#f9f70c]">70%</span> of organizations, reflecting Ethiopia’s commitment to a resilient digital future.</p>
        <p className="text-white text-2xl font-mono mt-10">The nation’s economic progress is further reinforced by IMF’s recent approval of a <span className="text-[#f9f70c]">$248 million</span> disbursement under the <span className="text-[#f9f70c]">$3.4 billion</span> Extended Credit Facility (ECF) arrangement, supporting Ethiopia’s continued growth and technological advancement</p>
      </div>
    </section>
  );
}

