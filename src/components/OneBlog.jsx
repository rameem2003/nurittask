import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { BsClockHistory } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";

const OneBlog = () => {
  return (
    <div className=" lg:w-[817px] rounded-lg bg-fade py-[14px] px-[10px] lg:py-[27px] lg:px-6 mx-auto mb-5">
      <Flex className={`items-center gap-2`}>
        <div className="w-6/12">
          <Image src={`game1.png`} />
        </div>
        <div className="w-6/12">
          <p className=" font-os font-normal text-[14px] lg:text-[30px] text-white">
            Game Keys The Best Websites for Affordable Gaming Deals
          </p>

          <p className=" font-os font-normal lg:text-[28px] text-[#E614FC] mt-2 lg:mt-[35px]">
            19 Sep, 23
          </p>

          <Flex className={`items-center gap-[22px] mt-[9px] lg:mt-[21px]`}>
            <p className=" font-os font-normal lg:text-[20px] text-[#787a7d] flex items-center gap-1">
              {" "}
              <BsClockHistory /> 3 min read{" "}
            </p>
            <p className=" font-os font-normal lg:text-[20px] text-[#787a7d] lg:flex items-center gap-1 hidden">
              {" "}
              <FaRegEye /> 1230{" "}
            </p>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default OneBlog;
