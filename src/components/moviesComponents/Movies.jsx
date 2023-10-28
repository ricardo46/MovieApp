import MovieCard from "./MovieCardComponent";
import { MovieLink, MoviesList } from "./MoviesStyledComponents";

const Movies = ({ movies,displayType }) => {
  console.log("movies", movies);
  return (
    <>
      {movies && (
        <MoviesList displayType={displayType}>
          {movies.map((movie) => {
            return (
              <MovieLink key={movie.id} to={"/" + movie.id + "/"}>
                <MovieCard movie={movie} size={"small"} />
              </MovieLink>
            );
          })}
        </MoviesList>
      )}
    </>
  );
};

export default Movies;
