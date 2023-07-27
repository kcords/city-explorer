import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCity: null,
    };
  }

  setCurrentCity = (currentCity) => {
    console.dir(currentCity);
    this.setState({ currentCity });
  };

  render() {
    const { setCurrentCity } = this;

    return (
      <Container>
        <Row>
          <Col className="my-4">
            <SearchBar setCurrentCity={setCurrentCity} />
          </Col>
        </Row>
      </Container>
    );
  }
}
