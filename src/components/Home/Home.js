import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import Toprated from "./TopRated/TopRated";
import Upcoming from "./Upcoming/Upcoming";

const Home = () => {
  return (
    <div className="home_conatiner">
      <Hero />
      <Trending />
      <Popular />
      <Toprated />
      <Upcoming />
      <Footer />
    </div>
  );
};

export default Home;
