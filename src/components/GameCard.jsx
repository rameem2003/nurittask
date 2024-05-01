import React from "react";
import Image from "./Image";
import { CiHeart } from "react-icons/ci";
import Flex from "./Flex";

const GameCard = () => {
  return (
    <div className=" bg-fade rounded-lg py-4 px-3 w-[158px] lg:w-[393px] mb-4 mx-auto">
      <div className=" relative">
        <Image className={`w-full`} src={`game1.png`} />

        <span className=" absolute top-2 left-2 font-os font-semibold rounded-full lg:text-[24px] p-2 bg-orange-400">
          -25%
        </span>

        <div className=" absolute top-2 right-2 h-[54px] w-[54px] bg-gray-300 rounded-full p-2 flex items-center justify-center">
          <CiHeart size={30} />
        </div>
      </div>

      <div>
        <h1 className=" font-os font-normal text-[14px] lg:text-[28px] text-white">
          Sekiro Shadows Die...
        </h1>

        <Flex className={`items-center justify-between mt-[19px]`}>
          <p className="font-os font-normal text-[14px] lg:text-[28px] text-[#E614FC]">
            $59.99
          </p>

          <Flex className={`items-center gap-1`}>
            <Image className={` w-[15px] lg:w-[25px]`} src={`/star.png`} />
            <Image className={` w-[15px] lg:w-[25px]`} src={`/star.png`} />
            <Image className={` w-[15px] lg:w-[25px]`} src={`/star.png`} />
            <Image className={` w-[15px] lg:w-[25px]`} src={`/star.png`} />
            <Image className={` w-[15px] lg:w-[25px]`} src={`/star.png`} />
          </Flex>
        </Flex>

        <Flex
          className={`items-center justify-center  gap-4 lg:gap-[30px] mt-[44px]`}
        >
          <Image src={`/icon1.png`} className={` w-[12px] lg:w-[30px]`} />
          <Image src={`/icon2.png`} className={` w-[12px] lg:w-[30px]`} />
          <div className=" h-[20px] lg:h-[30px] w-[2px] bg-gray-400 hidden lg:block"></div>
          <Image className={`w-[12px] lg:w-auto`} src={`/icon9.png`} />
          <Image className={`w-[12px] lg:w-auto`} src={`/icon10.png`} />
        </Flex>
      </div>
    </div>
  );
};

export default GameCard;
