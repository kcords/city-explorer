import React from "react";
import { getWeatherForecast } from "../assets/axios.js";

import Table from "react-bootstrap/Table";

export default class Weather extends React.Component {
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
    return (
      <>
        <h3>7-day Forecast</h3>
        <Table borderless striped className="p-3 shadow-sm rounded">
          <tbody>
            {errorMessage || forecasts.length < 1 ? (
              <tr key={errorMessage}>
                <td colSpan={2} className="text-break text-wrap">
                  {errorMessage || `No weather data available`}
                </td>
              </tr>
            ) : (
              forecasts.map(({ date, description }) => {
                const dateObj = new Date(date);
                const options = {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  timeZone: "UTC",
                };
                const formattedDate = new Intl.DateTimeFormat(
                  "en-US",
                  options
                ).format(dateObj);

                return (
                  <tr key={date + description}>
                    <td className="text-break text-wrap">{formattedDate}</td>
                    <td className="text-break text-wrap">{description}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </>
    );
  }
}
