import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import NewsSection from "../components/Home/NewsSection";

const Home = () => {
  return (
    <main className="pb-20">
      {/* Hero Section */}
      <HeroSection />
      {/* About Us Section  */}
      <AboutUsSection />
      {/* News Section  */}
      <NewsSection />
    </main>
  );
};

export default Home;
