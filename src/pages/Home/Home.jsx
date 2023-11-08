import { useEffect, useState } from "react";
import { usePage } from "../../Context/PageContext";
import Movies from "../../components/Movies/Movies";
import SearchMoviesForm from "../../components/Movies/SearchMoviesForm";
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
