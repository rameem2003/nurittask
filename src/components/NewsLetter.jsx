import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const NewsLetter = () => {
  return (
    <section className=" mt-[80px] lg:mt-[174px]">
      <Container>
        <div className=" rounded-lg bg-custom p-[1px]">
          <div className="bg-fade rounded-lg py-[14px] px-5 lg:py-[51px] lg:px-[49px]">
            <Flex
              className={`items-center justify-between flex-col lg:flex-row gap-4`}
            >
              <div className=" w-full lg:w-1/2">
                <Flex className={`items-center gap-6`}>
                  <Image src={`mail.png`} />

                  <div>
                    <h1 className=" font-os font-medium text-[14px] lg:text-[38px] text-white">
                      Sign up For Newsletter
                    </h1>
                    <p className=" font-os font-normal lg:text-[24px] text-gray-400">
                      Stay tuned! Receive News and Discounts on your email
                    </p>
                  </div>
                </Flex>
              </div>
              <div className=" w-full lg:w-1/2">
                <Flex className={`items-center gap-[11px]`}>
                  <input
                    className=" w-[60%] lg:w-[80%] py-[15px] px-[21px] bg-white font-os font-normal lg:text-[24px] text-black rounded-lg"
                    type="text"
                    name=""
                    id=""
                    placeholder="your@email.com"
                  />

                  <button className=" w-[40%] lg:w-[20%] py-[17px] px-[30px] font-os font-normal text-[12px] lg:text-[23px] text-white bg-custom rounded-lg">
                    Subscribe
                  </button>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;
