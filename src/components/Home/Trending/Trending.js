import React, { useState } from "react";
import Switch from "../../../Switches/Switch";
import "./Trending.css";
import fetchdata from "../../../utils/API";
import Carousel from "../../Carousel/Carousel";

const Trending = () => {
  const [tredingtime, setTrendingTime] = useState("day");

  const { data, loading } = fetchdata(`/trending/all/${tredingtime}`);

  const onTabChange = (tab) => {
    setTrendingTime(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="trending">
      <div className="trending_container">
        <span className="carousel_title">Trending</span>
        <Switch data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
