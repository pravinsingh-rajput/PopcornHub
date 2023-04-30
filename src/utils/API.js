import axios from "axios";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const baseurl = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const fetchdata = async (url, params) => {
  try {
    const { data } = await axios.get(baseurl + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchdata;
