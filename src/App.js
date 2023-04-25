import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  //   useEffect(() => {
  //     fetchdata();
  //   }, []);

  //   const fetchdata = async () => {
  //     const data = await axios
  //       .get(
  //         `
  // https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_TOKEN}`
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   };

  return (
    <div className="App">
      <h3>Day 1 Building a Movie Webiste</h3>
      <h1>PopcornHub</h1>
      <a href="pravinsingh.me">pravinsingh.me</a>
    </div>
  );
}

export default App;
