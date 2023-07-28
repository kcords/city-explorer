import React from "react";

import Table from "react-bootstrap/Table";

export default class CityDetails extends React.Component {
  render() {
    const { currentCity } = this.props;
    const { display_name, lat, lon } = currentCity;
    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&center=${lat},${lon}&zoom=12&scale=2`;
    return (
      <>
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
        <img
          src={mapSrc}
          alt={`Map of ${display_name}`}
          className="object-fit-contain img-fluid mx-auto border shadow-sm rounded"
        />
      </>
    );
  }
}
