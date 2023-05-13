import { useEffect } from "react";
import "./App.css";
import fetchdata from "./utils/API";
import { useSelector, useDispatch } from "react-redux";
import { APIConfiguartion } from "./Store/HomeSlice";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Explore from "./components/Explore/Explore";
import Search from "./components/Search/Search";

function App() {
  const dispatch = useDispatch();

  const url = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
    getConfiguration();
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
