import { useState } from "react";
const NetflixGenreButton = () => {
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="d-flex align-items-center gap-3">
      <h1>TV Show</h1>
      <select className="form-select bg-dark text-white border-white" style={{ width: "150px" }} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="" hidden>
          Genre
        </option>
        <option value="Drammatico">Drammatico</option>
        <option value="Animazione">Animazione</option>
        <option value="Commedia">Commedia</option>
      </select>

      {selectedGenre && (
        <p className="mt-3">
          Hai selezionato: <strong>{selectedGenre}</strong>
        </p>
      )}
    </div>
  );
};

export default NetflixGenreButton;
