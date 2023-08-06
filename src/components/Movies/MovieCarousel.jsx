import React from "react";
import { getTopMovies } from "../../assets/axios.js";

import Carousel from "react-bootstrap/Carousel";
import MovieItem from "./MovieItem";

export default class MovieCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      errorMessage: null,
    };
  }

  componentDidMount = async () => {
    const { currentCity } = this.props;
    const stateUpdate = await getTopMovies(currentCity);
    this.setState(stateUpdate);
  };

  render() {
    const { movies, errorMessage } = this.state;

    const SECONDS = 1000;
    const AUTO_INTERVAL = 15 * SECONDS;

    return (
      <>
        <h3>Popular Movies</h3>
        {errorMessage || movies.length < 1 ? (
          errorMessage || "No movie data available"
        ) : (
          <Carousel wrap className="vh-40">
            {movies?.map((movie) => (
              <Carousel.Item key={movie.title} interval={AUTO_INTERVAL}>
                <MovieItem movie={movie} />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </>
    );
  }
}
