import React, { useRef } from "react";
import dayjs from "dayjs";
import LazyLoadImage from "../LazyLoad/LazyLoadImage";
import Noposter from "../../Assets/no-poster.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Carousel.css";
import Rating from "../Rating/Rating";
import Genres from "../genres/genres";

const Carousel = ({ data, loading, trendingtype }) => {
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const carouselContainer = useRef();

  const scroll = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth - 60)
        : container.scrollLeft + (container.offsetWidth - 60);

    container.scrollTo({
      left: scrollAmount,
    });
  };

  const detailpage = (type, id) => {
    navigate(`/${type}/${id}`);
    window.scroll(0, 0);
  };

  return (
    <div className="carousel">
      <div className="scroll_icon left" onClick={() => scroll("left")}>
        <code>&lt;</code>
      </div>
      <div className="scroll_icon right" onClick={() => scroll("right")}>
        <code>&gt;</code>
      </div>
      {!loading ? (
        <div className="carousel_container" ref={carouselContainer}>
          {data?.map((item) => {
            const posterurl = item.poster_path
              ? url.poster + item.poster_path
              : Noposter;
            return (
              <div
                key={item.id}
                className="carousel_item"
                onClick={() =>
                  detailpage(item.media_type || trendingtype, item.id)
                }
              >
                <div className="poster">
                  <div className="poster_img skeleton">
                    <LazyLoadImage src={posterurl} />
                  </div>
                  <div className="vote_rating">
                    <Rating rating={item.vote_average.toFixed(1)} />
                  </div>
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
      ) : (
        <div className="carousel_container">
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
          <div className="carousel_item">
            <div className="poster">
              <div className="poster_img skeleton">
                <div className="skeletondeatils skeleton_img"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
