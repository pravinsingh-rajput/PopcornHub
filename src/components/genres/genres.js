import React from "react";
import { useSelector } from "react-redux";
import "./genres.css";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres_conatiner">
      {data?.map((itemid) => {
        return <div className="genres">{genres[itemid]?.name}</div>;
      })}
    </div>
  );
};

export default Genres;
