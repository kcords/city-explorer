import React from "react";

import Table from "react-bootstrap/Table";

export default class CityDetails extends React.Component {
  render() {
    const {
      currentCity: { display_name, lat, lon },
    } = this.props;

    const { VITE_SERVER_URL } = import.meta.env;

    const mapSrc = `${VITE_SERVER_URL}/map?lat=${lat}&lon=${lon}`;
    const strings = Object.freeze({
      title: "Area Map",
    });

    return (
      <>
        <h3>{strings.title}</h3>
        <Table borderless className="p-3 shadow-sm rounded w-100">
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
