import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  gap: 1rem;
  justify-content: center;
  border: solid red 2px;
  height: auto;

  max-width: 100vw;
`;

/* const MoviesListStyledContainer=styled.div`
padding:1rem;
width: 100vw; 
box-sizing: border-box; 
`*/

export { MoviesList, MovieLink };