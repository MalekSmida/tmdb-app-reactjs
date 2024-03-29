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
    console.log(err);
  }
  return data;
};

/**
 * Fetch specific movie or tv serie (based on type) using id
 *
 * @param {String} type
 * @param {String} id
 */
const getDetail = async (type, id) => {
  let data = { response: undefined, error: undefined };
  try {
    const res = await Http.get(
      `/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    data.response = res;
  } catch (err) {
    data.error = err;
    console.log(err);
  }
  return data;
};

/**
 * Fetch specific movie or tv serie trailer video using id
 *
 * @param {String} type
 * @param {String} id
 */
const getVideo = async (type, id) => {
  let data = { response: undefined, error: undefined };
  try {
    const res = await Http.get(
      `/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=videos`
    );
    data.response = res;
  } catch (err) {
    data.error = err;
    console.log(err);
  }
  return data;
};

export { getTmdb, getDetail, getVideo };
