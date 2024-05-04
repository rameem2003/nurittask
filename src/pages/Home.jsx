import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Reviews from "../components/Reviews";
import WeeklyDeals from "../components/WeeklyDeals";
import Add1 from "../components/Add1";
import Newarrivals from "../components/Newarrivals";
import Add2 from "../components/Add2";
import Comingsoon from "../components/Comingsoon";
import Alloffers from "../components/Alloffers";
import Blogs from "../components/Blogs";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <section>
      <Container>
        <Header />
        <HomeBanner />
        <Reviews />
        <WeeklyDeals />
        <Add1 />
        <Newarrivals />
        <Add2 />
        <Comingsoon />
        <Alloffers />
        <Blogs />
        <NewsLetter />
      </Container>
    </section>
  );
};

export default Home;
