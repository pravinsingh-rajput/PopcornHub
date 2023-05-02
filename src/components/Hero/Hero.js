import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Hero.css";

const Hero = () => {
  const [bgimg, setBgimg] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data } = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    console.log(bg);
    setBgimg(bg);
  }, [data, url]);

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    navigate("/search");
  };

  return (
    <div
      className="hero_section"
      style={{
        backgroundImage: `url(${bgimg}) `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h1 className="title">Welcome</h1>
      <span className="title_description">
        Explore a wide range of movies and TV shows on our website and watch
        your favorite titles anytime, anywhere, on any device.
      </span>

      <form onSubmit={handleSubmit} className="home_search_form">
        <input
          type="text"
          value={search}
          onChange={inputHandler}
          placeholder="Search Movies & TvShows ....."
          className="home_search"
        />
        <button onClick={handleSubmit} className="home_search_btn">
          Search
        </button>
      </form>

      <div className="opacity_layer"></div>
    </div>
  );
};

export default Hero;
