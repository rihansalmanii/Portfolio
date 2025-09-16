import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Door = () => {
  const stairLoading = useRef(null);

  useGSAP(
    () => {
      gsap.from('.stair', {
        height: "0%",
        stagger: {
            amount: 0.5
        }
      })

      gsap.to('.stair', {
        height: "100%",
        stagger: {
            amount: 0.5
        }
      })
    }
   
  );

  return (
    <div className="relative h-screen w-full bg-[#FAF9EE]">
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-[5vw] font-semibold text-[#A2AF9B] font-[font1]">
          Welcome.
        </h1>
      </div>

      <div
        ref={stairLoading}
        className="absolute top-[90%] left-[96%] -translate-x-[50%] -translate-y-[50%] flex bg-[#FAF9EE]"
      >
        <div className="stair bg-[#A2AF9B] h-[4vw] w-[1.5vw]"></div>
        <div className="stair bg-[#A2AF9B] h-[4vw] w-[1.5vw]"></div>
        <div className="stair bg-[#A2AF9B] h-[4vw] w-[1.5vw]"></div>
      </div>
    </div>
  );
};

export default Door;
