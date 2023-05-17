import React from "react";
import dayjs from "dayjs";
import LazyLoadImage from "../LazyLoad/LazyLoadImage";
import Noposter from "../../Assets/no-poster.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Rating from "../Rating/Rating";
import Genres from "../genres/genres";
import "./Moviecard.css";

const Moviecard = ({ data, fromsearch, mediatype }) => {
  const { url } = useSelector((state) => state.home);

  const navigate = useNavigate();

  const detailpage = (type, id) => {
    navigate(`/${type}/${id}`);
    window.scroll(0, 0);
  };

  const posterurl = data.poster_path ? url.poster + data.poster_path : Noposter;

  return (
    <div
      className="display_fetch_data carousel"
      onClick={() => detailpage(data.media_type || mediatype, data.id)}
    >
      <div className="poster">
        <div className="poster_img skeleton">
          <LazyLoadImage src={posterurl} />
        </div>
        {!fromsearch && (
          <>
            <div className="vote_rating">
              <Rating rating={data.vote_average.toFixed(1)} />
            </div>
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="info_container">
        <div className="title">{data.name || data.title}</div>
        <div className="release_date">
          {dayjs(data?.release_date).format("MMM D, YYYY")}
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
