import React from "react";
import Flex from "./Flex";

const MenuBar = () => {
  return (
    <Flex className={` flex-col gap-[5px] block lg:hidden`}>
      <div className="w-[24px] h-[2px] bg-custom"></div>
      <div className="w-[24px] h-[2px] bg-custom"></div>
      <div className="w-[18px] h-[2px] bg-custom"></div>
    </Flex>
  );
};

export default MenuBar;
