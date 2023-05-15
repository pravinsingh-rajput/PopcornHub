import { useEffect } from "react";
import "./App.css";
import fetchdata from "./utils/API";
import { useSelector, useDispatch } from "react-redux";
import { APIConfiguartion, getgenres } from "./Store/HomeSlice";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Search from "./components/Search/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getConfiguration();
    genrescall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getConfiguration = () => {
    fetchdata("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.base_url + "original",
        poster: res.images.base_url + "original",
        profile: res.images.base_url + "original",
      };

      dispatch(APIConfiguartion(url));
    });
  };

  const genrescall = async () => {
    let promises = [];
    let genrestype = ["tv", "movie"];
    let allgenres = {};

    genrestype.forEach((type) => {
      promises.push(fetchdata(`/genre/${type}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);

    data.map(({ genres }) => {
      return genres.map((item) => (allgenres[item.id] = item));
    });

    dispatch(getgenres(allgenres));
  };

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore/:mediatype" element={<Explore />} />
          <Route path="/serach/:query" element={<Search />} />
        </Routes>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
