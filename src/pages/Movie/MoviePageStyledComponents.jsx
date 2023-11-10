import styled from "@emotion/styled";

import { BACKGROUND_COLOR_ONE } from "../../globalVariables";
import { SmallImage } from "../../components/StyledComponents";
import {
  CardImage,
  CardImageContainer,
  InfoContainer,
  MovieContainer,
} from "../../components/MovieCard/MovieCardStyledComponents";

const BigMovieContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  /* height: 50%; */
  /* width: 100%; */

  ${MovieContainer} {
    width: 80%;
    min-width: 150px;
    height: auto;

    display: flex;
    flex-direction: column;
    @media (min-width: 380px) {
      flex-direction: row;
      width: 100%;
      background-color: ${BACKGROUND_COLOR_ONE};
    }
  }
  ${CardImageContainer} {
    align-self: flex-start;
    @media (min-width: 768px) {
      align-self: center;
    }
  }
  ${CardImage} {
    height: auto;
    width: 100%;
  }

  ${InfoContainer} {
    @media (min-width: 380px) {
      background-color: transparent;
    }
  }

  ${SmallImage} {
    padding: 0.5rem 0.5rem 0;
    @media (min-width: 600px) {
      float: left;
    }
    @media (min-width: 768px) {
      width: 120px;
    }
  }
`;
const MoviesContainer = styled.div`
  height: auto;
  overflow: auto;
`;

export { BigMovieContainer, MoviesContainer };
