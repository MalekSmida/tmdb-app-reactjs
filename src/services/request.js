/**
 * list needed api URL for connection with Tmdb
 */
const request = {
  popularMovies: `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  popularTvSeries: `/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`,
  families: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  documentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default request;
