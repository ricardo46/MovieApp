import {
  CardImage,
  CardImageContainer,
  InfoContainer,
  MovieContainer,
  StyledInfo,
} from "./MovieCardStyledComponent";
const MovieCard = ({ movie, size, favoriteSymbol, symbolOnclickEvent }) => {

  const handleOnclick=(e)=>{
    symbolOnclickEvent(e,movie)
  }
  return (
    <MovieContainer size={size}>
      <CardImageContainer size={size}>
        <CardImage
          src={size == "small" ? movie.smallImageUrl : movie.bigImageUrl}
          size={size}
        ></CardImage>
        <div onClick={handleOnclick}>{favoriteSymbol}</div>
      </CardImageContainer>
      <InfoContainer size={size}>
        <StyledInfo> {movie.title}</StyledInfo>
        <StyledInfo>{movie.year}</StyledInfo>
      </InfoContainer>
    </MovieContainer>
  );
};

export default MovieCard;
