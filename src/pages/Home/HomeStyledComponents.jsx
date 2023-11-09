import styled from "@emotion/styled";
import {
  FormContainer,
  StyledForm,
} from "../../components/MultipleInputForm/FormStyledComponents";
import { SearchMoviesFormContainer } from "../../components/SearchMoviesForm/SearchMoviesFormStyledComponents";

const HomeSearchMoviesFormContainer = styled.section`
  z-index: 10;
  /* position: relative; */

  ${SearchMoviesFormContainer} {
    @media (min-width: 690px) {
      height: 0;
      padding: 0;
      margin: 0;
    }
  }

  ${StyledForm} {
    @media (min-width: 690px) {
      height: 0;
      padding: 0;
      margin: 0;
    }
  }

  ${FormContainer} {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;

    @media (min-width: 690px) {
      translate: 0 -2.5rem;
      width: 50vw;
    }
  }
`;

export { HomeSearchMoviesFormContainer };
