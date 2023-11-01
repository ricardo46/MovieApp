import { useNavigate } from "react-router-dom";
import { useError } from "../../context/ErrorContext";
import { useEffect, useState } from "react";
import { getMovieDataFromAPI } from "../../utils/apiUtils";

export const useMovies = ({ movieId, setMovie }) => {
  const { error, setError } = useError();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const requestMovieFromAPI = async () => {
    try {
      const response = await getMovieDataFromAPI(movieId);

      setMovie(() => response.data);
      // console.log("response.data", response.data);
      setMovies(() => response.data.director.movieList);
    } catch (err) {
      setError({
        message: err.response.data.message,
        status: err.response.status,
      });
      navigate("/errorPage");
    }
  };

  useEffect(() => {
    requestMovieFromAPI();
  }, [movieId]);

  return { movies, setMovies };
};
