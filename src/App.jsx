import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="my-4">
            <SearchBar />
          </Col>
        </Row>
      </Container>
    );
  }
}
