import MovieCard from "../MovieCardComponent/MovieCardComponent";
import { MovieLink, MoviesList } from "./MoviesStyledComponents";

const ids = [];

const Movies = ({
  currentMovieId,
  movies,
  displayType,
  favoriteSymbol,
  addFavoriteMovie,
}) => {
  return (
    <>
      {movies && (
        <MoviesList displayType={displayType}>
          {movies.map(
            (movie) =>
              movie.id != currentMovieId && (
                <MovieLink key={movie.id} to={"/movies/" + movie.id}>
                  <MovieCard
                    currentMovieId={currentMovieId}
                    movie={movie}
                    size={"small"}
                    favoriteSymbol={favoriteSymbol}
                    symbolOnclickEvent={addFavoriteMovie}
                  />
                </MovieLink>
              )
          )}
        </MoviesList>
      )}
    </>
  );
};

export default Movies;
