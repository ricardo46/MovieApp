import styled from "@emotion/styled";
import {
  FormButton,
  FormContainer,
  FormInput,
} from "../MultipleInputForm/FormStyledComponents";
import { FONT_COLOR } from "../../globalVariables";

const SearchMoviesFormContainer = styled.section`
  /* z-index: 5; */
  /* position: relative; */

  ${FormContainer} {
    display: flex;
    flex-direction: row;
    gap: 0;
    border-radius: 1rem;
    /* border: solid red 2px; */
    /* width: 100%; */
    &:focus-within {
      box-shadow: 0px 0px 2px ${FONT_COLOR};
      /* border: none; */
    }
  }
  ${FormButton} {
    background-color: rgb(0, 0, 0);
    border-radius: 1rem 0 0 1rem;
    /* width: 20%; */
    border: none;
    padding-left: 0.7rem;
  }

  ${FormInput} {

    border-radius: 0 1rem 1rem 0;
    width: 100%;
    border: none;
    padding-right: 0.7rem;
  }
`;
export { SearchMoviesFormContainer };
