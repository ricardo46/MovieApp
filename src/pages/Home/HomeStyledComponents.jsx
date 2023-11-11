import styled from "@emotion/styled";
import { SearchMoviesFormContainer } from "../../components/SearchMoviesForm/SearchMoviesFormStyledComponents";

const HomePageContainer = styled.div`
  z-index: 80;
  position: relative;

  ${SearchMoviesFormContainer} {

    @media (min-width: 690px) {
      width: 50%;
      position: absolute;
       top: -4rem;
    }
  }
`;

export { HomePageContainer };

