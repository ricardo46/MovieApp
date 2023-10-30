import MovieCard from "../movieCardComponent/MovieCardComponent";
import { MovieLink, MoviesList } from "./MoviesStyledComponents";

const Movies = ({ movies, displayType, favoriteSymbol, addFavoriteMovie }) => {
  // console.log("movies", movies);
  return (
    <>
      {movies && (
        <MoviesList displayType={displayType}>
          {movies.map((movie) => {
            return (
              <MovieLink key={movie.id} to={"/" + movie.id + "/"}>
                <MovieCard movie={movie} size={"small"} favoriteSymbol={favoriteSymbol} symbolOnclickEvent={addFavoriteMovie} />
              </MovieLink>
            );
          })}
        </MoviesList>
      )}
    </>
  );
};

export default Movies;
