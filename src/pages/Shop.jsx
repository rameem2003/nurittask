import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Delivary from "../components/Delivary";
import Sort from "../components/Sort";
import Price from "../components/Price";
import Seller from "../components/Seller";
import ProductComponent from "../components/ProductComponent";
import Header from "../components/Header";

const Shop = () => {
  return (
    <section>
      <Container>
        <Header />
        <Flex className={`gap-[30px]`}>
          <div className="w-3/12 hidden lg:block">
            <Delivary />
            <Sort />
            <Price />
            <Seller />
          </div>
          <div className="w-full lg:w-9/12">
            <ProductComponent />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
