import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import GameCard from "./GameCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "-50px",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        border: "1px solid grey",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <FaAngleRight size={25} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "-50px",
        zIndex: "99999",
        height: "64px",
        width: "64px",
        border: "1px solid grey",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        color: "white",
      }}
      onClick={onClick}
    >
      <FaAngleLeft size={25} />
    </div>
  );
}

const Comingsoon = () => {
  const [slide, setSlide] = useState(0);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
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
    <section className=" mt-[86px] lg:mt-[191px]">
      <Container>
        <div>
          <Flex className={`items-center justify-between mb-5`}>
            <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
              Coming Soon
            </h1>

            <Image src={`bigLine.png`} className={`w-[50%] lg:w-auto`} />

            <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
              Browse All
            </button>
          </Flex>
        </div>

        <div className="mt-[44px] w-full">
          <Slider {...settings}>
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
            <GameCard className={`w-[158px] lg:w-[393px]`} />
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Comingsoon;
