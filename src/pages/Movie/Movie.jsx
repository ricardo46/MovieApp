import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMovieDataFromAPI,
  requestWasSuccessful,
} from "../../utils/apiUtils";
import MovieCard from "../../components/movieCardComponent/MovieCardComponent";
import { usePage } from "../../context/PageContext";
import { MoviesContainer } from "./MoviePageStyledComponents";
import { useError } from "../../context/ErrorContext";
import { SectionContainer } from "../../components/StyledComponents";
import Movies from "../../components/moviesComponent/Movies";

const useMovies = ({ movieId, setMovie }) => {
  const { error, setError } = useError();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const requestMovieFromAPI = async () => {
    const response = await getMovieDataFromAPI(movieId);

    if (requestWasSuccessful(response)) {
      setMovie(() => response.data);
      console.log("response.data", response.data);
      setMovies(() => response.data.director.movieList);
    } else {
      setError({
        message: response.response.data.message,
        status: response.response.status,
      });
      navigate("/errorPage");
    }
  };

  useEffect(() => {
    requestMovieFromAPI();
  }, [movieId]);

  return { movies, setMovies };
};

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const { subPageData, setSubPageData } = usePage();

  const { movies, setMovies } = useMovies({ movieId, setMovie });

  useEffect(() => {
    setSubPageData(() => ({ name: movie.title }));
  }, [movie]);

  return (
    <>
      <SectionContainer>
        <MovieCard movie={movie} size={"big"} />
        <MoviesContainer>
          <Movies movies={movies} />
        </MoviesContainer>
      </SectionContainer>
    </>
  );
};

export default MoviePage;
