import React from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import Flex from "../components/Flex";
import Image from "../components/Image";
import BlogCard from "../components/BlogCard";
import PaginationforBlog from "../components/PaginationforBlog";

const Blog = () => {
  return (
    <section>
      <Container>
        <HomeBanner />

        <div className="mt-[91px] lg:mt-[202px]">
          <div>
            <Flex className={`items-center justify-between mb-5`}>
              <div className="w-[20%]">
                <h1 className=" font-os font-normal text-[16px] lg:text-[36px] text-white ">
                  Latest articles
                </h1>
              </div>

              <div className="w-[80%]">
                <Image src={`bigLine.png`} className={`w-[50%] lg:w-full`} />
              </div>
            </Flex>
          </div>
        </div>

        <div>
          <PaginationforBlog itemsPerPage={20} />
        </div>
      </Container>
    </section>
  );
};

export default Blog;
