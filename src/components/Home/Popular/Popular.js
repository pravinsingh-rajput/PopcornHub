import React, { useState } from "react";
import Switch from "../../../Switches/Switch";
import "../Trending/Trending.css";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../Carousel/Carousel";

const Popular = () => {
  const [trendingtype, setTrendingType] = useState("movie");

  const { data, loading } = useFetch(`/${trendingtype}/popular`);

  const onTabChange = (tab) => {
    setTrendingType(tab === "Movie" ? "movie" : "tv");
  };

  return (
    <div className="home_conatiners">
      <div className="carousel_wrapper">
        <span className="carousel_title">Popular</span>
        <Switch data={["Movie", "TV"]} onTabChange={onTabChange} />
      </div>
      <Carousel
        data={data?.results}
        loading={loading}
        trendingtype={trendingtype}
      />
    </div>
  );
};

export default Popular;
