import React from "react";
import Flex from "./Flex";
import { FaAngleUp } from "react-icons/fa6";

const Price = () => {
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
              $10 to $25
            </h2>
          </Flex>

          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              $25 to $50
            </h2>
          </Flex>

          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              $50 to $100
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              $100 to $200
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              From{" "}
              <span className=" inline-block mx-2 py-[11px] px-[21px] bg-fade rounded-[15px]">
                $0
              </span>
              to
              <span className=" inline-block mx-2 py-[11px] px-[21px] bg-fade rounded-[15px]">
                $0
              </span>
            </h2>
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Price;
