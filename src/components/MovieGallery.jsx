import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_KEY = "996e7de7";

const moviesList = [
  "Interstellar",
  "The Matrix",
  "Inception",
  "Titanic",
  "Gladiator",
  "Avatar",
  "Pulp Fiction",
  "The Dark Knight",
  "Forrest Gump",
  "Joker",
  "The Lion King",
  "Frozen",
  "Toy Story",
  "The Godfather",
  "Shrek",
  "Fight Club",
  "Star Wars",
  "Harry Potter and the Sorcerer's Stone",
];

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = [];

      for (const title of moviesList) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if (data.Response !== "False") {
          console.log("Film trovato:", data);
          movieData.push(data);
        }
      }

      console.log("Lista finale di film:", movieData);
      setMovies(movieData);
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.Title} md={2} className="mb-3">
            <Card>
              <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGallery;
