import styled from "@emotion/styled";
import {
  BACKGROUND_COLOR_ONE,
  FAVORITE_SYMBOL_BACKGROUND_COLOR,
  FAVORITE_SYMBOL_COLOR,
} from "../../globalVariables";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0.35rem;
  background-color: ${BACKGROUND_COLOR_ONE};
  justify-content: start;
  gap: 0.2rem;
  box-sizing: border-box;
  width: 100%;
  min-height: 58px;
  @media (min-width: 768px) {
    min-height: 70px;
    line-height: 1rem;
    gap: 0.3rem;
  }
`;

const MovieContainer = styled.li`
  justify-self: center;
  list-style-type: none;

  border-radius: 5px;
  overflow: hidden;

  display: block;
  width: 150px;

  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  overflow-y: hidden;
  align-self: center;
  @media (min-width: 768px) {
    width: 170px;
  }
  @media (min-width: 1024px) {
    width: 200px;
  }
`;

const CardImage = styled.img`
  display: block;

  width: 100%;
`;
const CardImageContainer = styled.div`
  height: 80%;
`;

const FavoriteSymbolStyled = styled.div`
  color: ${FAVORITE_SYMBOL_COLOR};
  position: absolute;
  top: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4rem;
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.5rem;
  z-index: 150;
  display: flex;
  justify-content: center;
  background-color: ${FAVORITE_SYMBOL_BACKGROUND_COLOR};
  border-radius: 50%;
  border: solid ${FAVORITE_SYMBOL_COLOR} 2px;
`;

const FavoriteSymbolContainer = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
`;

export {
  InfoContainer,
  MovieContainer,
  CardImage,
  CardImageContainer,
  FavoriteSymbolStyled,
  FavoriteSymbolContainer,
};
