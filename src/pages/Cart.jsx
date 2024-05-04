import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <section className="mt-[34px] lg:mt-[60px]">
      <Container>
        <div>
          <Flex className={`items-center justify-between mb-5`}>
            <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white flex items-center gap-3">
              My Cart{" "}
              <span className=" text-[22px] h-[33px] w-[33px] rounded-full bg-custom flex items-center justify-center">
                2
              </span>
            </h1>

            <Image src={`bigLine.png`} className={`w-[50%] lg:w-auto`} />

            <button className=" font-os font-normal text-[12px]  lg:text-[24px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
              Continue Shopping
            </button>
          </Flex>
        </div>

        <Flex className={`lg:gap-[34px] flex-col lg:flex-row`}>
          <div className=" w-full lg:w-9/12">
            <CartItem />
            <CartItem />
          </div>
          <div className=" w-full lg:w-3/12">
            <div className="bg-fade rounded-lg py-[18px] px-5 lg:py-[29px] lg:px-[32px]">
              <Flex className={`items-center justify-between mb-7`}>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  2 Items
                </span>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  $99
                </span>
              </Flex>
              <Flex className={`items-center justify-between mb-7`}>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  2 Items
                </span>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  $99
                </span>
              </Flex>
              <Flex className={`items-center justify-between mb-7`}>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  2 Items
                </span>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  $99
                </span>
              </Flex>

              <div className="w-full h-[1px] bg-white"></div>

              <Flex className={`gap-4 my-[32px]`}>
                <input
                  className=" w-[60%] py-[9px] px-3  lg:py-4 lg:px-6 rounded-lg bg-body font-os font-normal text-[12px] lg:text-[21px] text-white placeholder:text-white"
                  type="text"
                  name=""
                  id=""
                  placeholder="Coupon Code:"
                />
                <button className=" w-[40%] py-[9px] px-3 lg:py-4 lg:px-6 rounded-lg font-os font-normal text-[12px] lg:text-[21px] text-white border-[1px] border-white">
                  Apply
                </button>
              </Flex>
              <Flex className={`gap-4 my-[32px]`}>
                <input
                  className=" w-[60%] py-[9px] px-3  lg:py-4 lg:px-6 rounded-lg bg-body font-os font-normal text-[12px] lg:text-[21px] text-white placeholder:text-white"
                  type="text"
                  name=""
                  id=""
                  placeholder="Coupon Code:"
                />
                <button className=" w-[40%] py-[9px] px-3 lg:py-4 lg:px-6 rounded-lg font-os font-normal text-[12px] lg:text-[21px] text-white border-[1px] border-white">
                  Apply
                </button>
              </Flex>

              <div className="w-full h-[1px] bg-white"></div>

              <Flex className={`items-center justify-between mb-7 mt-[33px]`}>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  Total
                </span>
                <span className=" font-os font-normal text-[14px] lg:text-[26px] text-white">
                  $99
                </span>
              </Flex>

              <button className=" w-full py-3 rounded-lg bg-custom font-os font-normal text-[14px] lg:text-[24px] text-white">
                Proceed to Checkout
              </button>

              <Flex
                className={`mt-[21px] items-center justify-start lg:justify-center gap-5 flex-wrap`}
              >
                <Image src={`pay1.png`} />
                <Image src={`pay2.png`} />
                <Image src={`pay3.png`} />
                <Image src={`pay4.png`} />
                <Image src={`pay5.png`} />
                <Image src={`pay6.png`} />
                <Image src={`pay7.png`} />
                <Image src={`pay8.png`} />
                <Image src={`pay9.png`} />
                <Image src={`pay10.png`} />
                <Image src={`pay11.png`} />
              </Flex>
            </div>

            <div className="bg-fade rounded-lg py-[18px] px-5 lg:py-[29px] lg:px-[32px] text-center mt-12">
              <Image src={`footer1.png`} className={` mx-auto`} />
              <div className="w-full h-[1px] bg-white my-[14px]"></div>
              <Image src={`footer2.png`} className={` mx-auto`} />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart;
