import React, { useEffect, useState } from "react";
import "./RotatingBorder.css";

const FooterButtons: React.FC = () => {
  const [showFooter, setShowFooter] = useState(true);

  const handleScroll = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setShowFooter(heroBottom < 0); // Show only after hero is out of view
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { text: "REGISTER NOW", href: "#", alwaysShow: true },
    { text: "EXHIBIT NOW", href: "#", alwaysShow: true },
    { text: "HACKATHON", href: "#", alwaysShow: false },
    { text: "WORKSHOP", href: "#", alwaysShow: false },
  ];

  if (!showFooter) return null; // Don't render if hero is visible

  return (
    <footer className="fixed bottom-4 left-1/2  -translate-x-1/2 z-50 w-auto ">
      {/* Outer dark container */}
      <div className=" bg-[#FFFFFF38] rounded-xl px-3 py-2 flex gap-3  justify-center">
        {links.map((link, i) => {
          // Hide Hackathon/Workshop on small screens
          if (!link.alwaysShow) {
            return (
              <a
                key={i}
                href={link.href}
                className="hidden md:block relative rounded-[12px] px-6 py-3 text-white font-[Frizon] text-lg overflow-hidden"
              >
                {/* Rotating gradient background */}
                <span
                  className="absolute -inset-[50%] spin-gradient"
                  aria-hidden="true"
                ></span>

                {/* Inner background */}
                <span className="absolute inset-[2px] rounded-[10px] bg-[#0B1236] hover:bg-[#00ebdc]"></span>

                {/* Text */}
                <span className="relative z-10">{link.text}</span>
              </a>
            );
          }

          return (
            <a
              key={i}
              href={link.href}
              className="relative rounded-[12px] px-6 py-3 text-white font-[Frizon] text-lg overflow-hidden"
            >
              {/* Rotating gradient background */}
              <span
                className="absolute -inset-[50%] spin-gradient"
                aria-hidden="true"
              ></span>

              {/* Inner background */}
              <span className="absolute inset-[2px] rounded-[10px] bg-[#0B1236] hover:bg-[#00ebdc]"></span>

              {/* Text */}
              <span className="relative z-10">{link.text}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default FooterButtons;
