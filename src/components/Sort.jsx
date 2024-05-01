import React from "react";
import { FaAngleUp } from "react-icons/fa6";
import Flex from "./Flex";
const Sort = () => {
  return (
    <section className=" rounded-lg bg-custom p-[1px] w-full mt-[37px]">
      <div className=" rounded-lg bg-body py-5 px-7">
        <Flex className={`items-center justify-between mb-[21px]`}>
          <h1 className=" font-os font-semibold lg:text-[24px] text-pink">
            Sort by
          </h1>

          <FaAngleUp className=" text-pink text-[25px]" />
        </Flex>

        <div>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Most Recent
            </h2>
          </Flex>

          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Features Items
            </h2>
          </Flex>

          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Best Sellers
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Best Reviews
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Lowest to highest price
            </h2>
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Sort;
