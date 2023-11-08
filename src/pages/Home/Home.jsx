import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../../components/moviesComponent/Movies";
import SearchMoviesForm from "../../components/moviesComponent/SearchMoviesForm";
import { HomeSearchMoviesFormContainer } from "./HomeStyledComponents";
import { HOME_PAGE_NAME } from "../../globalVariables";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    console.log("updating movies", newMovies);
    setMovies(newMovies);
  };
  const { setSubPageData } = usePage();
  useEffect(() => {
    setSubPageData(() => ({ name: HOME_PAGE_NAME }));
  }, []);

  return (
    <>
      <HomeSearchMoviesFormContainer>
        <SearchMoviesForm updateMovies={updateMovies} />
      </HomeSearchMoviesFormContainer>
      <Movies movies={movies} displayType={"grid"} />
    </>
  );
};

export default Home;
