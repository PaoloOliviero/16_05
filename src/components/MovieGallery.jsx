import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const API_KEY = "996e7de7";

const lordOfTheRingsSaga = [
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Lord of the Rings: The Two Towers",
  "The Lord of the Rings: The Return of the King",
  "The Hobbit: An Unexpected Journey",
  "The Hobbit: The Desolation of Smaug",
  "The Hobbit: The Battle of the Five Armies",
];

const missionImpossibleSaga = [
  "Mission: Impossible",
  "Mission: Impossible 2",
  "Mission: Impossible III",
  "Mission: Impossible - Ghost Protocol",
  "Mission: Impossible - Rogue Nation",
  "Mission: Impossible - Fallout",
];

const rockySaga = ["Rocky", "Rocky II", "Rocky III", "Rocky IV", "Rocky V", "Rocky Balboa"];

const MovieGallery = () => {
  const [movies, setMovies] = useState({ lordOfTheRings: [], missionImpossible: [], rocky: [] });

  useEffect(() => {
    const fetchMovies = async (category, movieList) => {
      const movieData = [];

      for (const title of movieList) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if (data.Response !== "False") {
          movieData.push({
            imdbID: data.imdbID,
            poster: data.Poster,
          });

          console.log(`Film trovato (${category}):`, {
            title: data.Title,
            year: data.Year,
            poster: data.Poster,
          });
        }
      }

      setMovies((prevMovies) => ({ ...prevMovies, [category]: movieData }));
    };

    fetchMovies("lordOfTheRings", lordOfTheRingsSaga);
    fetchMovies("missionImpossible", missionImpossibleSaga);
    fetchMovies("rocky", rockySaga);
  }, []);

  return (
    <Container>
      <h2 className="my-4 text-start">The Lord of the Rings + The Hobbit Saga</h2>
      <Row className="justify-content-center g-3">
        {movies.lordOfTheRings.map((movie) => (
          <Col key={movie.imdbID} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
            <img src={movie.poster} alt="Movie Poster" className="img-fluid rounded" />
          </Col>
        ))}
      </Row>

      <h2 className="my-4 text-start">Mission: Impossible Saga</h2>
      <Row className="justify-content-center g-3">
        {movies.missionImpossible.map((movie) => (
          <Col key={movie.imdbID} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
            <img src={movie.poster} alt="Movie Poster" className="img-fluid rounded" />
          </Col>
        ))}
      </Row>

      <h2 className="my-4 text-start">Rocky Saga</h2>
      <Row className="justify-content-center g-3">
        {movies.rocky.map((movie) => (
          <Col key={movie.imdbID} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
            <img src={movie.poster} alt="Movie Poster" className="img-fluid rounded" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGallery;
