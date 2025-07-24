import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { animateBall, animateTextFromBottom } from "../../animation/Gsap";


function Banner() {
    const textRef = useRef(null);
    const ballRef = useRef(null);

    useEffect(() => {
        animateTextFromBottom(textRef.current);
        animateBall(ballRef.current);
    }, []);

    return (
        <div
            className="text-white p-8 rounded-xl min-h-screen overflow-hidden relative bg-cover bg-center"
            style={{ backgroundImage: 'url("/bannerImg.svg")' }}
        >
            <div className=" w-full h-full absolute top-0 left-0 z-0"></div>

            <div className="max-w-[1760px] mx-auto relative z-10">
                <div className="mt-[230px] text-center backdrop-blur-sm p-10 ">
                    <h1 ref={textRef} className="text-9xl font-bold text-white leading-[1.2]">
                        <p className="text-3xl border-b-4 rounded-md border-[#296bd5] w-1/3 mx-auto pb-4 font-medium">
                            Explore books you will <span>love </   span>
                        </p>
                        <span className="relative inline-block">
                            Find Your Next <span>Books</span>
                            <span
                                ref={ballRef}
                                className="absolute -bottom-5 left-0 h-1 w-16 bg-white"
                            ></span>
                        </span>
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg mt-4 text-gray-300">
                            Discover a world of knowledge and adventure with our curated selection of books.
                        </p>
                       <div className="p-3 flex mx-auto justify-between w-1/2 rounded-md bg-gray-200 mt-8 text-black">
                        <input className=" w-full bg-gray-200 py-2  outline-none" type="text" name="" id="" placeholder="Find Your Fav Books" />
                        <button className="py-2 px-6 primary-color rounded-md font-bold text-white">Search</button>
                       </div>
                        </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Banner;
