import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "./Container";
const Footer = () => {
  return (
    <section className="mx-[30px] mb-[21px] mt-[80px] lg:mt-[200px] rounded-lg bg-custom p-[1px]">
      <div className="bg-[#1E2127] pt-10 px-7 lg:pt-[151px] lg:px-[111px] rounded-lg">
        <Flex className={` gap-[56px] lg:gap-[155px] flex-col lg:flex-row`}>
          <div className=" w-full lg:w-3/12">
            <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
              Trustful
            </h1>
            <Flex
              className={`items-center lg:items-start justify-center flex-row lg:flex-col gap-5 lg:gap-10`}
            >
              <Image className={`w-[50%] lg:w-auto`} src={`footer1.png`} />
              <Image className={`w-[50%] lg:w-auto`} src={`footer2.png`} />
            </Flex>
          </div>
          <div className="w-4/12">
            <Flex className={` gap-[82px] lg:gap-[125px]`}>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[16px] lg:text-[28px] text-white mb-[27px]">
                  Company
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[16px] lg:text-[28px] text-white mb-[27px]">
                  Orders
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Contact Us
                  </li>
                </ul>
              </div>
            </Flex>
          </div>
          <div className="w-5/12">
            <Flex className={` gap-[57px] lg:gap-[125px] flex-col lg:flex-row`}>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[16px] lg:text-[28px] text-white mb-[27px]">
                  Resources
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[14px] lg:text-[24px] text-gray-400 mt-[17px] lg:mt-[30px]">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
                  Resourses
                </h1>

                <Flex className={`items-center gap-[9px]`}>
                  <div className="h-[49px] w-[49px] rounded-full bg-custom flex items-center justify-center">
                    <FaXTwitter className=" text-white" />
                  </div>
                  <div className="h-[49px] w-[49px] rounded-full bg-custom flex items-center justify-center">
                    <FaInstagram className=" text-white" />
                  </div>
                  <div className="h-[49px] w-[49px] rounded-full bg-custom flex items-center justify-center">
                    <FaFacebookF className=" text-white" />
                  </div>
                  <div className="h-[49px] w-[49px] rounded-full bg-custom flex items-center justify-center">
                    <FaLinkedinIn className=" text-white" />
                  </div>
                </Flex>
              </div>
            </Flex>
          </div>
        </Flex>

        <Flex
          className={`mt-[53px] lg:mt-[203px] items-center justify-start lg:justify-center gap-5 flex-wrap`}
        >
          <Image src={`pay1.png`} />
          <Image src={`pay2.png`} />
          <Image src={`pay3.png`} />
          <Image src={`pay4.png`} />
          <Image src={`pay5.png`} />
          <Image src={`pay6.png`} />
          <Image src={`pay7.png`} />
          <Image src={`pay8.png`} />
          <Image src={`pay9.png`} />
          <Image src={`pay10.png`} />
          <Image src={`pay11.png`} />
        </Flex>

        <Flex
          className={`mt-[116px] pb-[29px] items-start justify-start flex-col lg:flex-row lg:items-center lg:justify-between`}
        >
          <p className=" font-os font-normal text-[14px] lg:text-[22px] text-white order-2 lg:order-1 ">
            Vbrae © Copyright 2023
          </p>

          <Image src={`footerlogo.png`} className={`order-1 lg:order-2`} />

          <p className=" font-os font-normal text-[14px] lg:text-[22px] text-white order-3">
            Privacy Policy | Terms of Service
          </p>
        </Flex>
      </div>
    </section>
  );
};

export default Footer;
