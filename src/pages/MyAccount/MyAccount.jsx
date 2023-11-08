import { useEffect, useState } from "react";
import { usePage } from "../../Context/PageContext";
import Movies from "../../components/MoviesComponent/Movies";
import SearchMoviesForm from "../../components/MoviesComponent/SearchMoviesForm";
import {
  ErrorMessage,
  SectionContainer,
  SuccessMessage,
} from "../../components/StyledComponents";
import UserLists from "./UserLists";
import FavoriteSymbol from "../../components/MovieCardComponent/FavoriteSymbol";
import { movieExistsInList } from "./utils";
import { patchListWithMovie } from "../../utils/apiUtils";
import { updateMovieObjectList } from "./MyAccountUtils";
import { MESSAGE_DURATION, MY_ACCOUNT_PAGE_NAME } from "../../globalVariables";
import { useUser } from "../../context/UserContext";

const MyAccount = () => {
  const { setSubPageData } = usePage();
  const [movies, setMovies] = useState([]);
  const updateMovies = (newMovies) => {
    setMovies(newMovies);
  };

  const { user, updateUser } = useUser();

  const movieLists = user.movieLists;

  const [movieListObj, setMovieListObj] = useState(movieLists[0]);
  const [submitRequest, setSubmitRequest] = useState({
    isLoading: false,
    submitted: false,
    error: false,
  });
  const [messageIsVisible, setMessageIsVisible] = useState(true);

  useEffect(() => {
    setSubPageData(() => ({
      name: MY_ACCOUNT_PAGE_NAME,
    }));
  }, []);

  const addFavoriteMovie = async (e, movie) => {
    e.preventDefault();
    setSubmitRequest({
      isLoading: true,
    });
    if (movieListObj?.id) {
      if (movieExistsInList(movie, movieListObj.list)) {
        setSubmitRequest({
          error: true,
          submitted: true,
          isLoading: false,
          message: `movie ${movie.title} already exists in ${movieListObj.name}`,
        });
      } else {
        setSubmitRequest({
          isLoading: true,
        });
        try {
          const response = await patchListWithMovie(movieListObj.id, [
            {
              movie_id: movie.id,
            },
          ]);

          updateMovieObjectList(movie, movieListObj, setMovieListObj);

          setSubmitRequest({
            error: false,
            submitted: true,
            isLoading: false,
            message: `movie ${movie.title} was added to ${movieListObj.name}`,
          });
        } catch (err) {
          setSubmitRequest({
            error: true,
            submitted: true,
            message: err.response.data.message,
            isLoading: false,
          });
        }
      }
    } else {
      setSubmitRequest({
        error: true,
        submitted: true,
        message: "No list selected! To add a movie select a list.",
        isLoading: false,
      });
    }
    setMessageIsVisible(true);
    setTimeout(() => {
      setMessageIsVisible(false);
    }, MESSAGE_DURATION);
  };

  useEffect(() => {
    const newMovieLists = movieLists.map((list) =>
      list.id == movieListObj.id ? movieListObj : list
    );

    updateUser({ movieLists: newMovieLists });
    
  }, [movieListObj]);

  return (
    <>
      <SectionContainer>
        <UserLists
          movieListObj={movieListObj}
          setMovieListObj={setMovieListObj}
        />
        <Movies movies={movieListObj?.list} size="small" />
        {submitRequest.error
          ? messageIsVisible && (
              <ErrorMessage>{submitRequest.message}</ErrorMessage>
            )
          : messageIsVisible && (
              <SuccessMessage>{submitRequest.message}</SuccessMessage>
            )}
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
