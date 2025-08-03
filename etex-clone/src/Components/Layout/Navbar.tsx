import insa from "../../Assets/logo.png"
import Ai from "../../Assets/AI.png"
import uae from "../../Assets/uae.png"
import tele from "../../Assets/tele.png"
import { Link } from "react-router-dom"
export default function Navbar(){
    const  menu=[
        {name:"Home" , link:"/"},
        {name:"Agenda" , link:"agenda"},
        {name:"Speakers" , link:"speakers"},
        {name:"Sponsors/Exibitors" , link:"sponsors"},
        {name:"Call for papers" , link:"callForPapers"},
        {name:"Competetion" , link:"competetion"},
        {name:"Gallery" , link:"gallery"}
    ]
    return (
        <section className="min-w-[320px] max-h-20">
            <div className="flex justify-between items-center bg-[rgb(18,39,61)] opacity-[60%] font-bold ">
                <div className="flex gap-4 mt-10 text-white">
                    <div>
                        <div className="text-center">
                            Hosted By
                        </div>
                        <div className="flex items-center gap-4">
                            <img src={insa} alt="insa logo" className="w-40 h-40 ml-10" />
                            <div className="h-20 w-px bg-black  mb-6"></div>
                            <img src={Ai} alt="AIC logo" className="w-24 h-20 mr-10"/>
                        </div>
                    </div>
                    <div className="h-20 w-px bg-black mt-14"></div>
                    <div>
                        <p className="text-center">Co-hostes by</p>
                        <img src={uae} alt="uae logo" className="w-80 h-36" />
                    </div>
                    <div className="h-20 w-px bg-black mt-14"></div>
                    <div>
                        <p>Title Sponsor</p>
                        <img src={tele} alt="tele logo" className="w-60 h-40"/>
                    </div>
                </div>
                <div className="mr-10">
                    {menu.map((item,index)=>(
                        <Link to={item.link}
                               key={index}
                               className="ml-8 text-2xl mr-4 text-black hover:text-b duration-300 text-white"
                               >
                                {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
