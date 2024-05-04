import React from "react";
import Flex from "./Flex";
import { IoMdSearch } from "react-icons/io";

const BlogArticles = () => {
  return (
    <Flex
      className={`mt-[22px] mb-[27px] lg:mt-[58px] lg:mb-[51px] items-start`}
    >
      <div className=" w-1/2 lg:w-8/12">
        <Flex
          className={`items-start gap-[15px] lg:gap-[34px] flex-col lg:flex-row`}
        >
          <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white">
            Blog Articles
          </h1>

          <Flex className={`gap-[11px] lg:gap-[33px]`}>
            <span className="py-[6px] px-2 lg:py-[11px] lg:px-[22px] rounded-lg border-[1px] border-white text-white hover:border-none hover:bg-custom font-os font-normal text-[12px] lg:text-[24px]">
              All
            </span>
            <span className="py-[6px] px-2 lg:py-[11px] lg:px-[22px] rounded-lg border-[1px] border-white text-white hover:border-none hover:bg-custom font-os font-normal text-[12px] lg:text-[24px]">
              Gaming
            </span>
            <span className="py-[6px] px-2 lg:py-[11px] lg:px-[22px] rounded-lg border-[1px] border-white text-white hover:border-none hover:bg-custom font-os font-normal text-[12px] lg:text-[24px]">
              Investment
            </span>
            <span className="py-[6px] px-2 lg:py-[11px] lg:px-[22px] rounded-lg border-[1px] border-white text-white hover:border-none hover:bg-custom font-os font-normal text-[12px] lg:text-[24px]">
              Software
            </span>
          </Flex>
        </Flex>
      </div>
      <div className=" w-1/2 lg:w-4/12">
        <div className="ml-auto relative">
          <input
            className=" w-auto lg:w-[350px] ml-auto block py-[7px] px-[12px] lg:py-4 lg:px-[23px] rounded-lg bg-fade font-os font-normal text-[12px] lg:text-[22px] text-white placeholder:text-[#B2B8C2]"
            type="text"
            name=""
            id=""
            placeholder="Search blog article..."
          />

          <IoMdSearch className=" absolute top-[50%] right-2 translate-y-[-50%] text-[12px] lg:text-[22px] text-[#B2B8C2]" />
        </div>
      </div>
    </Flex>
  );
};

export default BlogArticles;
