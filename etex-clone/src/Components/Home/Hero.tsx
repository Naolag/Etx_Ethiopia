import etex from "../../Assets/etex.jpg";
import elogo from "../../Assets/etlogo.png";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${etex})` }}
      >
        {/* Marquee container */}
        <div className="absolute bottom-10 w-full bg-black bg-opacity-50 py-2 z-50">
          <Marquee
            speed={200}
            direction="right"
            gradient={false} // ❌ Turn off weird white/blue fade
          >
            {Array(10).fill(null).map((_, i) => (
              <div key={i} className="flex items-center mx-20">
                <img src={elogo} alt="etex logo" className="h-40 mr-4" />
                <span className="text-5xl text-white font-semibold ">
                  The event is successfully concluded
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
