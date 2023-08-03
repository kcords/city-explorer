import React from "react";
import axios from "axios";

import { CityDetails, Weather, Movies } from "./";

export default class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: { forecasts: [], errorMessage: null },
      movies: {
        top: [],
        errorMessage: null,
      },
    };
  }

  componentDidMount() {
    this.getWeatherForecast();
    this.getTopMovies();
  }

  getWeatherForecast = async () => {
    try {
      const { cityName, lat, lon } = this.props;
      const url = `${
        import.meta.env.VITE_SERVER_URL
      }/weather?searchQuery=${cityName}&lat=${lat}&lon=${lon}`;

      const { data: forecasts } = await axios.get(url);
      this.setState({ weather: { forecasts } });
    } catch ({ response: { statusText: errorMessage } }) {
      this.setState({ weather: { errorMessage } });
    }
  };

  getTopMovies = async () => {
    try {
      const { cityName } = this.props;
      const url = `${
        import.meta.env.VITE_SERVER_URL
      }/movies?searchQuery=${cityName}`;
      const { data: top } = await axios.get(url);
      this.setState({ movies: { top } });
    } catch ({ response: { statusText: errorMessage } }) {
      this.setState({ movies: { errorMessage } });
    }
  };

  render() {
    const { currentCity } = this.props;
    const { display_name, lat, lon } = currentCity;
    const { weather, movies } = this.state;

    const [cityName] = display_name.split(",");

    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&center=${lat},${lon}&zoom=12&scale=2`;

    return (
      <>
        <CityDetails currentCity={currentCity} />
        <Weather
          key={`weather-${cityName}`}
          forecasts={weather.forecasts}
          errorMessage={weather.errorMessage}
        />
        <img
          src={mapSrc}
          alt={`Map of ${display_name}`}
          className="object-fit-contain img-fluid mx-auto border shadow-sm rounded"
        />
        <Movies
          key={`movies-${cityName}`}
          movies={movies.top}
          errorMessage={movies.errorMessage}
        />
      </>
    );
  }
}
