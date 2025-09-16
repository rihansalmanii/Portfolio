import React from "react";

const Welcome = ({ isHome, setisHome }) => {

    const toggleHome = () => {
        setisHome(true)
    }

  return (
    <div className="relative h-screen w-full bg-[#ECF0F1]">
      <div className="absolute top-[40%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-[5vw] font-semibold text-[#34495E] font-[font1]">
          Welcome.
        </h1>
        <div className="absolute top-3/3 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <button
            onClick={toggleHome}
            className=" bg-[#34495E] text-[#ECF0F1] px-8 py-1 font-semibold rounded-md">Enter</button>
        </div>
      </div>

      <div className="absolute top-[90%] left-[96%] -translate-x-[50%] -translate-y-[50%] flex bg-[#FAF9EE]">
        <div className="stair bg-[#2C3E50] h-[4vw] w-[1.5vw]"></div>
        <div className="stair bg-[#2C3E50] h-[4vw] w-[1.5vw]"></div>
        <div className="stair bg-[#2C3E50] h-[4vw] w-[1.5vw]"></div>
      </div>
    </div>
  );
};

export default Welcome;
