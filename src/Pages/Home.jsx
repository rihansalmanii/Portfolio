import React from "react";
import Navbar from "../components/Navigation/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-full bg-[#d8e2e4]">
      <Navbar />
      <div>
        <div className="h-[80vh] w-[90vw] mx-auto my-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex justify-between py-20 px-20">
          <div className="w-[60%]">
            <h1 className="text-[5vw] font-semibold font-[font2] text-[#032647]">Rihan Salmani</h1>
            <p className="mt-5 text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores provident facere incidunt laborum voluptate doloremque nulla sint inventore explicabo!</p>
          </div>
          <div className="h-[90%] w-[30%] object-cover">
            <img src="https://images.unsplash.com/photo-1757659444738-d8173d9d7c62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
