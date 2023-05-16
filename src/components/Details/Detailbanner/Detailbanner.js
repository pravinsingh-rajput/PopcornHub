import React from "react";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import LazyImage from "../../LazyLoad/LazyLoadImage";
import "./Detailbanner.css";
import Noposter from "../../../Assets/no-poster.png";
import dayjs from "dayjs";
import Rating from "../../Rating/Rating";
import Play from "./Play";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Detailbanner = () => {
  const { url } = useSelector((state) => state.home);
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const moviebg = url.backdrop + data?.backdrop_path;

  const posterurl = data?.poster_path
    ? url.poster + data.poster_path
    : Noposter;

  const time = (data) => {
    const hours = data / 60;
    const minute = data % 60;
    return `${Math.floor(hours)} hr ${minute} min`;
  };

  return (
    <div
      className="details_banner"
      style={{
        backgroundImage: `url(${moviebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {!loading ? (
        <div className="details_banner_conatiner">
          <div className="left_container">
            <div className="poster_image">
              <LazyImage src={posterurl} />
            </div>
          </div>
          <div className="right_container">
            <div className="moredetails">
              <div className="detail_title">
                {data?.title || data?.name} (
                {dayjs(data?.first_air_date).format("YYYY")})
              </div>
              <p className="detail_tagline">{data?.tagline}</p>
              <div className="detail_genres">
                {data?.genres.map((g) => (
                  <span className="genres detail_genre">{g.name}</span>
                ))}
              </div>
              <div className="rating_play">
                <div className="detailed_rating">
                  <Rating rating={data?.vote_average.toFixed(1)} />
                </div>
                <Play />
              </div>
              <div className="overview_conatiner">
                <div className="overview_Label">Overview</div>
                <p className="overview">{data?.overview}</p>
                <div className="otherdetails">
                  <div className="other_info_item">
                    Status: <span className="otherinfo">{data?.status}</span>
                  </div>
                  <div className="other_info_item">
                    Released Date:{" "}
                    <span className="otherinfo">
                      {dayjs(data?.release_date).format("MMM DD, YYYY")}
                    </span>
                  </div>

                  <div className="other_info_item">
                    Runtime:{" "}
                    <span className="otherinfo">{time(data?.runtime)}</span>
                  </div>
                </div>
                <div className="director_detail">
                  Director: <span className="otherinfo"> {data?.status}</span>
                </div>
                <div className="writer_details">
                  Writer: <span className="otherinfo"> {data?.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default Detailbanner;
