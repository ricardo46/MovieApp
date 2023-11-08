import MovieCard from "../MovieCardComponent/MovieCardComponent";
import { MovieLink, MoviesList } from "./MoviesStyledComponents";

const Movies = ({
  currentMovieId,
  movies,
  displayType,
  favoriteSymbol,
  addFavoriteMovie,
}) => {
  // console.log("movies", movies);
  return (
    <>
      {movies && (
        <MoviesList displayType={displayType}>
          {movies.map((movie) => {
            return (
              <>
                {movie.id != currentMovieId && (
                  <MovieLink key={movie.id} to={"/movies/" + movie.id}>
                    <MovieCard
                      currentMovieId={currentMovieId}
                      movie={movie}
                      size={"small"}
                      favoriteSymbol={favoriteSymbol}
                      symbolOnclickEvent={addFavoriteMovie}
                    />
                  </MovieLink>
                )}
              </>
            );
          })}
        </MoviesList>
      )}
    </>
  );
};

export default Movies;
