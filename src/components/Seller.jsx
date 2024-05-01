import React from "react";
import Flex from "./Flex";
import { FaAngleUp } from "react-icons/fa6";

const Seller = () => {
  return (
    <section className=" rounded-lg bg-custom p-[1px] w-full mt-[37px]">
      <div className=" rounded-lg bg-body py-5 px-7">
        <Flex className={`items-center justify-between mb-[21px]`}>
          <h1 className=" font-os font-semibold lg:text-[24px] text-pink">
            Seller
          </h1>

          <FaAngleUp className=" text-pink text-[25px]" />
        </Flex>

        <div>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>
          <Flex className={`items-center gap-2 mb-5`}>
            <input type="radio" name="" id="" className="" />

            <h2 className=" font-os font-normal lg:text-[24px] text-white">
              Seller Name
            </h2>
          </Flex>

          <p className=" font-os font-normal lg:text-[24px] text-pink underline">
            + See all
          </p>
        </div>
      </div>
    </section>
  );
};

export default Seller;
