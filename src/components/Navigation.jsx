import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { FaSearch, FaHeart, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

const Navigation = () => {
  return (
    <nav className="pt-[54px] ">
      <Container className={`border-b-[1px] border-gray-300 pb-9 `}>
        <Flex className={`items-center justify-between`}>
          <Flex className={`items-center gap-[14px]`}>
            <MenuBar />
            <Link to={`/`}>
              <Image
                src={`/logo.png`}
                className={`w-[112px] lg:w-[213px]`}
                alt={`logo`}
              />
            </Link>
          </Flex>

          <div className=" relative hidden lg:block">
            <input
              className=" w-[854px] py-[13px] px-[23px] bg-fade rounded-lg font-os font-normal text-[22px] text-[#b2bbc2]"
              type="text"
              name=""
              id=""
              placeholder="Search products, sellers, deals..."
            />

            <FaSearch
              className=" absolute top-[50%] translate-y-[-50%] right-3 text-[#b2bbc2]"
              size={23}
            />
          </div>

          <Flex className={`items-center gap-[14px] lg:gap-[38px]`}>
            <AiFillDollarCircle className="text-[#b2bbc2] text-[24px] lg:text-[38px] hidden lg:block" />
            <IoSearchCircle className="text-[#b2bbc2] text-[28px] lg:text-[38px] block lg:hidden" />
            <FaHeart className="text-[#b2bbc2] text-[24px] lg:text-[38px]" />
            <div className=" relative">
              <Flex className=" absolute top-[-15px] right-[-15px] h-7 w-7 bg-custom rounded-full items-center justify-center">
                <span className=" font-os font-bold text-[19px] text-white">
                  2
                </span>
              </Flex>
              <FaShoppingBag className="text-[#b2bbc2] text-[24px] lg:text-[38px]" />
            </div>
            <FaUserCircle className="text-[#b2bbc2] text-[24px] lg:text-[38px]" />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
