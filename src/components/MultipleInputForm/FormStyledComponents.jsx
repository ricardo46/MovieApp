import styled from "@emotion/styled";
import { StyledButton, StyledInput } from "../StyledComponents";
import { INPUT_BACKGROUND_COLOR, INPUT_MAX_WIDTH } from "../../globalVariables";

const FormButton = styled(StyledButton)`
  background-color: gray;
`;

const FormInput = styled(StyledInput)`
  color: white;
  background-color: ${INPUT_BACKGROUND_COLOR};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  max-width: ${INPUT_MAX_WIDTH};
  /* height: 3rem; */
`;

const StyledForm = styled.form`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 30%; */
  width: 100%;
  padding: 0.5rem 0 0.5rem 0;
`;

const FormMessageStyledContainer = styled.div`
  padding: 0.2rem 0 0 0;
  /* position: fixed; */
  /* translate: 0 2rem; */
  width: 90%;
  @media (min-width: 690px) {
    /* position: absolute; */
  }
`;

export {
  FormButton,
  FormInput,
  FormContainer,
  StyledForm,
  FormMessageStyledContainer,
};

// const OneInputFormButton = styled(StyledButton)`
//   border-radius: 1rem 0 0 1rem;
// `;

// const OneInputFormInput = styled(StyledInput)`
//   border-radius: 0 1rem 1rem 0;
// `;

// const ButtonAndInputContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   max-width: 1000px;
//   padding: 0 1rem 0;
// `;
