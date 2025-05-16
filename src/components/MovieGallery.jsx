import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const API_KEY = "996e7de7";

const trendingNow = [
  "Deadpool & Wolverine",
  "Mission: Impossible - The Final Reckoning",
  "Final Destination: Bloodlines",
  "The Accountant 2",
  "Sinners",
  "A Minecraft Movie",
];

const watchItAgain = ["Interstellar", "The Matrix", "Inception", "Titanic", "Gladiator", "Avatar"];

const newReleases = ["Captain America: Brave New World", "Superman", "Inside Out 2", "The Smurfs", "The Legend of Ochi", "The Shrouds"];

const MovieGallery = () => {
  const [movies, setMovies] = useState({ trending: [], watchAgain: [], newReleases: [] });

  useEffect(() => {
    const fetchMovies = async (category, movieList) => {
      const movieData = [];

      for (const title of movieList) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if (data.Response !== "False") {
          movieData.push(data);
        }
      }

      setMovies((prevMovies) => ({ ...prevMovies, [category]: movieData }));
    };

    fetchMovies("trending", trendingNow);
    fetchMovies("watchAgain", watchItAgain);
    fetchMovies("newReleases", newReleases);
  }, []);

  return (
    <Container>
      <h2 className="my-4 text-start">Trending Now</h2>
      <Row className="justify-content-center">
        {movies.trending.map((movie) => (
          <Col key={movie.Title} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card className="border-0">
              <Card.Img variant="top" src={movie.Poster} alt="Film Poster" />
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="my-4 text-start">Watch It Again</h2>
      <Row className="justify-content-center">
        {movies.watchAgain.map((movie) => (
          <Col key={movie.Title} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card className="border-0">
              <Card.Img variant="top" src={movie.Poster} alt="Film Poster" />
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="my-4 text-start">New Releases</h2>
      <Row className="justify-content-center">
        {movies.newReleases.map((movie) => (
          <Col key={movie.Title} xs={6} sm={4} md={3} lg={2} className="mb-3">
            <Card className="border-0">
              <Card.Img variant="top" src={movie.Poster} alt="Film Poster" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieGallery;
