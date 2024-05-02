import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const CartItem = () => {
  return (
    <Flex className=" rounded-lg items-center justify-between bg-fade mb-[27px] lg:mb-[60px] p-[10px] lg:p-0">
      <div className=" w-8/12 lg:w-7/12">
        <Flex className={`lg:gap-[45px] items-center flex-col lg:flex-row`}>
          <div className=" lg:w-[257px] ">
            <Image src={`cartGame.png`} className={` `} />
          </div>
          <div>
            <Flex className={`items-center gap-5`}>
              <h1 className=" font-os font-normal text-[16px] lg:text-[30px] text-white">
                The Last Of Us Part II
              </h1>

              <Flex className={`items-center gap-4`}>
                <Image src={`icon1.png`} className={`w-[19px] lg:w-[30px]`} />
                <div className=" h-[20px] lg:h-[30px] w-[2px] bg-gray-400"></div>
                <Image src={`icon2.png`} className={`w-[19px] lg:w-[30px]`} />
              </Flex>
            </Flex>

            <Flex className={`gap-5 mt-[10px] lg:mt-[19px] `}>
              <button className=" py-[5px] px-[5px]  lg:py-[10px] lg:px-[13px] rounded-lg border-[1px] border-[#28B8E3] font-os font-normal text-[14px] lg:text-[24px] text-[#28B8E3]">
                Save 25%
              </button>
              <button className=" py-[5px] px-[5px] flex items-center lg:py-[10px] lg:px-[13px] rounded-lg border-[1px] border-[#E614FC] font-os font-normal text-[14px] lg:text-[24px] text-[#E614FC]">
                <AiFillThunderbolt /> Instant Delivary
              </button>
            </Flex>

            <Flex className={`items-center gap-5 mt-[10px] lg:mt-[27px]`}>
              <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                PS5
              </span>
              <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                PS5
              </span>
              <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                PS5
              </span>
            </Flex>
          </div>
        </Flex>
      </div>
      <div className=" w-4/12 lg:w-5/12">
        <Flex
          className={` items-end lg:items-center justify-between lg:justify-end  gap-5 lg:gap-[63px] flex-col lg:flex-row`}
        >
          <div>
            <p className=" font-os font-normal text-[#78797d] text-[14px] lg:text-[24px] text-right block">
              Unit Price:
            </p>
            <del className=" font-os font-normal text-[#78797d] text-[14px] lg:text-[24px] text-right block">
              $59.99
            </del>
            <p className=" font-os font-normal text-pink text-[14px] lg:text-[26px] text-right block">
              $35.99
            </p>

            <select
              name=""
              id=""
              className="bg-fade p-[14px] border-[1px] border-white text-white rounded-lg mt-[29px] ml-auto block"
            >
              <option value="">1</option>
            </select>
          </div>

          <div className=" flex items-center flex-col justify-between gap-8">
            <button className=" block h-[50%] py-[22px] px-[11px] lg:py-[54px] lg:px-[20px] rounded-lg border-[1px] border-gray-300">
              {" "}
              <FaRegHeart className=" text-[29px] text-gray-300" />{" "}
            </button>
            <button className=" block h-[50%] py-[22px] px-[11px] lg:py-[54px] lg:px-[20px] rounded-lg border-[1px] border-gray-300">
              {" "}
              <FaTimes className=" text-[29px] text-gray-300" />{" "}
            </button>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};

export default CartItem;
