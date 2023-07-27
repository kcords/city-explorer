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
      this.handleReset();
    } catch ({ response }) {
      const { error } = response?.data || {
        error: "Unknown error, please try again",
      };
      const { status } = response;
      this.setState({ errorMessage: `${status} ${error}` });
    }

    setCurrentCity(currentCity);
  };

  handleReset = () => {
    this.setState({
      searchTerm: "",
      errorMessage: null,
    });
  };

  render() {
    const {
      handleSearchInput,
      handleSubmit,
      handleReset,
      state: { searchTerm, errorMessage },
    } = this;

    return (
      <Form onSubmit={handleSubmit} onReset={handleReset}>
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
          <Button
            type={errorMessage ? "reset" : "submit"}
            disabled={!searchTerm}
          >
            {errorMessage ? "Start over" : searchTerm ? "Explore!" : "Ready?"}
          </Button>
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
      </Form>
    );
  }
}
