import axios from "axios";

const baseURL = "https://restcountries.eu/rest/v2/all";

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers
  });