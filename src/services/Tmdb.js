import Http from "./Http";

/**
 * Fetch data from TMDB based on requestUrl
 *
 * @param {String} requestURL
 */
const getTmdb = async (requestURL) => {
  let data = { response: undefined, error: undefined };
  try {
    const res = await Http.get(requestURL);
    data.response = res;
  } catch (err) {
    data.error = err;
  }
  return data;
};

export { getTmdb };
