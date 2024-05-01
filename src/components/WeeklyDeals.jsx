import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import GameCard from "./GameCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const WeeklyDeals = () => {
  const [slide, setSlide] = useState(0);
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 1,

          beforeChange: (prev, next) => {
            setSlide(next);
          },
          appendDots: (dots) => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
              }}
            >
              <ul
                style={{
                  margin: "12px auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  cursor: "pointer",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === slide
                  ? {
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      transition: "0.4s",
                      borderRadius: "100%",
                    }
                  : {
                      width: "10px",
                      height: "10px",
                      backgroundColor: "gray",
                      cursor: "pointer",
                      transition: "0.4s",
                      borderRadius: "100%",
                    }
              }
            >
              {/* {i + 1} */}

              {console.log(i)}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <section className="mt-[144px]">
      <Container>
        <div className=" rounded-lg bg-body lg:bg-custom  p-0 lg:p-[1px] ">
          <div className=" bg-body rounded-lg p-0 lg:p-[50px]">
            <Flex className={`items-center justify-between`}>
              <Flex className={` gap-0 lg:gap-[26px]`}>
                <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                  Weekly Deals
                </h1>

                <button className=" font-os font-normal  lg:text-[24px] py-[11px] px-4 border-[1px] text-white border-white rounded-lg hidden lg:block">
                  Browse All
                </button>
              </Flex>

              <Image src={`bigLine.png`} className={` hidden lg:w-full`} />

              <div>
                <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg block lg:hidden">
                  Browse All
                </button>

                <Flex className={`items-center gap-[15px] hidden lg:flex`}>
                  <div className="w-[58px] h-[58px] rounded-lg bg-custom flex items-center justify-center">
                    <p className="font-os font-normal lg:text-[24px] text-white p-[11px]">
                      06
                    </p>
                  </div>

                  <div className=" text-white text-xl">:</div>
                  <div className="w-[58px] h-[58px] rounded-lg bg-custom flex items-center justify-center">
                    <p className="font-os font-normal lg:text-[24px] text-white p-[11px]">
                      06
                    </p>
                  </div>

                  <div className=" text-white text-xl">:</div>

                  <div className="w-[58px] h-[58px] rounded-lg bg-custom flex items-center justify-center">
                    <p className="font-os font-normal lg:text-[24px] text-white p-[11px]">
                      06
                    </p>
                  </div>

                  <div className=" text-white text-xl">:</div>

                  <div className="w-[58px] h-[58px] rounded-lg bg-custom flex items-center justify-center">
                    <p className="font-os font-normal lg:text-[24px] text-white p-[11px]">
                      06
                    </p>
                  </div>
                </Flex>
              </div>
            </Flex>

            <div className="mt-[44px] w-full">
              <Slider {...settings}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WeeklyDeals;
