import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { BsClockFill } from "react-icons/bs";

const ArticleCard = () => {
  return (
    <Flex className=" w-full lg:w-[50%] items-center gap-[13px] lg:gap-[18px] mb-[18px] lg:mb-[57px]">
      <div className="w-3/12">
        <Image src={`cartGame.png`} />
      </div>
      <div className="w-9/12">
        <h1 className=" font-os font-normal text-[17px] lg:text-[24px] text-pink">
          Post title article title name article blog...
        </h1>

        <span className=" mt-3 font-os font-normal text-[14px] lg:text-[20px] text-gray-300 flex items-center gap-1">
          {" "}
          <BsClockFill /> 3 min read
        </span>
      </div>
    </Flex>
  );
};

export default ArticleCard;
