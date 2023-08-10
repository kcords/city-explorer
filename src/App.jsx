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
    this.setState({ currentCity });
  };

  render() {
    const {
      setCurrentCity,
      state: { currentCity },
    } = this;

    const strings = Object.freeze({
      title: "City Explorer",
    });

    return (
      <Container fluid className="min-vh-100 bg-info bg-gradient">
        <Row className="justify-content-center">
          <Col
            className="p-5 min-vh-100 bg-light shadow-lg border-start border-end border-dark-subtle border-1"
            xl={8}
          >
            <header className="mb-3">
              <h1>{strings.title}</h1>
            </header>
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
