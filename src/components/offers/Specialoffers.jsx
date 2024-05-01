import React from "react";
import Flex from "../Flex";
import GameofferCard from "./GameofferCard";

const Specialoffers = () => {
  return (
    <section>
      <div>
        <Flex className={`items-center justify-between mb-5`}>
          <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
            Special Offers
          </h1>

          <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
            Browse All
          </button>
        </Flex>
      </div>

      <div>
        <GameofferCard />
        <GameofferCard />
        <GameofferCard />
        <GameofferCard />
      </div>
    </section>
  );
};

export default Specialoffers;
