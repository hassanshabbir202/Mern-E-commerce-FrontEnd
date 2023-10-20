import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import HeroSection from "../../components/herosection/HeroSection";
import TopProducts from "../../components/topproducts/TopProducts";
import RenderAllProducts from "../../components/renderallproducts/RenderAllProducts";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <HeroSection />
      <TopProducts />
      <RenderAllProducts />
      <Footer />
    </>
  );
};

export default Home;
