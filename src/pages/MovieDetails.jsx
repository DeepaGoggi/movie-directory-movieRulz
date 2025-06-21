import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=2eb0a2c9&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <Container className="my-4">
      {movie ? (
        <>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>
            {movie.Title} ({movie.Year})
          </h2>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default MovieDetails;
