import React from "react";
import Flex from "./Flex";
import { FaAngleUp } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

const Delivary = () => {
  return (
    <section className=" rounded-lg bg-custom p-[1px] w-full">
      <div className=" rounded-lg bg-body py-5 px-7">
        <Flex className={`items-center justify-between mb-[21px]`}>
          <h1 className=" font-os font-semibold lg:text-[24px] text-pink">
            Delivary
          </h1>

          <FaAngleUp className=" text-pink text-[25px]" />
        </Flex>

        <div>
          <Flex className={`items-center justify-between mb-6`}>
            <Flex className={`items-center gap-[6px]`}>
              <AiFillThunderbolt className=" text-white text-[25px]" />
              <h2 className=" font-os font-normal lg:text-[24px] text-white">
                Instant Delivery
              </h2>
            </Flex>

            <div className="w-[42px] h-[24px] rounded-full bg-custom relative">
              <div className="w-[14px] h-[14px] bg-white rounded-full absolute top-[50%] translate-y-[-50%] right-1"></div>
            </div>
          </Flex>

          <Flex className={`items-center justify-between mb-6`}>
            <Flex className={`items-center gap-[6px]`}>
              <AiFillThunderbolt className=" text-white text-[25px]" />
              <h2 className=" font-os font-normal lg:text-[24px] text-white">
                Instant Delivery
              </h2>
            </Flex>

            <div className="w-[42px] h-[24px] rounded-full bg-custom relative">
              <div className="w-[14px] h-[14px] bg-white rounded-full absolute top-[50%] translate-y-[-50%] right-1"></div>
            </div>
          </Flex>
        </div>
      </div>
    </section>
  );
};

export default Delivary;
