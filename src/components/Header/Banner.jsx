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
        <div className="bg-gradient-to-r from-[#020624] via-blue-800 to-blue-900 rounded-3xl min-h-screen overflow-hidden relative">
            <div className="pt-[250px] px-7">
                <h1 ref={textRef} className="text-9xl font-semibold text-white leading-[1.2]">
                    Digital Excellence,<br />
                    <span className="relative inline-block">
                        Swiss Precision
                        {/* RoundBall right under this line */}
                        <span
                            ref={ballRef}
                            className="absolute -bottom-5 left-0 h-4 w-4 bg-white "
                        ></span>
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Banner;
