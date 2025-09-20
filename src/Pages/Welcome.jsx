import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Welcome = () => {
  
  const welcomeRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      welcomeRef.current, 
      { y: '0%'},
      { y: '100%', duration: 0.4, delay: 0.4, ease: 'power2.inout'}
    )
  }, []);
  

  return (
    <div ref={welcomeRef} className="fixed h-screen w-full select-none">
      <div className="absolute top-[45%] left-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col items-center leading-[90px]">
        <h1 className="text-[5vw] font-bold font-[roboto] tracking-wider uppercase">Welcome.</h1>
        <p className="leading-[15px] text-center font-semibold text-[#676767]">
          Beyond this threshold lies a world of code, creativity, and curiosity.
          Dare to explore, and discover what’s waiting in the unseen corners of
          my digital realm."
        </p>
      </div>
    </div>
  );
};

export default Welcome;
