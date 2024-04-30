import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="mx-[30px] mb-[21px] rounded-lg bg-custom p-[1px]">
      <div className="bg-[#1E2127] pt-[151px] px-[111px] rounded-lg">
        <Flex className={`gap-[155px]`}>
          <div className="w-[3/12]">
            <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
              Trustful
            </h1>
            <Flex className={`items-center flex-col gap-10`}>
              <Image src={`footer1.png`} />
              <Image src={`footer2.png`} />
            </Flex>
          </div>
          <div className="w-[3/12]">
            <Flex className={`gap-[125px]`}>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
                  Company
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Contact Us
                  </li>
                </ul>
              </div>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
                  Orders
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Contact Us
                  </li>
                </ul>
              </div>
            </Flex>
          </div>
          <div className="w-[6/12]">
            <Flex className={`gap-[125px]`}>
              <div className="w-[1/2]">
                <h1 className=" font-os font-medium text-[28px] text-white mb-[27px]">
                  Company
                </h1>

                <ul>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Home
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Our Story
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
                    Blog
                  </li>
                  <li className=" font-os font-normal text-[24px] text-gray-400 mt-[30px]">
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
      </div>
    </section>
  );
};

export default Footer;
