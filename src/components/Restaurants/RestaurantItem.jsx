import React from "react";

import Card from "react-bootstrap/Card";

export default class RestaurantItem extends React.Component {
  render() {
    const {
      name,
      image_url,
      price,
      rating: ratingText,
      url,
    } = this.props.restaurant;
    const rating = Number(ratingText);
    const stars = new Array(Math.floor(rating)).fill(1);
    const partialStar = rating % 1;
    if (partialStar > 0) stars.push(partialStar);
    if (stars.length < 5) stars.push(...Array(5 - stars.length).fill(0));

    return (
      <Card className="col-lg-3 col-sm-5 flex-grow-1">
        <Card.Header>
          <h4>
            <a href={url}>{name}</a>
            <span className="ms-2 fs-5">{price}</span>
            <p className="my-2 fs-5">
              {stars.map((starValue, idx) => {
                return (
                  <span
                    key={idx}
                    style={{
                      background: `linear-gradient(90deg, #ff643d ${
                        starValue * 100
                      }%, #bbbac0 ${starValue * 100}%)`,
                      color: "#f3efef",
                      borderRadius: 3,
                      marginRight: "3px",
                      padding: "1px",
                    }}
                  >
                    ★
                  </span>
                );
              })}
              <span className="ms-2 fs-5">{rating}</span>
            </p>
          </h4>
        </Card.Header>
        <Card.Img src={image_url} alt={name} className="min-vh-10 img-fluid" />
      </Card>
    );
  }
}
