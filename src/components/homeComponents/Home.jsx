import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../moviesComponents/Movies";
import SearchMoviesForm from "../moviesComponents/SearchForm";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };
  const { setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData(() => ({ name: "Home Page" }));
  }, []);

  
  return (
    <>
        <SearchMoviesForm updateMovies={updateMovies} />
      <Movies movies={movies} displayType={'grid'} />
    </>
  );
};

export default Home;
