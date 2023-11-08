import { useLocation } from "react-router-dom";
import { StyledInfo } from "../StyledComponents";
import {
  CardImage,
  CardImageContainer,
  FavoriteSymbolContainer,
  InfoContainer,
  MovieContainer,
} from "./MovieCardStyledComponent";
import { Director } from "../../pages/Movie/Director";
const MovieCard = ({
  showDirector,
  movie,
  size,
  favoriteSymbol,
  symbolOnclickEvent,
}) => {
  const handleOnclick = (e) => {
    symbolOnclickEvent(e, movie);
  };
  const location = useLocation();

  return (
    <>
      {
        <MovieContainer size={size}>
          <FavoriteSymbolContainer onClick={handleOnclick}>
            {favoriteSymbol}
          </FavoriteSymbolContainer>
          <CardImageContainer size={size}>
            <CardImage
              src={size == "small" ? movie.smallImageUrl : movie?.bigImageUrl}
              size={size}
            ></CardImage>
          </CardImageContainer>
          <InfoContainer size={size}>
            <StyledInfo> {movie?.title}</StyledInfo>
            <StyledInfo>{movie?.year}</StyledInfo>
            {/* {currentPageIsMovie(location) && <Director director={movie.director} />} */}
            {showDirector && <Director director={movie.director} />}
          </InfoContainer>
        </MovieContainer>
      }
    </>
  );
};

export default MovieCard;
