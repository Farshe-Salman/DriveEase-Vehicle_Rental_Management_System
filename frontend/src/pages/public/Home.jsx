import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import FeaturedVehicles from "../../components/home/FeaturedVehicles";
import HeroSection from "../../components/home/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedVehicles />
      <Footer />
    </>
  )
}

export default Home