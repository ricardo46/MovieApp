import { useEffect, useInsertionEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../../components/moviesComponent/Movies";
import SearchMoviesForm from "../../components/moviesComponent/SearchMoviesForm";
import { SectionContainer } from "../../components/StyledComponents";
import UserLists from "../../components/userLists/UserLists";
import FavoriteSymbol from "../../components/movieCardComponent/FavoriteSymbol";
import { useUser } from "../../context/UserContext";

const MyAccount = () => {
  const { subPageData, setSubPageData } = usePage();
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const { user, setUser } = useUser();

  const movieLists = user.movieLists;

  const [movieList, setMovieList] = useState([]);
  const [movieListId, setMovieListId] = useState(null);

  useEffect(() => {
    setSubPageData(() => ({
      name: `${location.pathname
        .slice(1, 2)
        .toUpperCase()}${location.pathname.slice(2)} Page`,
    }));
  }, []);

  const addFavoriteMovie = (e, movie) => {
    e.preventDefault();
    console.log("Current list", movieListId, movieList);
    if (movieListId) {
      console.log("This movie will be added to the list", movie);
    } else {
      console.log("No list selected! To add a movie select a list.");
    }
  };

  return (
    <>
      <SectionContainer>
        <UserLists
          setMovieList={setMovieList}
          setMovieListId={setMovieListId}
          movieList={movieList}
        />

        <Movies movies={movieList} size="small" />
      </SectionContainer>
      <SectionContainer>
        <SearchMoviesForm updateMovies={updateMovies} />
        <Movies
          movies={movies}
          favoriteSymbol={<FavoriteSymbol />}
          addFavoriteMovie={addFavoriteMovie}
        />
      </SectionContainer>
    </>
  );
};

export default MyAccount;
