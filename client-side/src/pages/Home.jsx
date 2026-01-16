import React from "react";
import Banner from "../Components/Home/Banner";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Reviews from "../Components/Home/Reviews";
import CallToAction from "../Components/Home/CallToAction";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
