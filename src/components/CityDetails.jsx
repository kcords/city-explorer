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
            <th colSpan={2} className="text-break text-wrap">
              <h3>{display_name}</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-break text-wrap">Latitude</th>
            <th className="text-break text-wrap">Longitude</th>
          </tr>
          <tr>
            <td className="text-break text-wrap"> {lat}</td>
            <td className="text-break text-wrap">{lon}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
