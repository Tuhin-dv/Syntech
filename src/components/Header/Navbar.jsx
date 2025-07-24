import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import logo from "../../assets/logo.svg";
import { animateLogoFromTop } from "../../animation/Gsap";
import { FaSortDown } from "react-icons/fa";


function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const serviceTimeoutRef = useRef(null);
  const lastScrollY = useRef(0);
  const logoRef = useRef(null);


  useEffect(() => {
    animateLogoFromTop(logoRef.current);
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

  const handleServiceEnter = () => {
    clearTimeout(serviceTimeoutRef.current);
    setShowServiceModal(true);
  };

  const handleServiceLeave = () => {
    serviceTimeoutRef.current = setTimeout(() => {
      setShowServiceModal(false);
    }, 200); // Delay so user can move to modal
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <nav className="px-4 sm:px-6 lg:px-8 pt-4">
        <div className="max-w-[1760px] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <img ref={logoRef} className="w-[200px]" src={logo} alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex mt-2 items-center justify-center flex-1">
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm text-white border-4 border-[#6acfc8] text-xl font-semibold rounded-full px-10 py-3  border-white/10">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">

                    <NavLink to="/">Home</NavLink>

                    {/* Services with Modal */}
                    <div
                      className="relative"
                      onMouseEnter={handleServiceEnter}
                      onMouseLeave={handleServiceLeave}
                    >
                      <NavLink to="/services" className="relative flex  z-20">
                        Books <FaSortDown size={24} className="pb-1" />
                      </NavLink>

                      {showServiceModal && (
                        <div className="absolute  top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] max-w-[1000px] h-[400px] overflow-y-auto bg-white text-black rounded-2xl shadow-2xl z-30 p-6 transition-all duration-300 animate-fadeIn">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                            {[
                              {
                                title: "Web Design",
                                desc: "Modern and responsive website UI/UX design.",
                                link: "/services/web",
                              },
                              {
                                title: "Mobile App",
                                desc: "Beautiful and fast mobile app solutions.",
                                link: "/services/app",
                              },
                              {
                                title: "Branding",
                                desc: "Unique identity, logo, and brand tone.",
                                link: "/services/branding",
                              },
                              {
                                title: "Consulting",
                                desc: "Expert advice tailored to your business.",
                                link: "/services/consulting",
                              },
                            ].map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.link}
                                className="p-5 rounded-xl  border border-gray-200 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                              >
                                <h4 className="text-2xl border-b-2 pb-4 font-bold mb-1">{item.title}</h4>
                                <p className="text-xl text-gray-600">{item.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h1 className="text-white primary-color p-2 rounded-lg font-bold px-6">
                <button>  Get In Touch</button>
              </h1>
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
          className={`lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
