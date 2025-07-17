import React from "react";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-[#0c0c0e] text-white min-h-screen rounded-3xl mt-12 overflow-hidden font-sans">
            {/* Marquee Section-------------------------------- */}
            <div className="pt-20 border-b border-white/10">
                <Marquee>
                    <div className="flex gap-16">
                        {/* Each item */}
                        <div className="text-white flex items-center gap-5 group cursor-pointer">
                            <h1 className="text-7xl font-bold">Book a Call</h1>
                            <MdArrowOutward
                                className="mt-4 transition-all duration-300 group-hover:-translate-y-3"
                                size={55}
                            />
                        </div>
                        <div className="text-white flex items-center gap-5 group cursor-pointer">
                            <h1 className="text-7xl font-bold">Book a Call</h1>
                            <MdArrowOutward
                                className="mt-4 transition-all duration-300 group-hover:-translate-y-3"
                                size={55}
                            />
                        </div>
                        <div className="text-white flex items-center gap-5 group cursor-pointer">
                            <h1 className="text-7xl font-bold">Book a Call</h1>
                            <MdArrowOutward
                                className="mt-4 transition-all duration-300 group-hover:-translate-y-3"
                                size={55}
                            />
                        </div>
                        <div className="text-white flex items-center gap-5 group cursor-pointer">
                            <h1 className="text-7xl font-bold">Book a Call</h1>
                            <MdArrowOutward
                                className="mt-4 transition-all duration-300 group-hover:-translate-y-3"
                                size={55}
                            />
                        </div>
                        <div className="text-white flex items-center gap-5 group cursor-pointer">
                            <h1 className="text-7xl font-bold">Book a Call</h1>
                            <MdArrowOutward
                                className="mt-4 transition-all duration-300 group-hover:-translate-y-3"
                                size={55}
                            />
                        </div>

                        {/* You can duplicate the above div to repeat */}
                    </div>
                </Marquee>
            </div>
            {/* Grid Section */}
            <div className="max-w-[1780px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-20 px-10 text-center md:text-left">
                {/* Social */}
                <div>
                    <h3 className="text-xl text-blue-400 font-semibold mb-4 tracking-wide">♦ SOCIAL</h3>
                    <ul className="space-y-3 text-white/90 text-lg">
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">WhatsApp</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl text-blue-400 font-semibold mb-4 tracking-wide">♦ QUICK LINKS</h3>
                    <ul className="space-y-3 text-white/90 text-lg">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Google Ads</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-xl text-blue-400 font-semibold mb-4 tracking-wide">♦ LEGAL</h3>
                    <ul className="space-y-3 text-white/90 text-lg">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Terms And Conditions</a></li>
                        <li><a href="#">Impressum</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl text-blue-400 font-semibold mb-4 tracking-wide">♦ GET IN TOUCH</h3>
                    <p className="text-white/90 text-lg">+41 41 562 31 00</p>
                    <p className="text-blue-400 text-lg">office@syn-tech.ch</p>
                </div>
            </div>

            {/* Faded Background Branding */}
            <div className="w-full text-center mt-16 relative">
                <div className="flex gap-8 justify-around items-center text-gray-500 text-9xl font-bold " >
                    <div>S</div>
                    <div>Y</div>
                    <div>N</div>
                    <div>T</div>
                    <div>E</div>
                    <div>C</div>
                    <div>H</div>
                </div>
            </div>

            {/* Branding Section */}
            <div className="relative bg-[#0a0a0c] text-white/70 text-base border-t border-white/10 py-6 px-6 flex flex-col items-center gap-4 text-center">
                <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
                    <span className="text-blue-500">◆</span> SYΝTECH ©2025
                </div>
                <div className="h-0.5 w-32 bg-blue-700" />
                <div className="text-sm">All rights Reserved</div>
            </div>
        </footer>
    );
}

export default Footer;
