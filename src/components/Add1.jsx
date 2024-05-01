import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Add1 = () => {
  return (
    <section className=" mt-[92px] lg:mt-[161px]">
      <Container>
        <Flex
          className={`items-center justify-center gap-[30px] flex-col lg:flex-row`}
        >
          <div className="w-full lg:w-1/2">
            <Image src={`add1.png`} className={`w-full h-full`} />
          </div>
          <div className="w-full lg:w-1/2">
            <div className=" rounded-lg bg-custom p-[1px] w-full relative">
              <Image
                src={`tag.png`}
                className={`absolute top-0 right-[25px] lg:right-[63px] w-[50px] lg:w-auto`}
              />
              <div className=" bg-fade pt-[26px] px-5 pb-2 lg:pt-[30px] lg:pb-[67px] lg:px-[63px] rounded-lg">
                <Flex className={`items-center gap-4 lg:gap-[30px]`}>
                  <Image
                    src={`/icon1.png`}
                    className={` w-[12px] lg:w-[30px]`}
                  />
                  <Image
                    src={`/icon2.png`}
                    className={` w-[12px] lg:w-[30px]`}
                  />
                  <div className=" h-[20px] lg:h-[30px] w-[2px] bg-gray-400 hidden lg:block"></div>
                  <Image className={`w-[12px] lg:w-auto`} src={`/icon9.png`} />
                  <Image className={`w-[12px] lg:w-auto`} src={`/icon10.png`} />
                </Flex>

                <h1 className=" font-os font-normal text-[26px] lg:text-[68px] text-white mt-[27px]">
                  The Last Of Us Part II
                </h1>

                <Flex className={`items-center gap-[30px] mt-4`}>
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

                  <Flex className={`items-center gap-1 hidden lg:flex`}>
                    <Image
                      src={`/star.png`}
                      className={` w-[12px] lg:w-auto`}
                    />
                    <Image
                      src={`/star.png`}
                      className={` w-[12px] lg:w-auto`}
                    />
                    <Image
                      src={`/star.png`}
                      className={` w-[12px] lg:w-auto`}
                    />
                    <Image
                      src={`/star.png`}
                      className={` w-[12px] lg:w-auto`}
                    />
                    <Image
                      src={`/star.png`}
                      className={` w-[12px] lg:w-auto`}
                    />
                  </Flex>
                </Flex>

                <button className=" mt-3 lg:mt-10 flex items-center font-os font-normal text-[14px] lg:text-[24px] text-white py-3 px-4 bg-custom rounded-lg">
                  {" "}
                  <MdOutlineAddShoppingCart /> Buy Now
                </button>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Add1;
