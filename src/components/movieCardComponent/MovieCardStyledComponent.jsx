import styled from "@emotion/styled";

const StyledInfo = styled.label`
  font-size: 0.8rem;
  color: white;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 0.8rem 0;
  height: 71px;
  background-color: #4a4a4aa8;
  position: ${({ size }) => (size == "small" ? "relative" : "static")};
  box-sizing: border-box;
  width: 190px;
  height: 100%;
`;

const MovieContainer = styled.li`
  justify-self: center;
  list-style-type: none;
  /* margin: ${({ size }) => (size == "small" ? "0" : "6rem 0 0 0")}; */

  border-radius: 10px;
  overflow: hidden;
  height: ${({ size }) => (size == "small" ? "281px" : "")};
  display: ${({ size }) => (size == "small" ? "block" : "flex")};
  width: ${({ size }) => (size == "small" ? "100%" : "")};
  border: ${({ size }) => (size == "small" ? "3px solid blue" : "")};
  /* align-items: center; */
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  overflow-y: hidden;
  align-self: center;
  /* padding: ${({ size }) => (size == "small" ? "" : "1rem")}; */
`;

const CardImage = styled.img`
  display: block;
  height: ${({ size }) => (size == "small" ? "" : "100%")};
  width: 100%;
`;
const CardImageContainer = styled.div`
  height: ${({ size }) => (size == "small" ? "210px" : "100%")};
  position: relative;
`;

const FavoriteSymbolStyled = styled.div`
  /* height: 1rem;
  width: 1rem; */
  color: red;
  position: absolute;
  top: 0;
  font-size: 2rem;
  font-weight: 600;
  border: solid red 1px;
  line-height: 2rem;
  width: 2rem;
  z-index: 150;
`;

export {
  StyledInfo,
  InfoContainer,
  MovieContainer,
  CardImage,
  CardImageContainer,
  FavoriteSymbolStyled,
};
