import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import MovieGallery from "./components/MovieGallery";
import NetflixGenreButton from "./components/NetflixGenreButton";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="bg-black text-white d-flex flex-column min-vh-100">
      <NetflixNavbar />

      <div className="flex-grow-1 text-white p-5 m-4">
        <NetflixGenreButton />
        <MovieGallery />
      </div>

      <NetflixFooter />
    </div>
  );
};

export default App;
