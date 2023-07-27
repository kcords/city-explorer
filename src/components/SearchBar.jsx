import React from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default class SearchBar extends React.Component {
  render() {
    return (
      <Form>
        <InputGroup>
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control
            placeholder="Input your city search here..."
            aria-label="City search input"
          />
          <Button type="submit">Explore!</Button>
        </InputGroup>
      </Form>
    );
  }
}
