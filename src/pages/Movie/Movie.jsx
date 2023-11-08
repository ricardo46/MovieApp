import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import { usePage } from "../../Context/PageContext";
import {
  BigMovieContainer,
  MoviesContainer,
} from "./MoviePageStyledComponents";
import { SectionContainer } from "../../components/StyledComponents";
import Movies from "../../components/Movies/Movies";
import { useGetAPIData } from "../../components/UseGetAPIData";
import { getMovieDataFromAPI } from "../../utils/apiUtils";

const MoviePage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const { subPageData, setSubPageData } = usePage();
  const { data: movieData, submitRequest, newFetch } = useGetAPIData();

  const setMovieData = () => {
    console.log("movieData", movieData);

    setMovie(movieData);
    const directorMovies = movieData?.director?.movieList;
    setMovies(directorMovies);
  };

  useEffect(() => {
    newFetch({ apiParams: [movieId], apiRequest: getMovieDataFromAPI });
  }, [movieId]);

  useEffect(() => {
    setSubPageData(() => ({ name: movie.title }));

    setMovieData();
  }, [movieData]);

  useEffect(() => {
    setSubPageData(() => ({ name: movie.title }));
  }, [movie]);

  useEffect(() => {
    if (submitRequest.error) {
      navigate("/");
    }
    setMovieData();
  }, [submitRequest]);

  return (
    <>
      <SectionContainer>
        <BigMovieContainer>
          <MovieCard showDirector={true} movie={movie} />
        </BigMovieContainer>
        <MoviesContainer>
          <Movies currentMovieId={movie.id} movies={movies} />
        </MoviesContainer>
      </SectionContainer>
    </>
  );
};

export default MoviePage;
