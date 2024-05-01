import React, { useState } from "react";
import Flex from "./Flex";
import Image from "./Image";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "./Container";
const Reviews = () => {
  const [slide, setSlide] = useState(0);
  var settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Flex
        className={`items-center justify-between gap-4 lg:gap-[73px] mt-[128px]`}
      >
        <div className="w-[2/12]">
          <h1 className=" font-os font-bold text-[12px] lg:text-[36px] text-white text-center">
            Trustpilot
          </h1>
          <h1 className=" font-os font-bold text-[12px] lg:text-[36px] text-white text-center">
            Reviews
          </h1>

          <Image src={`/line.png`} className={` my-[7px] lg:my-[23px]`} />

          <Flex className={`items-center gap-1 justify-center`}>
            <h3 className=" font-os font-bold text-[16px] lg:text-[47px] text-[#38AAE6]">
              5.0
            </h3>

            <Image src={`star.png`} className={` w-[18px] lg:w-[49px]`} />
          </Flex>
        </div>
        <div className="w-[10/12] overflow-hidden">
          <Slider {...settings}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Slider>
        </div>
      </Flex>
    </Container>
  );
};

export default Reviews;
