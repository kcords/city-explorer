import React from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

  componentDidMount = async () => {
    const newState = {};
    newState.weather = await this.getWeatherForecast();
    newState.movies = await this.getTopMovies();
    this.setState(newState);
  };

  getWeatherForecast = async () => {
    const { display_name, lat, lon } = this.props.currentCity;
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

  getTopMovies = async () => {
    const { display_name } = this.props.currentCity;
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

  render() {
    const { currentCity } = this.props;
    const { display_name, lat, lon } = currentCity;
    const { weather, movies } = this.state;

    const [cityName] = display_name.split(",");

    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&center=${lat},${lon}&zoom=12&scale=2`;

    return (
      <Row>
        <Col md={5}>
          <CityDetails currentCity={currentCity} />
          <img
            key={`map-${cityName}`}
            src={mapSrc}
            alt={`Map of ${display_name}`}
            className="object-fit-contain img-fluid mx-auto border shadow-sm rounded"
          />
        </Col>
        <Col lg={7}>
          <Weather
            key={`weather-${cityName}`}
            forecasts={weather.forecasts}
            errorMessage={weather.errorMessage}
          />
          <Movies
            key={`movies-${cityName}`}
            movies={movies.top}
            errorMessage={movies.errorMessage}
          />
        </Col>
      </Row>
    );
  }
}
