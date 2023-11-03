import styled from "@emotion/styled";
import { SMALL_FONT_SIZE } from "../../globalVariables";

const StyledInfo = styled.label`
  font-size: ${SMALL_FONT_SIZE};

  color: white;
  text-align: left;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0.8rem;
  /* height: 71px; */
  background-color: #4a4a4aa8;
  /* position: ${({ size }) => (size == "small" ? "relative" : "static")}; */
  box-sizing: border-box;
  width: 100%;
  height: 20%;
`;

const MovieContainer = styled.li`
  justify-self: center;
  list-style-type: none;
  /* margin: ${({ size }) => (size == "small" ? "0" : "6rem 0 0 0")}; */

  border-radius: 5px;
  overflow: hidden;
  /* height: ${({ size }) => (size == "small" ? "281px" : "500px")};
  display: ${({ size }) => (size == "small" ? "block" : "flex")};
  width: ${({ size }) => (size == "small" ? "150px" : "")}; */
  height: 281px;
  display: block;
  width: 150px;
  /* border: ${({ size }) => (size == "small" ? "1px solid blue" : "")}; */
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
  /* height: ${({ size }) => (size == "small" ? "" : "100%")};
  width: ${({ size }) => (size == "small" ? "100%" : "auto")}; */
  width: 100%;
`;
const CardImageContainer = styled.div`
  height: 80%;
  /* position: relative; */
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
