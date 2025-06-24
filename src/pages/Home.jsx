import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Container, Form, Button, Row, Alert } from "react-bootstrap";

const defaultMovies = [
  {
    imdbID: "tt10698680",
    Title: "KGF Chapter 2",
    Year: "2022",
    Type: "movie",
    Poster:
      "https://www.indiantelevision.com/sites/default/files/images/tv-images/2022/04/07/img_07042022_145600_800_x_800_pixel.jpg",
  },
  {
    imdbID: "tt4374286",
    Title: "Monstrum",
    Year: "2018",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGM4OGFjNmQtN2RjOS00ODcyLWJmY2MtOGE4MzhmZmZkMWRkXkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt15327088",
    Title: "Kantara",
    Year: "2022",
    Type: "movie",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
  },
  {
    imdbID: "tt1187043",
    Title: "3 Idiots",
    Year: "2009",
    Type: "movie",
    Poster:
      "https://www.tallengestore.com/cdn/shop/products/3_Idiots_35dfe421-8426-4556-b410-c033ccedd460.jpg?v=1582192744",
  },
  {
    imdbID: "tt0952640",
    Title: "Alvin and the Chipmunks",
    Year: "2007",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/I/51hQVFKMJIL.jpg",
  },
  {
    imdbID: "tt8178634",
    Title: "RRR",
    Year: "2022",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    imdbID: "tt0111161",
    Title: "Shawshank Redemption",
    Year: "1994",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/I/71QykliX-0S._AC_UF1000,1000_QL80_.jpg",
  },

  {
    imdbID: "tt4154796",
    Title: "Avengers: Endgame",
    Year: "2019",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/I/81KJ-sK0YpS.jpg",
  },

  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt7268738",
    Title: "Minnal Murali",
    Year: "2021",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWY0ZGJiNWYtNTUwMC00YjE4LTg2ODYtMDVjYTEyNTNjMjRhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt5074352",
    Title: "Dangal",
    Year: "2016",
    Type: "movie",
    Poster:
      "https://www.tallengestore.com/cdn/shop/products/7381744058548A_393fc709-d8bd-416d-9b71-823d7d492afa.jpg?v=1683929345",
  },
  {
    imdbID: "tt9389998",
    Title: "Pushpa: The Rise - Part 1",
    Year: "2021",
    Type: "movie",
    Poster:
      "https://xl.movieposterdb.com/22_01/2021/9389998/xl_9389998_6721d93c.jpg",
  },
  {
    imdbID: "tt2338151",
    Title: "PK",
    Year: "2014",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    imdbID: "tt7019842",
    Title: "96",
    Year: "2018",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGI5M2Q4MDktOWVlOS00MzVjLWJlNzktMWZmYTkwOGI2MDc4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt15097216",
    Title: "Jai Bhim",
    Year: "2021",
    Type: "movie",
    Poster:
      "https://rukminim2.flixcart.com/image/850/1000/kx3l0nk0/poster/0/e/a/medium-jai-bhim-1218-original-imag9m4bqstbw8gz.jpeg?q=20&crop=false",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState(defaultMovies);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchTerm}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(
          "Oops! Sorry, we don’t have any movies matching your search.."
        );
      }
    } catch (err) {
      setError("Failed to fetch data from API.");
      setMovies([]);
    }
  };

  return (
    <Container className="my-4">
      <Form
        onSubmit={handleSearch}
        className="d-flex mb-4 justify-content-center"
      >
        <Form.Control
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: "400px" }}
        />
        <Button variant="primary" type="submit" className="ms-2">
          Search
        </Button>
      </Form>

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      <Row xs={1} sm={2} md={3} className="g-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
