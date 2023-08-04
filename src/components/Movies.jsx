import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default class Movies extends React.Component {
  render() {
    const { movies, errorMessage } = this.props;

    const SECONDS = 1000;
    const AUTO_INTERVAL = 15 * SECONDS;

    return (
      <>
        <h3>Popular Movies</h3>
        <Carousel wrap className="vh-40">
          {movies
            ? movies?.map(
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
                        <Card.Text>
                          <p>{overview}</p>
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
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                )
              )
            : errorMessage}
        </Carousel>
      </>
    );
  }
}
