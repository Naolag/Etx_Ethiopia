import insa from "../../Assets/insa.png"
import Ai from "../../Assets/AI.png"
import uae from "../../Assets/uae.png"
import tele from "../../Assets/tele.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar(){
    const menu = [
        {name:"Home", link:"/"},
        {name:"Agenda", link:"agenda"},
        {name:"Speakers", link:"speakers"},
        {name:"Sponsors/Exibitors", link:"sponsors"},
        {name:"Call for papers", link:"callForPapers"},
        {name:"Competition", link:"competition"},
        {name:"Gallery", link:"gallery"}
    ]
    const [open, setOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [competitionOpen, setCompetitionOpen] = useState(false)

    return (
        <section className="min-w-[320px] fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between bg-[#0E1538]/90 backdrop-blur-sm font-bold">
                {/* Desktop View - Keep as-is */}
                <div className="hidden lg:flex text-[12px] gap-4 mt-2 text-white">
                    <div>
                        <div className="text-center">
                            Hosted By
                        </div>
                        <div className="flex  items-center mt-4 ">
                            <img src={insa} alt="insa logo" className="w-16 h-16 ml-4 mb-4" />
                            <div className="h-16 w-px bg-white mx-2 mb-8"></div>
                            <img src={Ai} alt="AIC logo" className="w-16 h-16 mr-10  mb-4"/>
                        </div>
                    </div>
                    <div className="h-16 w-px bg-white mb-2 mt-10"></div>
                    <div>
                        <p className="text-center">Co-hostes by</p>
                        <img src={uae} alt="uae logo" className="w-48 h-28 mt-2 mb-4" />
                    </div>
                    <div className="h-16 w-px bg-white mt-10"></div>
                    <div>
                        <p>Title Sponsor</p>
                        <img src={tele} alt="tele logo" className="w-36 h-20 mt-4"/>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mr-10 my-auto max-w-full">
                    {menu.map((item, index) => (
                        item.name === "Competition" ? (
                            <div key={index} className="relative group text-[16px] text-white">
                                <div className="flex items-center transition-transform duration-500 hover:scale-125">
                                    <span>Competition</span>
                                    <ChevronDown className="w-4 h-4 text-gray-300" />
                                </div>
                                
                                {/* Desktop dropdown */}
                                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max origin-top-right scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-10">
                                    <div className="bg-[#33373d] text-white p-2 rounded-md shadow-lg text-center whitespace-nowrap">
                                        <Link to="AI & Robotics competition" className="text-xl">AI & Robotics Competition</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to={item.link}
                                key={index}
                                className="text-[16px] text-white transition-transform duration-500 hover:scale-125"
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile View - Logos and Hamburger */}
                <div className="lg:hidden flex items-center justify-between w-full p-4">
                    <div className="flex items-center gap-2">
                        <img src={insa} alt="insa logo" className="w-12 h-12" />
                        <img src={Ai} alt="AIC logo" className="w-8 h-8" />
                        <img src={uae} alt="uae logo" className="w-20 h-10" />
                        <img src={tele} alt="tele logo" className="w-20 h-8" />
                    </div>
                    
                    {/* Hamburger Menu Button */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-[72px] bg-[#0E1538] w-full h-screen z-40">
                    <div className="flex flex-col items-center pt-8 space-y-6">
                        {menu.map((item, index) => (
                            item.name === "Competition" ? (
                                <div key={index} className="w-full text-center">
                                    <button
                                        onClick={() => setCompetitionOpen(!competitionOpen)}
                                        className="text-white text-2xl hover:scale-105 transition-transform duration-300"
                                    >
                                        Competition
                                    </button>
                                    
                                    {/* Mobile Competition Dropdown */}
                                    {competitionOpen && (
                                        <div className="mt-4">
                                            <Link 
                                                to="AI & Robotics competition"
                                                className="block text-white text-xl py-2 hover:text-gray-300"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                AI & Robotics Competition
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className="text-white text-2xl hover:scale-105 transition-transform duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}
