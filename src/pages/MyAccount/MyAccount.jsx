import { useEffect, useState } from "react";
import { usePage } from "../../context/PageContext";
import Movies from "../../components/moviesComponent/Movies";
import SearchMoviesForm from "../../components/moviesComponent/SearchMoviesForm";
import {
  FormMessage,
  SectionContainer,
} from "../../components/StyledComponents";
import UserLists from "../../components/userLists/UserLists";
import FavoriteSymbol from "../../components/movieCardComponent/FavoriteSymbol";
import { useUser } from "../../context/UserContext";
import { movieExistsInList } from "./utils";
import { patchListWithMovie } from "../../utils/apiUtils";
import { updateMovieObjectList } from "./MyAccountUtils";

const MyAccount = () => {
  const { setSubPageData } = usePage();
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const { user, setUser } = useUser();

  const movieLists = user.movieLists;

  const [movieListObj, setMovieListObj] = useState({});
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });

  useEffect(() => {
    setSubPageData(() => ({
      name: `${location.pathname
        .slice(1, 2)
        .toUpperCase()}${location.pathname.slice(2)} Page`,
    }));
  }, []);

  const addFavoriteMovie = async (e, movie) => {
    e.preventDefault();
    setSubmitRequest({
      isLoading: true,
    });
    if (movieListObj.id) {
      console.log("This movie will be added to the list", movie);
      console.log("movieListObj", movieListObj);

      if (movieExistsInList(movie, movieListObj.list)) {
        console.log(
          `movie ${movie.title} already exists in ${movieListObj.name}`
        );
        setSubmitRequest({
          error: false,
          submitted: true,
          isLoading: false,
          message: `movie ${movie.title} already exists in ${movieListObj.name}`,
        });
      } else {
        try {
          const response = await patchListWithMovie(movieListObj.id, [
            {
              movie_id: movie.id,
            },
          ]);
          console.log("response222", response);

          updateMovieObjectList(movie,movieListObj,setMovieListObj)

          setSubmitRequest({
            error: false,
            submitted: true,
            isLoading: false,
            message: `movie ${movie.title} was added to ${movieListObj.name}`,
          });
        } catch (err) {
          console.log(err);
          setSubmitRequest({
            error: true,
            submitted: true,
            errorMessage: err.response.data.message,
            isLoading: false,
          });
        }
      }
    } else {
      console.log("No list selected! To add a movie select a list.");
      setSubmitRequest({
        error: false,
        submitted: true,
        message: "No list selected! To add a movie select a list.",
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    const newMovieLists = movieLists.map((list) =>
      list.id == movieListObj.id ? movieListObj : list
    );

    setUser((prev) => ({
      ...prev,
      movieLists: newMovieLists,
    }));
  }, [movieListObj]);

  return (
    <>
      <SectionContainer>
        <UserLists
          setMovieListObj={setMovieListObj}
          // movieList={movieList}
        />
        {console.log("movieListObj.list", movieListObj.list)}
        <Movies movies={movieListObj.list} size="small" />
        <FormMessage>{submitRequest.message}</FormMessage>
        <FormMessage>{submitRequest.errorMessage}</FormMessage>
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
