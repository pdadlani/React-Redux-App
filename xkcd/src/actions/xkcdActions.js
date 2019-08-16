import axios from "axios";

export const FETCH_XKCD_DATA_START = "FETCH_XKCD_DATA_START";
export const FETCH_XKCD_DATA_SUCCESS = "FETCH_XKCD_DATA_SUCCESS";
export const FETCH_XKCD_DATA_FAILURE = "FETCH_XKCD_DATA_FAILURE";

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const urlp1 = 'https://xkcd.com';
const urlp2 = '/info.0.json';

export const getData = random => {
  console.log('random', random)
  return dispatch => {
    dispatch({ type: FETCH_XKCD_DATA_START });
    axios
      .get(`${proxyurl}${urlp1}${random === '' || random === undefined ? '' : '/' + random}${urlp2}`)
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_XKCD_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_XKCD_DATA_FAILURE, payload: err.response });
      });
  };
};
