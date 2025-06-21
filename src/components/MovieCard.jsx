import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Card className="m-2" style={{ width: "14rem" }}>
    <Card.Img variant="top" src={movie.Poster} />
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>{movie.Year}</Card.Text>
      <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
        Details
      </Link>
    </Card.Body>
  </Card>
);

export default MovieCard;
