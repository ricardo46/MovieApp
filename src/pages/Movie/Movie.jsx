import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import Movies from "../../components/Movies/Movies";
import { SectionContainer } from "../../components/StyledComponents";
import { useGetAPIData } from "../../components/UseGetAPIData";
import { usePage } from "../../context/PageContext";
import { getMovieDataFromAPI } from "../../utils/apiUtils";
import {
  BigMovieContainer
} from "./MoviePageStyledComponents";

const MoviePage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const { subPageData, setSubPageData } = usePage();
  const { data: movieData, submitRequest, newFetch } = useGetAPIData();

  const setMovieData = () => {
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
        <BigMovieContainer>
          <MovieCard showDirector={true} movie={movie} />
        </BigMovieContainer>
        <SectionContainer>
          <Movies currentMovieId={movie.id} movies={movies} />
        </SectionContainer>
    </>
  );
};

export default MoviePage;
