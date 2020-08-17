import axios from "axios";
import WeatherTypes from "./weather.types";

//go to https://openweathermap.org/api and sign up and get your API
const API_KEY = "...";
const units = "metric"

const search = (data) => ({
  type: WeatherTypes.SEARCH_CITY,
  data,
});

export const searchAsc = (name) => (dispatch) => {
  axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=${units}&appid=${API_KEY}`
  ).then((response) => dispatch(search(response.data)));
};
