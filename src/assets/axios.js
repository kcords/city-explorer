"use strict";

import axios from "axios";

export const getWeatherForecast = async ({ display_name, lat, lon }) => {
  const [cityName] = display_name.split(",") || [display_name];
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/weather?searchQuery=${cityName}&lat=${lat}&lon=${lon}`;

  try {
    const { data: forecasts } = await axios.get(url);
    return { forecasts };
  } catch ({ response: { statusText: errorMessage } }) {
    return { errorMessage };
  }
};

export const getTopMovies = async ({ display_name }) => {
  const [cityName] = display_name.split(",");
  const url = `${
    import.meta.env.VITE_SERVER_URL
  }/movies?searchQuery=${cityName}`;

  try {
    const { data: movies } = await axios.get(url);
    return { movies };
  } catch ({ response: { statusText: errorMessage } }) {
    return { errorMessage };
  }
};
