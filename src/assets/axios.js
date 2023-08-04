"use strict";

import axios from "axios";

export const getWeatherForecast = async ({ display_name, lat, lon }) => {
  const [cityName] = display_name.split(",") || [display_name];
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/weather?searchQuery=${cityName}&lat=${lat}&lon=${lon}`;

  const weather = {};
  try {
    const { data: forecasts } = await axios.get(url);
    weather.forecasts = forecasts;
  } catch ({ response: { statusText: errorMessage } }) {
    weather.errorMessage = errorMessage;
  }
  return weather;
};

export const getTopMovies = async ({ display_name }) => {
  const [cityName] = display_name.split(",");
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/movies?searchQuery=${cityName}`;

  const movies = {};
  try {
    const { data: top } = await axios.get(url);
    movies.top = top;
  } catch ({ response: { statusText: errorMessage } }) {
    movies.errorMessage = errorMessage;
  }
  return movies;
};
