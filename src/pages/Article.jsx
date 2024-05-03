import React from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import Flex from "../components/Flex";
import Image from "../components/Image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegUserCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Article = () => {
  return (
    <section>
      <Container>
        <HomeBanner />

        <Flex className={`gap-[71px] mt-[71px] flex-col lg:flex-row`}>
          <div className="w-full lg:w-8/12">
            <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white w-full lg:w-[1024px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s.
            </p>

            <Image
              src={`bigLine.png`}
              className={`w-[50%] lg:w-full mt-[83px] mb-[65px]`}
            />

            <div>
              <h1 className=" font-os font-medium text-[17px] lg:text-[48px] text-white w-full lg:w-[752px]">
                Introducing Reader. A Stunning Experience
              </h1>

              <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white w-full lg:w-[1024px] mt-1 lg:mt-[39px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </p>

              <Image src={`article.png`} className={`mt-[17px] lg:mt-[74px]`} />

              <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white w-full lg:w-[1024px] mt-1 lg:mt-[39px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s.
              </p>

              <Flex className={`gap-[17px] lg:gap-10 mt-[30px] lg:mt-[70px]`}>
                <div className="w-1/2 lg:w-4/12 p-4 lg:py-[37px] px-[35px] rounded-lg bg-fade">
                  <h1 className=" font-os font-normal text-[14px] lg:text-[28px] text-white">
                    Author:
                  </h1>

                  <p className=" font-os font-normal text-[14px] lg:text-[28px] text-white flex items-center gap-1 mt-[19px]">
                    <FaRegUserCircle /> Username
                  </p>
                </div>
                <div className="w-1/2 lg:w-8/12 p-4 lg:py-[37px] px-[35px] rounded-lg bg-fade">
                  <h1 className=" font-os font-normal text-[14px] lg:text-[28px] text-white">
                    Share This Article:
                  </h1>

                  <Flex className={`items-center gap-[9px] mt-[19px]`}>
                    <div className=" h-[29px] w-[29px] lg:h-[49px] lg:w-[49px] rounded-full bg-custom flex items-center justify-center">
                      <FaXTwitter className=" text-white" />
                    </div>
                    <div className=" h-[29px] w-[29px] lg:h-[49px] lg:w-[49px] rounded-full bg-custom flex items-center justify-center">
                      <FaInstagram className=" text-white" />
                    </div>
                    <div className=" h-[29px] w-[29px] lg:h-[49px] lg:w-[49px] rounded-full bg-custom flex items-center justify-center">
                      <FaFacebookF className=" text-white" />
                    </div>
                    <div className=" h-[29px] w-[29px] lg:h-[49px] lg:w-[49px] rounded-full bg-custom flex items-center justify-center">
                      <FaLinkedinIn className=" text-white" />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <div className="py-[22px] px-[21px] lg:py-[36px] lg:px-[41px] bg-fade rounded-lg">
              <h1 className=" font-os font-normal text-[14px] lg:text-[28px] text-white">
                Browse by Tags:
              </h1>

              <div className="mt-4 lg:mt-8">
                <Flex className={`flex-wrap gap-[14px]`}>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    GAME
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    STRAY
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    GAMING NEWS
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    WHICH CONSOLE IS BEST VALUE FOR MONEY?
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    GET YOUR PC GAME KEYS NOW: LATEST
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    IS SIFU FOR PC?
                  </span>
                  <span className=" rounded-lg py-[7px] px-[12px] lg:py-3 lg:px-6 bg-body font-os font-normal text-[12px] lg:text-[17px] text-white">
                    DESTINY
                  </span>
                </Flex>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Article;
