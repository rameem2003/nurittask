import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import { FaFilter } from "react-icons/fa";
import ProductPagination from "./ProductPagination";

const ProductComponent = () => {
  return (
    <section>
      <div>
        <Flex className={`items-center justify-between mb-5 lg:hidden`}>
          <h1 className=" font-os font-normal text-[16px] text-white ">
            Weekly Deals
          </h1>

          <Image src={`bigLine.png`} className={`w-[20%] `} />

          <button className=" flex items-center gap-2 font-os font-normal text-[12px] lg:py-[11px] lg:px-4 p-[6px] border-[1px] text-white border-white rounded-lg">
            <FaFilter /> Filter
          </button>
        </Flex>

        <div>
          <ProductPagination itemsPerPage={20} />
        </div>
      </div>
    </section>
  );
};

export default ProductComponent;
