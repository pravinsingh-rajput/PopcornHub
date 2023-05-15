import React, { useState } from "react";
import Switch from "../../../Switches/Switch";
import "./Trending.css";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../Carousel/Carousel";

const Trending = () => {
  const [tredingtime, setTrendingTime] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${tredingtime}`);

  const onTabChange = (tab) => {
    setTrendingTime(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="home_conatiners">
      <div className="carousel_wrapper">
        <span className="carousel_title">Trending</span>
        <Switch data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
