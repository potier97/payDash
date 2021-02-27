import axios from "axios";

const baseURL = "https://restcountries.eu/rest/v2/all";

const callCountries = () =>  axios.get(baseURL);

export default callCountries