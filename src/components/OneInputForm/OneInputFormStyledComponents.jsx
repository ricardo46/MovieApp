import styled from "@emotion/styled";
import { StyledButton, StyledInput } from "../StyledComponents";

const OneInputFormButton = styled(StyledButton)`
  border-radius: 1rem 0 0 1rem;
`;

const OneInputFormInput = styled(StyledInput)`
  border-radius: 0 1rem 1rem 0;
  color: white;
`;

const ButtonAndInputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  padding: 0 1rem 0;
`;

export { OneInputFormButton, OneInputFormInput, ButtonAndInputContainer };
