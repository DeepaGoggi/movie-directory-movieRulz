import React, { useState } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = async () => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=2eb0a2c9&s=${search}`
    );
    const data = await res.json();

    setMovies(data.Search || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="my-4 d-flex">
        <Form.Control
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="ms-2">
          Search
        </Button>
      </Form>
      <Row>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <strong>Sit back, search, and start watching!</strong>
        )}
      </Row>
    </Container>
  );
};

export default Home;
