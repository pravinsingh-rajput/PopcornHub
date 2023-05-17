import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Nodata from "../../Assets/notfound.gif";
import LoadindData from "../../Assets/loadingdata.gif";
import fetchdata from "../../utils/API";
import Moviecard from "../MovieCard/Moviecard";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../Footer/Footer";

const Explore = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { mediaType } = useParams();

  const type = mediaType === "movie" ? "movie" : "tv";

  const searchdata = () => {
    setLoading(true);
    fetchdata(`/discover/${type}`).then((res) => {
      setData(res);
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  const nextpage = () => {
    fetchdata(`/discover/${type}?page=${page}`).then((res) => {
      if (data?.results) {
        setData({ ...data, results: [...data?.results, ...res.results] });
      } else {
        setData(res);
      }
      setPage((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPage(1);
    searchdata();
  }, [type]);

  return (
    <div className="searchpage">
      <div className="search_container">
        {loading && (
          <div className="loadingdata">
            <img src={LoadindData} alt="LoadindData" className="loadingimg" />
          </div>
        )}

        {!loading && (
          <div className="searcheddata">
            {data?.results.length > 0 ? (
              <div>
                <div className="page_title">
                  {`${type.toLocaleUpperCase()} ${type === "tv" ? "Show" : ""}`}
                </div>
                <InfiniteScroll
                  className="content"
                  dataLength={data?.results?.length || []}
                  next={nextpage}
                  hasMore={page <= data?.total_pages}
                  loader={
                    <div className="loadingdata">
                      <img
                        src={LoadindData}
                        alt="LoadindData"
                        className="loadingimg"
                      />
                    </div>
                  }
                >
                  {data?.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (
                      <Moviecard key={index} data={item} mediatype={type} />
                    );
                  })}
                </InfiniteScroll>
              </div>
            ) : (
              <div className="loadingdata">
                <img src={Nodata} alt="Nodata" className="loadingimg" />
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
