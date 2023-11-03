import {
  CardImage,
  CardImageContainer,
  FavoriteSymbolContainer,
  InfoContainer,
  MovieContainer,
  StyledInfo,
} from "./MovieCardStyledComponent";
const MovieCard = ({ movie, size, favoriteSymbol, symbolOnclickEvent }) => {
  const handleOnclick = (e) => {
    symbolOnclickEvent(e, movie);
  };
  return (
    <MovieContainer size={size}>
      <FavoriteSymbolContainer onClick={handleOnclick}>
        {favoriteSymbol}
      </FavoriteSymbolContainer>
      <CardImageContainer size={size}>
        <CardImage
          src={size == "small" ? movie.smallImageUrl : movie.bigImageUrl}
          size={size}
        ></CardImage>
      </CardImageContainer>
      <InfoContainer size={size}>
        <StyledInfo> {movie.title}</StyledInfo>
        <StyledInfo>{movie.year}</StyledInfo>
      </InfoContainer>
    </MovieContainer>
  );
};

export default MovieCard;
