import React from "react";

import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import ListGroup from "react-bootstrap/ListGroup";

export default class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;
    const {
      title,
      overview,
      average_votes,
      total_votes,
      image_url,
      popularity,
      released_on,
    } = movie;

    return (
      <Card className="vh-40">
        {image_url ? (
          <Card.Img variant="top" src={image_url} alt={title} />
        ) : (
          <Placeholder as={Card.Img} size="lg" />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
          <ListGroup>
            <ListGroup.Item>Release Date: {released_on}</ListGroup.Item>
            <ListGroup.Item>Popularity ranking: {popularity}</ListGroup.Item>
            <ListGroup.Item>Total Votes: {total_votes}</ListGroup.Item>
            <ListGroup.Item>Vote Average: {average_votes}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
