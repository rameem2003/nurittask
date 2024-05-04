import React, { useState } from "react";
import Flex from "../Flex";
import GameofferCard from "./GameofferCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Specialoffers = () => {
  const [slide, setSlide] = useState(0);

  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    rows: 4,
    slidesToShow: 1,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,

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
    <section>
      <div>
        <Flex className={`items-center justify-between mb-5`}>
          <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
            Special Offers
          </h1>

          <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
            Browse All
          </button>
        </Flex>
      </div>

      <div>
        <Slider {...settings}>
          <GameofferCard />
        </Slider>
      </div>
    </section>
  );
};

export default Specialoffers;
