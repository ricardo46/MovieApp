import styled from "@emotion/styled";
import {
  StyledButton,
  StyledInput,
} from "../Components/StyledComponents";

const StyledForm = styled.form`
  /* z-index: 5; */
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

const SearchMoviesStyledButton = styled(StyledButton)`
  background-color: transparent;
  border-radius: 1rem 0 0 1rem;
  color: #ffffffb6;
  width: 30%;
`;
const SearchMoviesStyledInput = styled(StyledInput)`
  border: transparent;
  border-radius: 0 1rem 1rem 0;
  width: 100%;
  color: #ffffffb6;
  /* z-index: 5; */
`;

const FormMessageStyledContainer = styled.div`
  padding: 0.2rem 0 0 0;
`;

export {
  StyledForm,
  SearchMoviesStyledInput,
  SearchMoviesStyledButton,
  FormMessageStyledContainer,
};
