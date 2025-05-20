import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const API_KEY = "996e7de7";

const sagas = {
  lordOfTheRings: [
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Hobbit: An Unexpected Journey",
    "The Hobbit: The Desolation of Smaug",
    "The Hobbit: The Battle of the Five Armies",
  ],
  missionImpossible: [
    "Mission: Impossible",
    "Mission: Impossible 2",
    "Mission: Impossible III",
    "Mission: Impossible - Ghost Protocol",
    "Mission: Impossible - Rogue Nation",
    "Mission: Impossible - Fallout",
  ],
  rocky: ["Rocky", "Rocky II", "Rocky III", "Rocky IV", "Rocky V", "Rocky Balboa"],
};

class MovieGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        lordOfTheRings: [],
        missionImpossible: [],
        rocky: [],
      },
    };
  }

  componentDidMount() {
    this.fetchAllMovies();
  }

  async fetchAllMovies() {
    const moviesData = {};
    for (const category in sagas) {
      moviesData[category] = await this.fetchMovies(sagas[category]);
    }
    this.setState({ movies: moviesData });
  }

  async fetchMovies(movieList) {
    const movieData = await Promise.all(
      movieList.map(async (title) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
        const data = await response.json();

        if (data.Response !== "False") {
          console.log("Search result:", data);
          return { imdbID: data.imdbID, poster: data.Poster };
        }
        return null;
      })
    );

    return movieData.filter((movie) => movie !== null);
  }

  render() {
    return (
      <Container>
        {Object.entries(this.state.movies).map(([category, movies]) => (
          <React.Fragment key={category}>
            <h2 className="my-4 pr-5 text-start">{category.split(/(?=[A-Z])/).join(" ")}</h2>
            <Row className="justify-content-center g-3">
              {movies.map((movie) => (
                <Col key={movie.imdbID} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                  <img src={movie.poster} alt="Movie Poster" className="img-fluid rounded" />
                </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
      </Container>
    );
  }
}

export default MovieGallery;
