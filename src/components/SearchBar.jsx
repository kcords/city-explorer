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
      errorMessage: null,
    };
  }

  handleSearchInput = ({ target: { value: searchTerm } }) => {
    this.setState({ searchTerm, errorMessage: null });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { setCurrentCity } = this.props;
    const apiURL = `https://us1.locationiq.com/v1/search?key=${
      import.meta.env.VITE_LOCATIONIQ_API_KEY
    }&q=${this.state.searchTerm}&format=json`;
    let currentCity = null;
    try {
      const { data } = await axios.get(apiURL);
      if (data[0]) currentCity = data[0];
    } catch (error) {
      const { error: errorMessage } = error?.response?.data || {
        error: "Unknown error, please try again",
      };
      this.setState({ errorMessage });
    }
    setCurrentCity(currentCity);
  };

  render() {
    const {
      handleSearchInput,
      handleSubmit,
      state: { searchTerm, errorMessage },
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
            isInvalid={errorMessage}
          />
          <Button type="submit" disabled={!searchTerm}>
            {searchTerm ? "Explore!" : "Ready?"}
          </Button>
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
      </Form>
    );
  }
}
