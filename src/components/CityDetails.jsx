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
            <th colSpan={4} className="text-break text-wrap">
              <h3>{display_name}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Latitude</th>
            <td> {lat}</td>
            <th>Longitude</th>
            <td>{lon}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
