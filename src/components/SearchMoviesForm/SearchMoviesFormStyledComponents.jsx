import styled from "@emotion/styled";
import {
  FormButton,
  FormContainer,
  FormInput,
  StyledForm,
} from "../MultipleInputForm/FormStyledComponents";
import {
  FONT_COLOR,
  INPUT_BACKGROUND_COLOR,
  INPUT_MAX_WIDTH,
} from "../../globalVariables";

const SearchMoviesFormContainer = styled.section`
  /* z-index: 5; */
  /* position: relative; */
  max-width: ${INPUT_MAX_WIDTH};
  width: 100%;
  height: 4.5rem;

  ${FormContainer} {
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 0;
    border-radius: 1rem;
    background-color: ${INPUT_BACKGROUND_COLOR};
    &:focus-within {
      box-shadow: 0px 0px 2px ${FONT_COLOR};
      /* border: none; */
    }
    @media (min-width: 690px) {
    }
  }
  ${FormButton} {
    background-color: ${INPUT_BACKGROUND_COLOR};
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

  ${StyledForm} {
    height: 3.5rem;
    text-align: center;
    @media (min-width: 690px) {
    }
  }
`;
export { SearchMoviesFormContainer };
