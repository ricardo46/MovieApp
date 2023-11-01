import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../../components/movieCardComponent/MovieCardComponent";
import { usePage } from "../../context/PageContext";
import { MoviesContainer } from "./MoviePageStyledComponents";
import { SectionContainer } from "../../components/StyledComponents";
import Movies from "../../components/moviesComponent/Movies";
import { useMovies } from "./UseMovies";

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
