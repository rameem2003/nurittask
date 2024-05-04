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
import ArticleCard from "../components/ArticleCard";
import BlogArticles from "../components/BlogArticles";

const Article = () => {
  return (
    <section>
      <Container>
        <BlogArticles />
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

        <div className=" rounded-lg bg-custom p-[1px] w-full lg:w-[1057px] mt-[80px] lg:mt-[133px]">
          <div className=" p-6 lg:py-[48px] lg:px-[50px] rounded-lg bg-fade">
            <Flex className={`items-center justify-between mb-5`}>
              <div className="w-[40%]">
                <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                  Recommended Articles
                </h1>
              </div>
              <div className="w-[60%]">
                <Image src={`bigLine.png`} className={` w-full`} />
              </div>
            </Flex>
            <Flex className="mt-4 lg:mt-[44px] flex-wrap">
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </Flex>
          </div>
        </div>

        <div className=" mt-[80px] lg:mt-[121px] rounded-lg bg-fade p-6 lg:py-[48px] lg:px-[50px] w-full lg:w-[1057px] ">
          <Flex className={`items-center justify-between mb-5 `}>
            <div className="w-[40%]">
              <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                Article Comments
              </h1>
            </div>
            <div className="w-[60%]">
              <Image src={`bigLine.png`} className={` w-full`} />
            </div>
          </Flex>

          <Flex className={`gap-[22px] flex-col lg:flex-row`}>
            <div className="relative  w-full  lg:w-[50%]">
              <input
                className=" bg-body w-full py-[9px] px-3  lg:py-4 lg:px-6 rounded-lg  font-os font-normal text-[12px] lg:text-[21px] text-white placeholder:text-gray-400"
                type="text"
                name=""
                id=""
                placeholder="Name:"
              />
            </div>
            <div className="relative w-full  lg:w-[50%]">
              <input
                className=" bg-body w-full py-[9px] px-3  lg:py-4 lg:px-6 rounded-lg  font-os font-normal text-[12px] lg:text-[21px] text-white placeholder:text-gray-400"
                type="text"
                name=""
                id=""
                placeholder="Email:"
              />
            </div>
          </Flex>

          <textarea
            name=""
            id=""
            className=" mt-[22px] h-[178px] bg-body w-full py-[9px] px-3  lg:py-4 lg:px-6 rounded-lg  font-os font-normal text-[12px] lg:text-[21px] text-white placeholder:text-gray-400"
            type="text"
            placeholder="Comment:"
          ></textarea>

          <button className="mt-[27px] py-[6px] px-2 lg:py-[17px] lg:px-[34px] rounded-lg bg-custom font-os font-normal text-[12px] lg:text-[23px] text-white">
            Publish
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Article;
