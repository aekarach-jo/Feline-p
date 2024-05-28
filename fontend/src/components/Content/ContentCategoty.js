import React from "react";
import { cardContent } from "../../config";

const ContentCategoty = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-evenly items-center overflow-hidden h-[300px] sm:h-[350px]">
        <p className="text-2xl sm:text-5xl md:text-7xl text-[#E9E9E9] font-prompt">
          FELINE PURR PET SHOP
        </p>
        <div className="w-full flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center gap-2 sm:gap-6">
          {cardContent.map((data, index) => (
            <div key={index}>
              <img
                src={data}
                alt="cardContent"
                className="w-[240px] sm:w-[395px] md:w-[395px] lg:w-[445px] h-[80px] sm:h-[154px] cursor-pointer hover:scale-[102%] duration-100"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-evenly items-center overflow-hidden h-[300px] sm:h-[350px]">
        
      </div>
    </>
  );
};

export default ContentCategoty;
