import React, { useState } from "react";
import Image from "./Image";
import Flex from "./Flex";
import Container from "./Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Header = () => {
  const [slide, setSlide] = useState(0);

  let settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,

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
