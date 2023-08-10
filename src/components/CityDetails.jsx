import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CityMap, Forecast, MovieCarousel, Restaurants } from "./";

export default class CityDetails extends React.Component {
  render() {
    const { currentCity } = this.props;
    const { display_name } = currentCity;

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
            <CityMap key={`map-${cityName}`} currentCity={currentCity} />
            <Forecast key={`weather-${cityName}`} currentCity={currentCity} />
          </Col>
          <Col xs={12} lg={6}>
            <MovieCarousel
              key={`movies-${cityName}`}
              currentCity={currentCity}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col>
            <Restaurants
              key={`restaurants-${cityName}`}
              currentCity={currentCity}
            />
          </Col>
        </Row>
      </>
    );
  }
}
