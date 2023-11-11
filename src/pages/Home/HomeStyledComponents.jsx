import styled from "@emotion/styled";
import {
  FormContainer,
  StyledForm,
} from "../../components/MultipleInputForm/FormStyledComponents";
import { SearchMoviesFormContainer } from "../../components/SearchMoviesForm/SearchMoviesFormStyledComponents";
import SearchMoviesForm from "../../components/SearchMoviesForm/SearchMoviesForm";

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
