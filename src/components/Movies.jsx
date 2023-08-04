import React from "react";
import { getTopMovies } from "../assets/axios.js";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default class Movies extends React.Component {
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
            (
            {movies?.map(
              ({
                title,
                overview,
                average_votes,
                total_votes,
                image_url,
                popularity,
                released_on,
              }) => (
                <Carousel.Item key={title} interval={AUTO_INTERVAL}>
                  <Card className="vh-40">
                    {image_url && (
                      <Card.Img variant="top" src={image_url} alt={title} />
                    )}
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{overview}</Card.Text>
                      <ListGroup>
                        <ListGroup.Item>
                          Release Date: {released_on}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Popularity ranking: {popularity}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Total Votes: {total_votes}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Vote Average: {average_votes}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              )
            )}
            )
          </Carousel>
        )}
      </>
    );
  }
}
