import React from "react";
import { getWeatherForecast } from "../../assets/axios.js";

import Table from "react-bootstrap/Table";
import ForecastItem from "./ForecastItem";

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      errorMessage: null,
    };
  }

  componentDidMount = async () => {
    const { currentCity } = this.props;
    const stateUpdate = await getWeatherForecast(currentCity);
    this.setState(stateUpdate);
  };

  render() {
    const { forecasts, errorMessage } = this.state;

    const strings = Object.freeze({
      title: "7-day Forecast",
      defaultErrMsg: "No weather data available",
    });

    return (
      <>
        <h3>{strings.title}</h3>
        <Table borderless striped className="p-3 shadow-sm rounded">
          <tbody>
            {errorMessage || forecasts.length < 1 ? (
              <tr key={errorMessage}>
                <td colSpan={2} className="text-break text-wrap">
                  {errorMessage || strings.defaultErrMsg}
                </td>
              </tr>
            ) : (
              forecasts.map((forecast) => (
                <ForecastItem
                  key={`${forecast.date}${forecast.description}`}
                  forecast={forecast}
                />
              ))
            )}
          </tbody>
        </Table>
      </>
    );
  }
}
