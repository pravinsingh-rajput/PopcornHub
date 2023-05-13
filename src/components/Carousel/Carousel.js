import React from "react";
import dayjs from "dayjs";
import LazyImage from "../LazyLoad/LazyLoadImage";
import Noposter from "../../Assets/no-poster.png";
import { useSelector } from "react-redux";

const Carousel = ({ data, loading }) => {
  const dayjs = require("dayjs");
  const { url } = useSelector((state) => state.home);
  console.log(url);

  return (
    <div className="carousel">
      {/* <div className="carousel_container">
        {data.map((items) => {
          return (
            <div>
              <LazyImage />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Carousel;
