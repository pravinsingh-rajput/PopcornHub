import { useState, useEffect } from "react";
import fetchdata from "../utils/API";

const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading....");
    setData(null);
    setError(null);

    fetchdata(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went Wrong! ");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
