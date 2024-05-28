import React from "react";
import { bannerDetail } from "../../config";

const Banner = () => {
  return (
    <div className="w-full flex justify-evenly items-start overflow-hidden h-[250px] sm:h-[430px] relative">
      <img
        src={bannerDetail.bg}
        alt="banner"
        className="w-full  h-[250px] sm:h-[430px] absolute mix-blend-overlay  object-fill sm:object-cover z-[-10]"
      />
      <div className="w-2/4 flex flex-col flex-wrap justify-center items-start px-[10px] sm:px-[50px] md:px-[100px] lg:px-[100px] mt-10 gap-2">
        <p className="text-lg sm:text-5xl text-white font-prompt">
          {bannerDetail.title[0]}
        </p>
        <p className="text-lg sm:text-5xl text-white font-prompt">
          {bannerDetail.title[1]}
        </p>
        <img className="w-[457px]" src={bannerDetail.image} alt="imageBanner" />
        <p className="text-xs sm:text-lg text-white font-prompt ">
          {bannerDetail.detail}
        </p>
      </div>
      <div className="w-2/4  flex flex-row items-center justify-between h-full ">
        <div className="relative w-[100px] h-[100px] mb-32 sm:flex hidden">
          <div className="bg-white w-[39px] h-[36px] rounded-full absolute top-0 left-1 animate-[swing1_1s_ease-in-out_infinite]"></div>
          <div className="bg-white w-[25px] h-[23px] rounded-full absolute top-3 right-0 animate-[swing2_1s_ease-in-out_infinite] delay-75"></div>
          <div className="bg-white w-[25px] h-[23px] rounded-full absolute bottom-0 animate-[swing3_1s_ease-in-out_infinite]"></div>
        </div>
        <div className="relative w-[100px] h-[100px] mb-32 mr-10 sm:flex hidden">
          <div className="bg-white w-[25px] h-[23px] rounded-full absolute top-0 left-1 animate-[swing1_1s_ease-in-out_infinite]"></div>
          <div className="bg-white w-[25px] h-[23px] rounded-full absolute top-3 right-0 animate-[swing2_1s_ease-in-out_infinite] delay-75"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
