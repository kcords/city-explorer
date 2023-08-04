import React from "react";

import Table from "react-bootstrap/Table";

export default class CityDetails extends React.Component {
  render() {
    const {
      currentCity: { display_name, lat, lon },
    } = this.props;

    const mapSrc = `https://maps.locationiq.com/v3/staticmap?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&center=${lat},${lon}&zoom=12&scale=2`;

    return (
      <>
        <h3>Area Map</h3>
        <Table borderless className="p-3 shadow-sm rounded">
          <thead>
            <tr>
              <th colSpan={2} className="text-break text-wrap">
                <img
                  key={`map-${display_name}`}
                  src={mapSrc}
                  alt={`Map of ${display_name}`}
                  className="object-fit-contain img-fluid mx-auto border shadow-sm rounded"
                />
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
      </>
    );
  }
}
