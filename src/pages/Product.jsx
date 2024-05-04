import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import { BiSolidError } from "react-icons/bi";
import { FaShareNodes } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdAddShoppingCart, MdOutlineAddShoppingCart } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ReviewCard from "../components/ReviewCard";
import Newarrivals from "../components/Newarrivals";
import Header from "../components/Header";

const Product = () => {
  const [slide, setSlide] = useState(0);

  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          rows: 2,
          slidesToShow: 1,
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
    <section>
      <Container>
        <Header />
        <Flex className={`gap-[30px] flex-col lg:flex-row`}>
          <div className=" w-full lg:w-1/2">
            <Image src={`/product.png`} className={` w-full`} />

            <Flex
              className={`items-center gap-2 lg:py-[10px] lg:px-[15px] rounded-lg border-[1px] border-white mt-[30px]`}
            >
              <FaInfoCircle className=" text-[20px] text-white" />
              <p className=" font-os font-normal text-[12px] lg:text-[22px] text-white">
                This is a Playstation Account Access (This is not code/key)
                Learn More
              </p>
            </Flex>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className=" rounded-lg bg-custom p-[1px]">
              <div className=" rounded-lg lg:py-[23px] lg:px-[58px] bg-fade">
                <Flex className={`items-center justify-center gap-1 mb-5`}>
                  <BiSolidError className="text-[23px] text-white" />
                  <h1 className=" font-os font-normal text-[14px] lg:text-[23px] text-white text-center">
                    Can not be activated in Sweden
                  </h1>
                </Flex>

                <div className="w-full h-[1px] bg-gray-500"></div>

                <Flex
                  className={`items-center justify-between mt-[14px] lg:mt-[34px]`}
                >
                  <Flex className={`items-center gap-5`}>
                    <Flex
                      className={` py-[6px] px-[9px] lg:py-3 lg:px-5 bg-body rounded-full`}
                    >
                      <Image src={`/star.png`} />
                      <Image src={`/star.png`} />
                      <Image src={`/star.png`} />
                      <Image src={`/star.png`} />
                      <Image src={`/star.png`} />
                    </Flex>

                    <h3 className=" font-os font-normal text-[13px] lg:text-[23px] text-[#787A7D]">
                      5.0 (457 Reviews)
                    </h3>
                  </Flex>

                  <div className="h-[25px] w-[25px] lg:h-[54px] lg:w-[54px] bg-body rounded-full flex items-center justify-center">
                    <FaShareNodes className=" text-[14px] lg:text-[23px] text-white" />
                  </div>
                </Flex>

                <h1 className=" font-os font-normal text-[24px] lg:text-[58px] text-white mb-2 lg:mb-[25px]">
                  The Last Of Us Part II
                </h1>

                <div>
                  <Flex
                    className={`items-center gap-[14px] mb-[9px] lg:mb-[18px]`}
                  >
                    <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                      PS5
                    </span>

                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                  </Flex>

                  <Flex
                    className={`items-center gap-[14px] mb-[9px] lg:mb-[18px]`}
                  >
                    <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                      PS5
                    </span>

                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                  </Flex>

                  <Flex
                    className={`items-center gap-[14px] mb-[9px] lg:mb-[18px]`}
                  >
                    <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                      PS5
                    </span>

                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                  </Flex>

                  <Flex
                    className={`items-center gap-[14px] mb-[18px] lg:mb-[50px]`}
                  >
                    <span className="py-1 px-[5px] lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom">
                      PS5
                    </span>

                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                    <span className="py-1 px-[5px] border-[1px] border-white lg:py-[10px] lg:px-3 rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] ">
                      PS5
                    </span>
                  </Flex>
                </div>

                <div className="w-full h-[1px] bg-gray-500"></div>

                <Flex className={`gap-5 mt-[42px] hidden lg:flex`}>
                  <button className="w-[20%]  py-3 rounded-lg border-[1px] border-[#28B8E3] font-os font-normal text-[24px] text-[#28B8E3]">
                    Save 25%
                  </button>
                  <button className="w-[40%]  py-3 rounded-lg border-[1px] border-[#E614FC] font-os font-normal text-[24px] text-[#E614FC]">
                    Instant Delivary
                  </button>
                  <button className="w-[40%]  py-3 rounded-lg border-[1px] border-white font-os font-normal text-[24px] text-white">
                    Ask Question
                  </button>
                </Flex>

                <Flex
                  className={`mt-[18px] items-center justify-center hidden lg:flex`}
                >
                  <p className=" font-os font-normal text-[24px] text-white text-center">
                    6 More Offers Available Starting From $55.99
                  </p>
                  <FaAngleDown className=" text-white" />
                </Flex>

                <div className="w-full h-[1px] bg-gray-500 mt-[29px]"></div>

                <Flex
                  className={`items-center justify-between mt-[31px] flex-wrap lg:flex-nowrap`}
                >
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

                  <button className=" py-2 px-[95px] lg:py-3 lg:px-[27px] rounded-lg font-os font-normal text-black text-[14px] lg:text-[24px] bg-customTwo">
                    Grab 15% OFF
                  </button>

                  <select
                    name=""
                    id=""
                    className="bg-fade p-[14px] border-[1px] border-white text-white rounded-lg"
                  >
                    <option value="">1</option>
                  </select>

                  <button className=" py-2 px-[95px] lg:py-3 lg:px-[22px] rounded-lg font-os font-normal text-white text-[14px] lg:text-[24px] bg-custom flex items-center">
                    <MdAddShoppingCart /> Buy Now
                  </button>
                </Flex>

                <div className="w-full h-[1px] bg-gray-500 mt-[42px] hidden lg:block"></div>

                <Flex
                  className={`items-center justify-center gap-1 mt-[23px] hidden lg:flex`}
                >
                  <FaInfoCircle className=" text-[20px] text-white" />
                  <p className=" font-os font-normal text-[22px] text-white">
                    How to activate
                  </p>
                </Flex>
              </div>
            </div>
          </div>
        </Flex>

        <Flex
          className={` mt-[46px] lg:mt-[176px] gap-[30px] flex-col-reverse lg:flex-row`}
        >
          <div className=" w-full lg:w-1/2">
            <div>
              <h1 className=" font-os font-normal text-[16px] lg:text-[30px] text-white">
                Description
              </h1>

              <p className=" font-os font-normal text-[16px] lg:text-[22px] text-white mt-[19px] mb-[14px]">
                Five years after their perilous journey across post-pandemic
                America, Ellie and Joel settle in Jackson, Wyoming. Life in a
                thriving community of{" "}
              </p>

              <a
                href=""
                className=" font-os font-normal text-[14px] lg:text-[24px] text-pink underline"
              >
                Read More
              </a>
            </div>

            <div className="w-full h-[1px] bg-gray-500 my-[41px]"></div>

            <div>
              <Flex className={`mb-4`}>
                <div className="w-3/12">
                  <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white">
                    Release Date:
                  </p>
                </div>
                <div className="w-9/12">
                  <Flex className={` gap-1 lg:gap-[11px]`}>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      2018-07-30
                    </span>
                  </Flex>
                </div>
              </Flex>

              <Flex className={`mb-4`}>
                <div className="w-3/12">
                  <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white">
                    Genre:
                  </p>
                </div>
                <div className="w-9/12">
                  <Flex className={`gap-1 lg:gap-[11px]`}>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                  </Flex>
                </div>
              </Flex>
              <Flex className={`mb-4`}>
                <div className="w-3/12">
                  <p className=" font-os font-normal text-[14px] lg:text-[24px] text-white">
                    Genre:
                  </p>
                </div>
                <div className="w-9/12">
                  <Flex className={`gap-1 lg:gap-[11px]`}>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                    <span className=" py-3 px-5 rounded-lg bg-fade font-os font-normal text-[14px] lg:text-[24px] text-white">
                      Adventure
                    </span>
                  </Flex>
                </div>
              </Flex>
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className=" bg-fade py-[22px] px-[14px] lg:py-[31px] lg:px-[42px] rounded-lg">
              <h1 className=" font-os font-normal text-[16px] lg:text-[30px] text-white mb-[30px]">
                Offers from other sellers
              </h1>

              <Flex className={`items-center gap-[14px] mb-[22px]`}>
                <div>
                  <p className=" w-auto lg:w-[280px] font-os font-normal text-[12px] lg:text-[23px] text-black py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-white">
                    Sellername
                  </p>
                </div>

                <Flex className=" items-center gap-1 font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                  <Image src={`star.png`} />
                  <p>100% of 281 ratings</p>
                </Flex>

                <div>
                  <p className=" font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                    $59.99
                  </p>
                </div>

                <button className="font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-custom">
                  <MdOutlineAddShoppingCart />
                </button>
              </Flex>
              <Flex className={`items-center gap-[14px] mb-[22px]`}>
                <div>
                  <p className=" w-auto lg:w-[280px] font-os font-normal text-[12px] lg:text-[23px] text-black py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-white">
                    Sellername
                  </p>
                </div>

                <Flex className=" items-center gap-1 font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                  <Image src={`star.png`} />
                  <p>100% of 281 ratings</p>
                </Flex>

                <div>
                  <p className=" font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                    $59.99
                  </p>
                </div>

                <button className="font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-custom">
                  <MdOutlineAddShoppingCart />
                </button>
              </Flex>
              <Flex className={`items-center gap-[14px] mb-[22px]`}>
                <div>
                  <p className=" w-auto lg:w-[280px] font-os font-normal text-[12px] lg:text-[23px] text-black py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-white">
                    Sellername
                  </p>
                </div>

                <Flex className=" items-center gap-1 font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                  <Image src={`star.png`} />
                  <p>100% of 281 ratings</p>
                </Flex>

                <div>
                  <p className=" font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                    $59.99
                  </p>
                </div>

                <button className="font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-custom">
                  <MdOutlineAddShoppingCart />
                </button>
              </Flex>
              <Flex className={`items-center gap-[14px] mb-[22px]`}>
                <div>
                  <p className=" w-auto lg:w-[280px] font-os font-normal text-[12px] lg:text-[23px] text-black py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-white">
                    Sellername
                  </p>
                </div>

                <Flex className=" items-center gap-1 font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                  <Image src={`star.png`} />
                  <p>100% of 281 ratings</p>
                </Flex>

                <div>
                  <p className=" font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                    $59.99
                  </p>
                </div>

                <button className="font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-custom">
                  <MdOutlineAddShoppingCart />
                </button>
              </Flex>
              <Flex className={`items-center gap-[14px] mb-[22px]`}>
                <div>
                  <p className=" w-auto lg:w-[280px] font-os font-normal text-[12px] lg:text-[23px] text-black py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-white">
                    Sellername
                  </p>
                </div>

                <Flex className=" items-center gap-1 font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                  <Image src={`star.png`} />
                  <p>100% of 281 ratings</p>
                </Flex>

                <div>
                  <p className=" font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-body">
                    $59.99
                  </p>
                </div>

                <button className="font-os font-normal text-[12px] lg:text-[23px] text-white py-[9px] px-2 lg:py-[13px] lg:px-[19px] rounded-lg bg-custom">
                  <MdOutlineAddShoppingCart />
                </button>
              </Flex>
            </div>
          </div>
        </Flex>

        <div className=" mt-[107px] lg:mt-[158px]">
          <div>
            <Flex
              className={`items-center justify-start gap-9 lg:gap-[150px] mb-5`}
            >
              <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                Game Media
              </h1>

              <Image src={`bigLine.png`} className={`w-[50%] lg:w-auto`} />
            </Flex>
          </div>

          <Flex
            className={`items-center justify-between mt-[41px] flex-wrap lg:flex-nowrap`}
          >
            <div className="w-1/2 lg:w-1/4 p-1 lg:p-0">
              <Image src={`media.png`} />
            </div>
            <div className="w-1/2 lg:w-1/4 p-1 lg:p-0">
              <Image src={`media.png`} />
            </div>
            <div className="w-1/2 lg:w-1/4 p-1 lg:p-0">
              <Image src={`media.png`} />
            </div>
            <div className="w-1/2 lg:w-1/4 p-1 lg:p-0">
              <Image src={`media.png`} />
            </div>
          </Flex>
        </div>

        <div className="mt-[87px] lg:mt-[192px]">
          <div>
            <Flex className={`items-center justify-between mb-5`}>
              <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                Product Reviews
              </h1>

              <Image src={`bigLine.png`} className={`w-[50%] lg:w-auto`} />

              <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
                Browse All
              </button>
            </Flex>
          </div>

          <div className="mt-[41px] w-full">
            <Slider {...settings}>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </Slider>
          </div>
        </div>

        <div lassName="mt-[87px] lg:mt-[192px]">
          <Newarrivals />
        </div>
      </Container>
    </section>
  );
};

export default Product;
