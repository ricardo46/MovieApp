import styled from "@emotion/styled";
import { StyledButton, StyledInput } from "../StyledComponents";

const FormButton = styled(StyledButton)`
  background-color: gray;
`;

const FormInput = styled(StyledInput)`
  color: white;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;

const StyledForm = styled.form`
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-left: 30%; */
  width: 100%;
  /* position: fixed;
  top: 1rem; */
  padding: 0.5rem 0 0.5rem 0;
`;

const FormMessageStyledContainer = styled.div`
  padding: 0.2rem 0 0 0;
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
