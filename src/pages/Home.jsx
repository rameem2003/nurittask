import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <section>
      <Container>
        <HomeBanner />
        <Reviews />
      </Container>
    </section>
  );
};

export default Home;
