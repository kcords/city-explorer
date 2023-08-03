import React from "react";

import { CityDetails, Weather, Movies } from "./";

export default class City extends React.Component {
  render() {
    const { currentCity } = this.props;
    const { display_name, lat, lon } = currentCity;

    const [cityName] = display_name.split(",");

    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&center=${lat},${lon}&zoom=12&scale=2`;

    return (
      <>
        <CityDetails currentCity={currentCity} />
        <Weather
          key={`weather-${cityName}`}
          cityName={cityName}
          lat={lat}
          lon={lon}
        />
        <img
          src={mapSrc}
          alt={`Map of ${display_name}`}
          className="object-fit-contain img-fluid mx-auto border shadow-sm rounded"
        />
        <Movies key={`movies-${cityName}`} cityName={cityName} />
      </>
    );
  }
}
