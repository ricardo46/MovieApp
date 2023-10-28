import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../../components/moviesComponent/Movies";
import SearchMoviesForm from "../../components/moviesComponent/SearchMoviesForm";

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
      <Movies movies={movies} displayType={"grid"} />
    </>
  );
};

export default Home;
