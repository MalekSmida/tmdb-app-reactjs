import axios from "axios";

/**
 * Base URL to make request to Tmdb API
 */
const Http = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default Http;
