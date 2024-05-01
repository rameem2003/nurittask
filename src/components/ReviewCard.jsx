import React from "react";
import Flex from "./Flex";
import Image from "./Image";

const ReviewCard = () => {
  return (
    <div className="p-[1px] bg-custom rounded-lg w-[300px] lg:w-[540px]">
      <div className=" bg-body rounded-lg py-[13px] px-[15px] lg:py-[49px] lg:px-[46px]">
        <Flex className={`items-center gap-4`}>
          <div className="h-[28px] w-[28px] lg:h-[68px] lg:w-[68px] bg-gray-700 rounded-full p-[1px]">
            <div className=" bg-black p-[1px] w-full h-full rounded-full flex items-center justify-center">
              <Image src={`user.png`} />
            </div>
          </div>

          <div>
            <h2 className=" font-os font-medium text-[12px] lg:text-[24px] text-white">
              Username
            </h2>

            <Flex className={`items-center gap-1`}>
              <Image src={`/star.png`} className={` w-[12px] lg:w-auto`} />
              <Image src={`/star.png`} className={` w-[12px] lg:w-auto`} />
              <Image src={`/star.png`} className={` w-[12px] lg:w-auto`} />
              <Image src={`/star.png`} className={` w-[12px] lg:w-auto`} />
              <Image src={`/star.png`} className={` w-[12px] lg:w-auto`} />
            </Flex>
          </div>
        </Flex>

        <p className=" font-os font-normal text-[12px] lg:text-[22px] text-gray-300 mt-[25px] w-[200px] lg:w-[427px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
