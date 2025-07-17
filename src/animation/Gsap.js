import gsap from "gsap";


// Text from bottom
export const animateTextFromBottom = (target) => {
    gsap.fromTo(
        target,
        {
            y: 150,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.5,
            ease: "power4.out",
        }
    );
};

// Logo from top
export const animateLogoFromTop = (target) => {
    gsap.fromTo(
        target,
        {
            y: -100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.5,
            ease: "power4.out",
        }
    );
};


export const animateBall = (target) => {
    gsap.fromTo(
        target,
        { x: 0 },
        {
            x: 900, // Adjust this based on text width
            duration: 1.5,
            scale: 3,
            borderRadius: "50%",
            delay: 1,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(target, {
                    x: 0,
                    scale: 1.2,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                });
            },
        }
    );
};
