import React from "react";
import Flex from "../Flex";
import Image from "../Image";

const GameofferCard = () => {
  return (
    <div className=" rounded-3xl bg-fade p-[10px] mb-[21px]">
      <Flex className={`items-center gap-5`}>
        <div className="w-2/12">
          <Image src={`game1.png`} />
        </div>
        <div className="w-10/12">
          <Flex className={`items-end justify-between`}>
            <div>
              <h1 className=" font-os font-normal text-[14px] lg:text-[28px] text-white">
                Far Cry 5
              </h1>
              <Flex className={` items-center gap-[10px]`}>
                <div>
                  <p className=" font-os font-normal text-[13px] lg:text-[18px] text-gray-400">
                    Form
                  </p>
                  <p className=" font-os font-normal text-[13px] lg:text-[18px] text-gray-400">
                    $70 to
                  </p>
                </div>

                <p className=" font-os font-normal lg:text-[28px] text-[#E614FC]">
                  $59.99
                </p>
              </Flex>
            </div>

            <button className=" font-os font-normal lg:text-[24px] text-[#28B8E3] py-2 px-[11px] rounded-lg border-[1px] border-[#28B8E3]">
              Save 25%
            </button>
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default GameofferCard;
