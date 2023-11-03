import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/movieCardComponent/MovieCardComponent";
import { usePage } from "../../context/PageContext";
import { MoviesContainer } from "./MoviePageStyledComponents";
import { SectionContainer } from "../../components/StyledComponents";
import Movies from "../../components/moviesComponent/Movies";
import { useGetAPIData } from "../../components/UseGetAPIData";
import { getMovieDataFromAPI } from "../../utils/apiUtils";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const { subPageData, setSubPageData } = usePage();
  const { data: movieData, submitRequest, getData } = useGetAPIData();


  const setMovieData = async () => {
    setMovie(movieData);
    const directorMovies = await movieData?.director?.movieList;
    setMovies(directorMovies);
    setSubPageData(() => ({ name: movie.title }));
  };

  useEffect(() => {
    getData({ apiParams: [movieId], apiRequest: getMovieDataFromAPI });
  }, [movieId]);

  useEffect(() => {
    setMovieData();
  }, [movieData]);

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
