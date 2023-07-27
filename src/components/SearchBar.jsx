import React from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleSearchInput = ({ target: { value: searchTerm } }) => {
    this.setState({ searchTerm });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { setCurrentCity } = this.props;
    const apiURL = `https://us1.locationiq.com/v1/search?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&q=${this.state.searchTerm}&format=json`;
    const {
      data: [currentCity],
    } = await axios.get(apiURL);
    setCurrentCity(currentCity);
  };

  render() {
    const {
      handleSearchInput,
      handleSubmit,
      state: { searchTerm },
    } = this;

    return (
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control
            placeholder="Input your city search here..."
            aria-label="City search input"
            onChange={handleSearchInput}
            onKeyPress={({ key }) => key === "enter" && handleSubmit()}
            value={searchTerm}
          />
          <Button type="submit" disabled={!searchTerm}>
            {searchTerm ? "Explore!" : "Ready?"}
          </Button>
        </InputGroup>
      </Form>
    );
  }
}
