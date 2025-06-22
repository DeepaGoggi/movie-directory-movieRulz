import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="mb-4 shadow-md h-100 ">
        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <strong>Year: </strong>
            {movie.Year}
          </Card.Text>
          <Card.Text>
            <strong>Type: </strong>
            {movie.Type}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
