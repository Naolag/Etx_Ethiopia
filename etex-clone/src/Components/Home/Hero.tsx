import elogo from "../../Assets/etlogo.png";
import Marquee from "react-fast-marquee";
import Etexlogo from "../../Assets/Etexlogo.png"
import organised from "../../Assets/Organised.webp"

export default function Hero() {
  const videoUrl = "https://etexethiopia.com/oampewul/2025/03/Mobile-Banner-ETEX.mp4";

  return (
    <section id="hero" className="overflow-hidden relative min-w-[320px]">
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
      <div className="z-20 mt-[20%] ml-4 ">
        <div className=" mt-60 sm:mt-40 md:mt-10 2xl:mt-0">
            <img src={Etexlogo} className="w-96 h-60 md:w-[765px] xl:w-[1230px] xl:top-20 2xl:top-40 xl:h-auto absolute"/>
            <div>
            <div className=" flex gap-1">
              <div>
                <div className="text-white  font-frizon text-[15px] sm:text-[18px] md:text-4xl xl:text-6xl mt-36 sm:mt-32 xl:mt-10">
                  <div className=" ">ETHIOPIAN TECK</div>
                  <div className="">E&nbsp;&nbsp;X&nbsp;&nbsp;P&nbsp;&nbsp;O&nbsp;&nbsp;2&nbsp;&nbsp;0&nbsp;&nbsp;2&nbsp;5</div>
                </div>  
                <div className="h-1  mt-2 w-full bg-white"/>
                <div className="font-serif text-[7px] md:text-[16px] xl:text-[27px] text-white font-bold">SHAPPING  ETHIOPIA'S DIGITAL FUTURE</div>
                <div className="flex text-[6px] sm:text-[7px] md:text-[16px] xl:text-[26px] gap-1 font-sans text-white  items-center">
                  <p>INNOVATION</p>
                  <div className="h-2 md:h-4 w-px bg-white"/>
                  <p>SECURITY</p>
                  <div className="h-2 w-px md:h-4 bg-white"/>
                  <p>TRANSFORMATION</p>
                </div>
              </div>
                 <div className="mt-36 xl:mt-14 w-1 ml-2 bg-white "/>
                 <div className=" ml-2 text-white font-serif text-[9px] sm:text-[13px] md:text-[18px] xl:text-3xl font-bold mt-48 md:mt-52 xl:mt-40">AICC, ADDIS ABABA, ETHIOPIA</div>
                 </div>
            </div>
          </div>
            <div className="font-frizon text-white text-lg md:text-2xl xl:text-5xl ">THE LARGEST TECH EVENT  IN EAST AFRICA!</div>
            <img src={organised} alt=" organised by" className="md:absolute right-10 bottom-0  w-48 md:w-80 mb-2 mr-10 mt-4" />
            <a href="https://www.google.com/maps/place/2VF2%2BJFM+Addis+International+Convention+Center+(AICC),+%E1%8A%A0%E1%8B%B2%E1%88%B5+%E1%8A%A0%E1%89%A0%E1%89%A3/@9.0240862,38.851157,14z/data=!4m6!3m5!1s0x164b91fe5695e94f:0xcb636290ea972b7d!8m2!3d9.0240862!4d38.851157!16s%2Fg%2F11gxslb_jf?g_ep=Eg1tbF8yMDI1MDgwNF8wIJvbDyoASAJQAQ%3D%3D" 
             target="_blank" rel="noopener noreferrer" className="md:hidden absolute right-4 bottom-4    flex  border-2 w-48  py-2 items-center justify-center gap-1 rounded-3xl  text-bold  text-white hover:bg-white hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF" style={{ transform: 'rotate(-45deg)', transformOrigin: 'center' }}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
</svg>
              Venue Location</a>

          </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Marquee container */}
        <div className="hidden md:block absolute  bottom-2 w-full  bg-[#0E1538]/90 backdrop-blur-sm z-50 mb-8">
          <Marquee
            speed={100}
            direction="right"
            gradient={false}
            pauseOnHover={false}
          >
            {Array(10).fill(null).map((_, i) => (
              <div key={i} className="flex items-center mx-10 md:mx-20">
                <img src={elogo} alt="etex logo" className="md:h-20 lg:h-32 mr-4" />
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
