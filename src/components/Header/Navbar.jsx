
import { Code2 } from "lucide-react"
import { useState } from "react"
import { NavLink, Link } from "react-router"
import logo from '../../assets/logo.svg'    

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = (
    <div className="flex flex-col lg:flex-row gap-8">
        <NavLink>About</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>Home</NavLink>
    </div>
  )

  return (
    <div className="fixed top-0 left-0 mt-7  w-full z-50">
      <nav className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1760px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to='/'>
             <img className="w-[200px]" src={logo} alt="" />
            </Link>

            {/* Desktop Nav -----------------------------------------*/}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="relative">
                <div className="bg-white text-black text-xl font-semibold rounded-xl px-3 py-3 border border-white/10">
                  {navLinks}
                </div>
              </div>
            </div>

           

            {/* Mobile button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-4 pt-4 pb-8 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 space-y-2 border border-white/20">
              {navLinks}
            </div>
            <div className="pt-6 space-y-4">



              <button className="w-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-2xl border border-white/20 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/30 hover:to-cyan-600/30 hover:border-white/30 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 shadow-2xl">
                Hire Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
