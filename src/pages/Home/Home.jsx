import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../../components/Movies/Movies";
import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";
import { HOME_PAGE_NAME } from "../../globalVariables";
import { SectionContainer } from "../../components/StyledComponents";

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
      {/* <HomePageContainer> */}
      <SectionContainer>
        {/* <HomeSearchMoviesFormContainer> */}
        <SearchMoviesForm updateMovies={updateMovies} />
        {/* </HomeSearchMoviesFormContainer> */}
        {/* </SectionContainer>

        <SectionContainer> */}
        <Movies movies={movies} displayType={"grid"} />
      </SectionContainer>
      {/* </HomePageContainer> */}
    </>
  );
};

export default Home;
