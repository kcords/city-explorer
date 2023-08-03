import React from "react";

import Table from "react-bootstrap/Table";

export default class CityDetails extends React.Component {
  render() {
    const {
      currentCity: { display_name, lat, lon },
    } = this.props;
    return (
      <Table borderless className="p-3 shadow-sm rounded">
        <thead>
          <tr>
            <th className="text-break text-wrap">City</th>
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
    );
  }
}
