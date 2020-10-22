/**
 * list needed api URL for connection with Tmdb
 */
const request = {
  popularMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`,
  popularTvSeries: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`,
  families: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  documentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default request;
