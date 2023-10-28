import { useState } from "react";
import Movies from "./Movies";
import SearchMoviesForm from "./SearchForm";

const SearchAndShowMovies = () => {
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <>
      <SearchMoviesForm updateMovies={updateMovies} />
      <Movies movies={movies} />
    </>
  );
};

