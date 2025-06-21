// import React, { useState } from "react";
// import { Container, Form, Button, Row } from "react-bootstrap";
// import MovieCard from "../components/MovieCard";

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [movies, setMovies] = useState([]);

//   const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

//   const fetchMovies = async () => {
//     const res = await fetch(
//       `http://www.omdbapi.com/?apikey=2eb0a2c9&s=${search}`
//     );
//     const data = await res.json();

//     setMovies(data.Search || []);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchMovies();
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit} className="my-4 d-flex">
//         <Form.Control
//           type="text"
//           placeholder="Search movies..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <Button type="submit" className="ms-2">
//           Search
//         </Button>
//       </Form>
//       <Row>
//         {movies.length > 0 ? (
//           movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
//         ) : (
//           <strong>Sit back, search, and start watching!</strong>
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default Home;

import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { Container, Form, Button, Row, Alert } from "react-bootstrap";

const defaultMovies = [
  {
    imdbID: "tt10698680",
    Title: "KGF Chapter 1",
    Year: "2018",
    Type: "movie",
    Poster:
      "https://resizing.flixster.com/qO53dQK8Q2ED_EgNuRKtKGQPODs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEwYTllYmMyLTE5N2EtNDVmYy1iZWUzLWI3NTAwZDEwZGQ2Yi53ZWJw",
  },
  {
    imdbID: "tt4374286",
    Title: "Ramachari",
    Year: "2014",
    Type: "movie",
    Poster: "https://i.scdn.co/image/ab67616d0000b2733ded77413d50d4edbcc213fa",
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
    Title: "Taare Zameen Par",
    Year: "2007",
    Type: "movie",
    Poster:
      "https://cdn.cinematerial.com/p/297x/preabpt7/taare-zameen-par-indian-movie-poster-md.jpg?v=1456255125",
  },
  {
    imdbID: "tt8178634",
    Title: "Gully Boy",
    Year: "2019",
    Type: "movie",
    Poster:
      "https://upload.wikimedia.org/wikipedia/en/0/07/Gully_Boy_poster.jpg",
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
    Title: "Mahanati",
    Year: "2018",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU3ZjM1NTgtYjc2Mi00YzNjLWE1OWQtMjk5MDM4MmU3ZjZjXkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt5074352",
    Title: "Baahubali 2: The Conclusion",
    Year: "2017",
    Type: "movie",
    Poster:
      "https://rukminim2.flixcart.com/image/850/1000/kzygpzk0/poster/r/q/s/large-movie-bahubali-2-posters-on-large-print-36x24-inches-original-imagbukjsjtksjsg.jpeg?q=90&crop=false",
  },
  {
    imdbID: "tt10698680",
    Title: "Pushpa: The Rise - Part 1",
    Year: "2021",
    Type: "movie",
    Poster:
      "https://lh3.googleusercontent.com/proxy/OS2Bbku9O_HyiQFnLmCikVNQ77VipxM842fdCWlqcjwcvDe2mAfEtsmvJ8oY-NBj5jagmmAIq-V2erAs0lOREXHhQZWE9x6bcLX6Lnq7nUdy4un8c1IUvAVBtgimhKW0Eg",
  },
  {
    imdbID: "tt2338151",
    Title: "Vikram Vedha",
    Year: "2017",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjc2YjVhNWQtYzVmZC00YzAyLTljNTItMmUxMTk1NjcyMThhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt7019942",
    Title: "96",
    Year: "2018",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGI5M2Q4MDktOWVlOS00MzVjLWJlNzktMWZmYTkwOGI2MDc4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    imdbID: "tt10579952",
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
      setError("No movies found.");
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
