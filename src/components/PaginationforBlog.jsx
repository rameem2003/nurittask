import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "./Flex";
import BlogCard from "./BlogCard";

const PaginationforBlog = ({ itemsPerPage }) => {
  // Example items, to simulate fetching from another resources.
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18,
  ];

  function Items({ currentItems }) {
    return (
      <>
        <Flex className={`flex-wrap justify-between gap-2 lg:gap-0`}>
          {currentItems &&
            currentItems.map((item) => (
              <BlogCard className={`w-[200px] lg:w-[393px]`} isBorder={true} />
            ))}
        </Flex>
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />

      <Flex className=" my-16 lg:mt-[50px] lg:mb-[140px] flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between">
        <ReactPaginate
          previousClassName="p-5 h-[15px] w-[15px] border-[1px] flex items-center justify-center text-white rounded-full"
          nextClassName=" p-5 h-[15px] w-[15px] border-[1px] flex items-center justify-center text-white rounded-full"
          nextLabel=" >"
          breakLabel="..."
          className=" flex mx-auto gap-6 "
          activeClassName="bg-custom text-white"
          pageClassName=" p-5 h-[15px] w-[15px] border-[1px] flex items-center justify-center text-white rounded-full font-os font-normal text-[24px] text-secondary"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </Flex>
    </>
  );
};

export default PaginationforBlog;
