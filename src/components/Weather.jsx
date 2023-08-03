import React from 'react';
import axios from "axios";

import Table from "react-bootstrap/Table";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [],
      errorMessage: null
    }
  }

  componentDidMount() {
    this.getWeatherForecast();
  }

  getWeatherForecast = async () => {
    try {
      const { cityName, lat, lon } = this.props;
      const url = `${import.meta.env.VITE_SERVER_URL}/weather?searchQuery=${cityName}&lat=${lat}&lon=${lon}`
      const { data: forecasts } = await axios.get(url);
      this.setState({ forecasts })

    } catch({ response: { statusText: errorMessage } }) {
      this.setState({ errorMessage })
    }
  }

  render() {
    const { forecasts, errorMessage } = this.state;

    return(
      <Table borderless striped className="p-3 shadow-sm rounded">
        <thead>
          <tr>
            <th className="text-break text-wrap">Date</th>
            <th className="text-break text-wrap">Forecast</th>
          </tr>
        </thead>
        <tbody>
          {errorMessage || forecasts.length < 1 ?
            (
              <tr key={errorMessage} >
                <td colSpan={2} className="text-break text-wrap">
                  {errorMessage || `No weather data available`}
                </td>
              </tr>
            ) :
            forecasts.map(({date, description}) => {
            const dateObj = new Date(date);
            const options = { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' };
            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObj);

            return(
              <tr key={date + description} >
                <td className="text-break text-wrap">{formattedDate}</td>
                <td className="text-break text-wrap">{description}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}