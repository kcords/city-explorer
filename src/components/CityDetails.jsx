import React from "react";

import Table from "react-bootstrap/Table";

export default class CityDetails extends React.Component {
  render() {
    const { currentCity } = this.props;
    const { display_name, lat, lon } = currentCity;
    return (
      <>
        <Table borderless>
          <thead>
            <tr>
              <th>City</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{display_name}</td>
              <td> {lat}</td>
              <td>{lon}</td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
