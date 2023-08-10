import React from "react";
import { getLocalRestaurants } from "../../assets/axios";

import Row from "react-bootstrap/Row";
import RestaurantItem from "./RestaurantItem";

export default class Restaurants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      errorMessage: null,
    };
  }

  componentDidMount = async () => {
    const { currentCity } = this.props;
    const stateUpdate = await getLocalRestaurants(currentCity);
    this.setState(stateUpdate);
  };

  render() {
    const { restaurants, errorMessage } = this.state;
    const strings = {
      title: "Top Local Restaurants",
      defaultErrMsg: "No restaurant data available",
    };

    return (
      <>
        <h3>{strings.title}</h3>
        {errorMessage ?? restaurants.length < 1 ? (
          errorMessage ?? strings.defaultErrMsg
        ) : (
          <Row className="d-flex justify-content-between gap-2 g-4">
            {restaurants.map((restaurant) => (
              <RestaurantItem key={0} restaurant={restaurant} />
            ))}
          </Row>
        )}
      </>
    );
  }
}
