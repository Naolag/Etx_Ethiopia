import elogo from "../../Assets/etlogo.png";
import Marquee from "react-fast-marquee";
import Etexlogo from "../../Assets/Etexlogo.png"

export default function Hero() {
  const videoUrl = "https://etexethiopia.com/oampewul/2025/03/Mobile-Banner-ETEX.mp4";

  return (
    <section className="overflow-hidden relative">
      {/* YouTube iframe as background */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <video
           className="w-full h-full object-cover md:hidden"
           autoPlay
           loop
           playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
       
       <div className="hidden md:block">
        <iframe
            className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/LpT08rY-Tqw?autoplay=1&mute=1&controls=0&loop=1&playlist=LpT08rY-Tqw&modestbranding=1&showinfo=0"
            title="ETEX 2025 Background"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          </div>
          
      </div>
      
      <div className="relative h-screen flex  ">
      <div className="z-20 mt-[20%] ml-16 ">
            <img src={Etexlogo} className="absolute z-10 "/>
            <div className="flex gap-1">
              <div>
                <div className="text-white  font-frizon text-5xl pt-52">
                  <div className=" ">ETHIOPIAN TECK</div>
                  <div className="">E  X  P  O  <span className="ml-16">2  0  2  5</span></div>
                </div>  
                <div className="h-1 mt-2 w-full bg-white"/>
                <div className="font-serif text-xl text-white font-bold">SHAPPING  ETHIOPIA'S DIGITAL FUTURE</div>
                <div className="flex text-xl gap-2 font-sans text-white items-center">
                  <p>INNOVATION</p>
                  <div className="h-8 w-px bg-white"/>
                  <p>SECURITY</p>
                  <div className="h-8 w-px bg-white"/>
                  <p>TRANSFORMATION</p>
                </div>
              </div>
                 <div className="h-30 w-1 bg-white mt-52"/>
                 <div className="mt-72 ml-2 text-white font-serif text-2xl font-bold">AICC, ADDIS ABABA, ETHIOPIA</div>
            </div>
            
            <div className="font-frizon text-white text-2xl">THE LARGEST TECH EVENT IN EAST IN EAST AFRICA!</div>

          </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Marquee container */}
        <div className="hidden md:block absolute bottom-10 w-full bg-black bg-opacity-60 py-4">
          <Marquee
            speed={100}
            direction="right"
            gradient={false}
            pauseOnHover={false}
          >
            {Array(10).fill(null).map((_, i) => (
              <div key={i} className="flex items-center mx-10 md:mx-20">
                <img src={elogo} alt="etex logo" className="h-20 md:h-32 mr-4" />
                <span className="text-2xl md:text-4xl text-white font-semibold whitespace-nowrap">
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
