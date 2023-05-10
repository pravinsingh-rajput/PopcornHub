import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <div className="home_conatiner">
      <Hero />
      <Trending />
      <Footer />
    </div>
  );
};

export default Home;
