import React from "react";
import dayjs from "dayjs";
import LazyLoadImage from "../LazyLoad/LazyLoadImage";
import Noposter from "../../Assets/no-poster.png";
import { useSelector } from "react-redux";
import "./Carousel.css";
import Rating from "../Rating/Rating";
import Genres from "../genres/genres";

const Carousel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  console.log(url);
  console.log(data?.results);

  return (
    <div className="carousel">
      <div className="carousel_container">
        {data?.map((item) => {
          const posterurl = item.poster_path
            ? url.poster + item.poster_path
            : Noposter;
          return (
            <div key={item.id} className="carousel_item">
              <div className="poster">
                <div className="poster_img skeleton">
                  <LazyLoadImage src={posterurl} />
                </div>
                <Rating rating={item.vote_average.toFixed(1)} />
                <Genres data={item.genre_ids.slice(0, 2)} />
              </div>
              <div className="details_container">
                <div className="title">{item.name || item.title}</div>
                <div className="release_date">
                  {dayjs(item?.release_date).format("MMM D, YYYY")}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
