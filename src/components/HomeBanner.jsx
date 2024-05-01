import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const HomeBanner = () => {
  return (
    <section>
      <Container>
        <div className=" relative h-[327px] object-cover lg:h-auto">
          <Image src={`/homebanner.png`} className={`w-full h-full`} />

          <div className=" absolute top-[150px] left-[27px] lg:top-[103px] lg:left-[69px]">
            <Flex className={`items-center gap-[30px]`}>
              <Image src={`/icon1.png`} className={` w-[19px] lg:w-[30px]`} />
              <Image src={`/icon2.png`} className={` w-[19px] lg:w-[30px]`} />
              <div className=" h-[20px] lg:h-[30px] w-[2px] bg-gray-400"></div>
              <Image className={`w-[19px] lg:w-auto`} src={`/icon9.png`} />
              <Image className={`w-[19px] lg:w-auto`} src={`/icon10.png`} />
            </Flex>

            <h1 className=" font-os font-normal text-[26px] lg:text-[68px] text-white my-2 lg:my-[17px]">
              Death Stranding
            </h1>

            <Flex className={`items-center gap-[19px] mt-1 lg:mt-[16px]`}>
              <Flex className={`items-end gap-[9px]`}>
                <p className=" font-os font-normal text-[13px] lg:text-[18px] text-gray-200">
                  From
                </p>
                <del className="font-os font-normal text-[21px] lg:text-[28px] text-gray-200">
                  $70
                </del>
                <span className=" font-os font-normal text-[13px] lg:text-[18px] text-gray-200">
                  to
                </span>
                <p className="font-os font-normal text-[21px] lg:text-[28px] text-[#E614FC]">
                  $15.99
                </p>
              </Flex>

              <Flex className={`items-center gap-1 hidden lg:flex`}>
                <Image src={`/star.png`} />
                <Image src={`/star.png`} />
                <Image src={`/star.png`} />
                <Image src={`/star.png`} />
                <Image src={`/star.png`} />
              </Flex>
            </Flex>

            <button className=" mt-3 lg:mt-[26px] flex items-center font-os font-normal text-[14px] lg:text-[24px] text-white py-3 px-4 bg-custom rounded-lg">
              {" "}
              <MdOutlineAddShoppingCart /> Buy Now
            </button>

            <Flex
              className={`items-end gap-[22px] mt-[66px] lg:mt-[170px] ml-[-20px]`}
            >
              <div className="w-[62px] h-[62px] lg:w-[121px] lg:h-[121px] bg-customOne rounded-lg p-[2px] hover:h-[85px] hover:w-[85px] lg:hover:w-[175px] lg:hover:h-[175px] duration-150 ease-in-out">
                <div className="h-full w-full bg-black p-[1px] rounded-lg">
                  <Image className={`w-full`} src={`slide1.png`} />
                </div>
              </div>
              <div className="w-[62px] h-[62px] lg:w-[121px] lg:h-[121px] bg-customOne rounded-lg p-[2px] hover:h-[85px] hover:w-[85px] lg:hover:w-[175px] lg:hover:h-[175px] duration-150 ease-in-out">
                <div className="h-full w-full bg-black p-[1px] rounded-lg">
                  <Image className={`w-full`} src={`slide2.png`} />
                </div>
              </div>
              <div className="w-[62px] h-[62px] lg:w-[121px] lg:h-[121px] bg-customOne rounded-lg p-[2px] hover:h-[85px] hover:w-[85px] lg:hover:w-[175px] lg:hover:h-[175px] duration-150 ease-in-out">
                <div className="h-full w-full bg-black p-[1px] rounded-lg">
                  <Image className={`w-full`} src={`slide3.png`} />
                </div>
              </div>
              <div className="w-[62px] h-[62px] lg:w-[121px] lg:h-[121px] bg-customOne rounded-lg p-[2px] hover:h-[85px] hover:w-[85px] lg:hover:w-[175px] lg:hover:h-[175px] duration-150 ease-in-out">
                <div className="h-full w-full bg-black p-[1px] rounded-lg">
                  <Image className={`w-full`} src={`slide4.png`} />
                </div>
              </div>
              <div className="w-[62px] h-[62px] lg:w-[121px] lg:h-[121px] bg-customOne rounded-lg p-[2px] hover:h-[85px] hover:w-[85px] lg:hover:w-[175px] lg:hover:h-[175px] duration-150 ease-in-out">
                <div className="h-full w-full bg-black p-[1px] rounded-lg">
                  <Image className={`w-full`} src={`slide5.png`} />
                </div>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
