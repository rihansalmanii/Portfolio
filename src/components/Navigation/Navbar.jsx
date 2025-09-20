import React from "react";
import gsap from 'gsap'
import logo from "../../assets/images/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const fillRef = useRef(null)
  const textRef = useRef(null)


  const handleEnter = () => {
    gsap.to(fillRef.current, {
      y: '0%',
      duration: 0.4
    })

    gsap.to(textRef.current, {
      color: "#fff",
      delay: 0.2,
      duration: 0.4
    })
  }

  const handleLeave = () => {
    gsap.to(fillRef.current, {
      y: '100%',
      duration: 0.4
    })

    gsap.to(textRef.current, {
      color: "#000",
      delay: 0.2,
      duration: 0.4
    })
  }

  

  return (
    <div className="flex justify-between select-none items-center px-8 pt-5 pb-4 font-[roboto] border-b-[1px] border-[#cbcbcb] shadow-md bg-white/30 backdrop-blur-md z-[10]">
      <div className="font-bold text-2xl leading-[1.4vw] ">
        <div>Rihan</div>
        <div>Salmani</div>
      </div>
      
      <div className="flex gap-5 text-md font-semibold text-black">
        <Link to="/home"><button className="nav-link hover:font-semibold">Home</button></Link>
        <Link to="/projects"><button className="nav-link hover:font-semibold">Projects</button></Link>
        <Link to="/skills"><button className="nav-link hover:font-semibold">Skills</button></Link>
        <Link to="/contact"><button className="nav-link hover:font-semibold">Contact</button></Link>
        
        
        
      </div>

      <div className="relative overflow-hidden border-2 border-black rounded-full">
        <a href=""><button ref={textRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative z-[10] px-5 py-3 rounded-full font-semibold">Connect</button></a>
        <div ref={fillRef} className="absolute display-none top-0 z-0 left-0 h-full w-full translate-y-full rounded-full bg-black "></div>
      </div>

    </div>
  );
};

export default Navbar;
