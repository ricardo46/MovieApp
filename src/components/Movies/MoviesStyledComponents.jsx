import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
  LAPTOP_MOVIES_GRID_GAP,
  MOBILE_MOVIES_GRID_GAP,
} from "../../globalVariables";

const MovieLink = styled(NavLink)`
  margin: 0;
  text-decoration: none;
`;

const MoviesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: ${MOBILE_MOVIES_GRID_GAP};
  justify-content: center;
  height: auto;

  width: 100%;
  @media (min-width: 768px) {
    gap: ${LAPTOP_MOVIES_GRID_GAP};
    grid-template-columns: repeat(auto-fit, 170px);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, 200px);
  }
`;

export { MoviesList, MovieLink };
