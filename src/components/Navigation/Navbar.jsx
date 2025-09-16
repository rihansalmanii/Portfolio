import React from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between px-5 py-2  items-center">
      <div className="h-24 w-24 object-cover ">
        <img src={logo} alt="" />
      </div>
      <div className="flex items-center gap-12 font-semibold border-2 border-black bg-[#323232] text-white rounded-full px-8 py-5 text-lg">
        <button>Home</button>
        <button>Projects</button>
        <button>Skills</button>
        <button>About</button>
      </div>
      <div>
        <button className="px-8 py-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_15px_rgba(0,0,0,0.3)] text-white font-semibold hover:bg-white/20 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-300 text-lg">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;
