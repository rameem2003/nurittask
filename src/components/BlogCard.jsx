import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { BsClockFill } from "react-icons/bs";

const BlogCard = () => {
  return (
    <Flex className=" mx-auto mt-[19px] lg:mt-[81px] py-[14px] px-[10] lg:py-[27px] lg:px-6 rounded-lg bg-fade gap-[13px] lg:gap-[25px] w-full lg:w-[526px] flex-row lg:flex-col">
      <div className="w-[40%] lg:w-full">
        <Image src={`blog.png`} className={`w-full h-full`} />
      </div>

      <div>
        <h1 className=" font-os font-normal text-[16px] lg:text-[30px] text-white w-full  lg:w-[330px]">
          Game Keys The Best Websites for Affordable Gaming Deals
        </h1>

        <p className=" font-os font-normal text-[14px] lg:text-[28px] text-pink mt-2 lg:mt-[35px] mb-[9px] lg:mb-[21px]">
          19 Sep, 23
        </p>

        <span className=" font-os font-normal text-[14px] lg:text-[20px] text-gray-300 flex items-center gap-1">
          {" "}
          <BsClockFill /> 3 min read
        </span>
      </div>
    </Flex>
  );
};

export default BlogCard;
