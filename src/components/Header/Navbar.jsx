import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import gsap from "gsap";
import logo from "../../assets/logo.svg";
import { animateLogoFromTop } from "../../animation/Gsap";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const logoRef = useRef(null); // 👈 Ref for logo

  useEffect(() => {
   animateLogoFromTop(logoRef.current); // Animate the logo on mount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-[1760px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <img
                ref={logoRef} // 👈 Apply the ref here
                className="w-[200px]"
                src={logo}
                alt="Logo"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="relative">
                <div className="bg-white text-black text-xl font-semibold rounded-xl px-3 py-3 border border-white/10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white/80 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-8 bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 space-y-2 border border-white/20">
              <div className="flex flex-col gap-8">
                <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
                <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
                <NavLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
