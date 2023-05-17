import React from "react";
import Trending from "../Home/Trending/Trending";
import Footer from "../Footer/Footer";
import "./Nodata.css";

const Nodata = () => {
  return (
    <div className="no_data">
      <h1 className="nodata_title">
        No Data Availabe For This Movie / Tv Show
      </h1>

      <Trending />
      <Footer />
    </div>
  );
};

export default Nodata;
