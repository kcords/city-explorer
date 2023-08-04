import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CityMap, Weather, Movies } from "./";
import { getWeatherForecast, getTopMovies } from "../assets/axios.js";

export default class CityDetails extends React.Component {
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
    const { currentCity } = this.props;
    const newState = {};
    newState.weather = await getWeatherForecast(currentCity);
    newState.movies = await getTopMovies(currentCity);
    this.setState(newState);
  };

  render() {
    const { currentCity } = this.props;
    const { display_name } = currentCity;
    const { weather, movies } = this.state;

    const [cityName] = display_name.split(",");

    return (
      <>
        <Row className="mb-2">
          <Col>
            <h2>{display_name}</h2>
            <hr />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs={12} lg={6}>
            <CityMap currentCity={currentCity} />
          </Col>
          <Col xs={12} lg={6}>
            <Weather
              key={`weather-${cityName}`}
              forecasts={weather.forecasts}
              errorMessage={weather.errorMessage}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Movies
              key={`movies-${cityName}`}
              movies={movies.top}
              errorMessage={movies.errorMessage}
            />
          </Col>
        </Row>
      </>
    );
  }
}
