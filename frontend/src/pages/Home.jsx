import HeroSection from "../components/Home/HeroSection";
import AboutUsSection from "../components/Home/AboutUsSection";
import NewsSection from "../components/Home/NewsSection";
import UMKMSection from "../components/Home/UMKMSection";

const Home = () => {
  return (
    <main className="pb-20">
      {/* Hero Section */}
      <HeroSection />
      {/* About Us Section  */}
      <AboutUsSection />
      {/* News Section  */}
      <NewsSection />
      {/* UMKM Section */}
      <UMKMSection />
    </main>
  );
};

export default Home;
