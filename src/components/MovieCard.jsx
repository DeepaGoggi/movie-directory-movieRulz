// import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const MovieCard = ({ movie }) => (
//   <Card className="m-2" style={{ width: "14rem" }}>
//     <Card.Img variant="top" src={movie.Poster} />
//     <Card.Body>
//       <Card.Title>{movie.Title}</Card.Title>
//       <Card.Text>{movie.Year}</Card.Text>
//       <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
//         Details
//       </Link>
//     </Card.Body>
//   </Card>
// );

// export default MovieCard;

// import React from "react";

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img
//         src={
//           movie.Poster !== "N/A"
//             ? movie.Poster
//             : "https://via.placeholder.com/300x445?text=No+Image"
//         }
//         alt={movie.Title}
//         className="w-full h-80 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold">{movie.Title}</h3>
//         <p className="text-gray-600">Year: {movie.Year}</p>
//         <p className="text-gray-600 capitalize">Type: {movie.Type}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import React from "react";
import { Card, Col } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x445?text=No+Image"
          }
          alt={movie.Title}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            <strong>Year:</strong> {movie.Year}
          </Card.Text>
          <Card.Text>
            <strong>Type:</strong> {movie.Type}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
