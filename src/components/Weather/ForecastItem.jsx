import React from "react";

export default class ForecastItem extends React.Component {
  render() {
    const { date, description } = this.props.forecast;
    const dateObj = new Date(date);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      dateObj
    );
    return (
      <tr key={date + description}>
        <td className="text-break text-wrap">{formattedDate}</td>
        <td className="text-break text-wrap">{description}</td>
      </tr>
    );
  }
}
