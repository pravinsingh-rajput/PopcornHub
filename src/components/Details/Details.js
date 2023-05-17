import React from "react";
import "./Details.css";
import Detailbanner from "./Detailbanner/Detailbanner";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";
import LazyImage from "../LazyLoad/LazyLoadImage";
import Noprofile from "../../Assets/avtar.png";
import Carousel from "../Carousel/Carousel";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";

const Details = () => {
  const { mediaType, id } = useParams();

  const { url } = useSelector((state) => state.home);

  const { data: videos } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits } = useFetch(`/${mediaType}/${id}/credits`);
  const { data: similar } = useFetch(`/${mediaType}/${id}/similar`);
  const { data: recommendations } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <div className="details">
      <Detailbanner video={videos?.results?.[0]} crew={credits?.crew} />
      <div className="topCast_container">
        <p className="detail_page_label">Top Cast</p>
        <div className="topCast">
          {credits?.cast.map((cast, i) => {
            return (
              <div className="profile_container">
                <div className="profile">
                  <LazyImage
                    src={
                      cast.profile_path
                        ? url?.profile + cast.profile_path
                        : Noprofile
                    }
                  />
                </div>
                <div className="cast_name">{cast?.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {similar?.results.length > 0 && (
        <div className="similar">
          <p className="label_similar">Similar {mediaType}</p>
          <Carousel data={similar?.results} trendingtype={mediaType} />
        </div>
      )}
      {recommendations?.results.length > 0 && (
        <div className="recommendation">
          <p className="label_recommended">Recommended {mediaType}</p>
          <Carousel data={recommendations?.results} />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Details;
