import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SearchBar, CityDetails } from "./components/";

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
    const {
      setCurrentCity,
      state: { currentCity },
    } = this;

    return (
      <Container fluid className="min-vh-100 bg-info bg-gradient">
        <Row className="justify-content-center">
          <Col className="py-5 min-vh-100 bg-light" xl={8}>
            <Row>
              <Col>
                <SearchBar setCurrentCity={setCurrentCity} />
              </Col>
            </Row>
            {currentCity && (
              <Row className="py-5 justify-content-center w-100 mx-auto">
                <Col className="w-100">
                  <CityDetails currentCity={currentCity} />
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
