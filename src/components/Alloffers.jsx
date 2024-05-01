import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Specialoffers from "./offers/Specialoffers";

const Alloffers = () => {
  return (
    <section className=" lg:mt-[200px]">
      <Container>
        <Flex className={`gap-[46px] flex-col lg:flex-row`}>
          <div className=" w-full lg:w-1/3">
            <Specialoffers />
          </div>
          <div className=" w-full lg:w-1/3">
            <Specialoffers />
          </div>
          <div className=" w-full lg:w-1/3">
            <Specialoffers />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Alloffers;
