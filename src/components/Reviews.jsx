import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import ReviewCard from "./ReviewCard";
const Reviews = () => {
  return (
    <Flex className={`items-center gap-4 lg:gap-[73px] mb-56 mt-[128px]`}>
      <div className="w-[2/12]">
        <h1 className=" font-os font-bold text-[12px] lg:text-[36px] text-white text-center">
          Trustpilot
        </h1>
        <h1 className=" font-os font-bold text-[12px] lg:text-[36px] text-white text-center">
          Reviews
        </h1>

        <Image src={`/line.png`} className={` my-[7px] lg:my-[23px]`} />

        <Flex className={`items-center gap-1 justify-center`}>
          <h3 className=" font-os font-bold text-[16px] lg:text-[47px] text-[#38AAE6]">
            5.0
          </h3>

          <Image src={`star.png`} className={` w-[18px] lg:w-[49px]`} />
        </Flex>
      </div>
      <div className="w-[10/12] overflow-hidden">
        <div className=" w-full slider-container flex gap-[49px] overflow-hidden">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </Flex>
  );
};

export default Reviews;
