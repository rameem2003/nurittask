import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Reviews from "../components/Reviews";
import WeeklyDeals from "../components/WeeklyDeals";

const Home = () => {
  return (
    <section>
      <Container>
        <HomeBanner />
        <Reviews />
        <WeeklyDeals />
      </Container>
    </section>
  );
};

export default Home;
