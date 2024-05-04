import React, { useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import Container from "./Container";
const Header = () => {
  return (
    <Container>
      <Flex
        className={`  items-center  justify-start lg:justify-center my-[47px] gap-4 lg:gap-[150px] overflow-hidden `}
      >
        <div className=" hover:bg-custom w-[58px] h-[58px] flex items-center justify-center lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white p-2 ">
          <Image className={`w-[20px] lg:w-auto`} src={`icon1.png`} />
        </div>

        <div className="w-[58px] h-[58px] flex items-center justify-center  lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white  p-2  lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon2.png`} />
        </div>

        <div className="w-[58px] h-[58px] flex items-center justify-center lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white  p-2  lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon3.png`} />
        </div>

        <div className="w-[58px] h-[58px] flex items-center justify-center  lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white  p-2  lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon4.png`} />
        </div>
        <div className=" h-[66px] w-[2px] bg-gray-400 hidden lg:block"></div>

        <div className="w-[58px] h-[58px] flex items-center justify-center lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white  p-2 lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon5.png`} />
        </div>

        <div className="w-[58px] h-[58px] flex items-center justify-center  lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white p-2  lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon6.png`} />
        </div>

        <div className="w-[58px] h-[58px] flex items-center justify-center  lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white p-2  lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon7.png`} />
        </div>
        <div className="w-[58px] h-[58px] flex items-center justify-center  lg:h-auto lg:w-auto rounded-lg border-[1px] lg:border-none border-white p-2 lg:p-0">
          <Image className={`w-[20px] lg:w-auto`} src={`icon8.png`} />
        </div>
      </Flex>
    </Container>
  );
};

export default Header;
