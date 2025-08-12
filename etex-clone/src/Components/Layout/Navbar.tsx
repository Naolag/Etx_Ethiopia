import nav from "../../Assets/nav.webp"
import { useState } from "react"
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Agenda", link: "#agenda" },
    { name: "Speakers", link: "#speakers" },
    { name: "Sponsors/Exibitors", link: "#sponsors" },
    { name: "Call for papers", link: "#callForPapers" },
    { name: "Competition", sublink: "/ai-competition" }, // no direct link
    { name: "Gallery", link: "#gallery" },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [competitionOpen, setCompetitionOpen] = useState(false)

  // new state for desktop hover delay
  const [desktopCompOpen, setDesktopCompOpen] = useState(false)
  let hideTimeout: ReturnType<typeof setTimeout>

  // helper: check if in md range (JS-only fallback, for simple client-side)
  const isMd = window.innerWidth >= 768 && window.innerWidth < 1024
  const isSm = window.innerWidth < 768

  return (
    <section className="min-w-[320px] fixed top-0 left-0 right-0 z-50">
      <div className="md:flex bg-[#0B123670] backdrop-blur-sm font-bold items-center   py-3 mr-4">
        <img src={nav} alt="nav logos" className="md:max-w-[80%] lg:max-w-[30%] lg:h-auto lg:mr-40 ml-2" />
        {/* Hamburger menu always for <lg */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white block lg:hidden ml-[95%] md:ml-28"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      

      {/* Desktop menu for lg+ */}
      <div className="hidden lg:flex justify-center  py-3 space-x-8 ml-auto mr-10 flex-wrap">
        {menu.map((item, idx) =>
          item.name === "Competition" ? (
            <div
              key={idx}
              className="relative text-white text-2xl cursor-pointer"
              onMouseEnter={() => {
                clearTimeout(hideTimeout)
                setDesktopCompOpen(true)
              }}
              onMouseLeave={() => {
                hideTimeout = setTimeout(() => setDesktopCompOpen(false), 200) // delay before hide
              }}
            >
              <div className="flex items-center gap-1">
                <span>{item.name}</span>
                <ChevronDown size={16} />
              </div>
              {desktopCompOpen && (
                <div className="absolute top-full left-0 bg-[#1a1f3c] text-sm shadow-md mt-2 rounded">
                  <a
                    href={item.sublink}
                    className="block px-4 py-2 hover:bg-[#2a3053] transition"
                  >
                    AI Competition
                  </a>
                </div>
              )}
            </div>
          ) : (
            <a
              key={idx}
              href={item.link}
              onClick={(e) => {
                if (item.link === "/") {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
              className="text-white text-2xl hover:scale-105 transition-all"
            >
              {item.name}
            </a>
          )
        )}
      </div>

      </div>

      {/* Mobile + md hamburger menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden  flex flex-col items-center p-4 gap-3 z-50">
          {menu.map((item, idx) => {
            if (isSm) {
              
              if (item.name === "Competition") {
                return (
                  <div key={idx} className="w-full text-white">
                    <a
                      href="/hackathon"
                      className="block px-4 py-2 text-center hover:bg-[#2a3053] transition"
                    >
                      Hackathon
                    </a>
                    <a
                      href="/workshop-competition"
                      className="block px-4 py-2 text-center hover:bg-[#2a3053] transition"
                    >
                      Workshop Competition
                    </a>
                    <a
                      href={item.sublink}
                      className="block px-4 py-2 text-center hover:bg-[#2a3053] transition"
                    >
                      AI Competition
                    </a>
                  </div>
                )
              }
            }

            if (isMd && item.name === "Competition") {
              // md: Competition → dropdown with only AI Competition
              return (
                <div key={idx} className="text-white w-full">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setCompetitionOpen(!competitionOpen)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </div>
                  {competitionOpen && (
                    <div className="ml-4 mt-2 bg-[#1a1f3c] rounded">
                      <a
                        href={item.sublink}
                        className="block px-4 py-2  hover:bg-[#2a3053] transition"
                      >
                        AI Competition
                      </a>
                    </div>
                  )}
                </div>
              )
            }

            // all other items
            return (
              <a
                key={idx}
                href={item.link}
                onClick={(e) => {
                  if (item.link === "/") {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  setMobileMenuOpen(false)
                }}
                className="text-white hover:scale-105 transition-all"
              >
                {item.name}
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}
