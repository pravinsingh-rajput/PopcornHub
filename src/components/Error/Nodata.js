import React from "react";
import Trending from "../Home/Trending/Trending";
import Footer from "../Footer/Footer";

const Nodata = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#04152d;",
        textAlign: "center",
        paddingTop: "80px",
      }}
    >
      <h3 style={{ paddingBottom: "20px" }}>
        No Data Availabe For This Movie / Tv Show
      </h3>

      <Trending />
      <Footer />
    </div>
  );
};

export default Nodata;
