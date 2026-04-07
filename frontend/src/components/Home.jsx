import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCrouser from "./CategoryCrouser";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CategoryCrouser/>
      <LatestJobs/>
      <Footer/>
    </div>
  );
}

export default Home;
