import React from "react";
import Navbar from "../components/Navigation/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <div className="z-[10] relative pt-[5rem]">
     <Hero />
     <Footer />
    </div>
  );
};

export default Home;
