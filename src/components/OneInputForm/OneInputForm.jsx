import {
  FormMessageStyledContainer,
  StyledForm,
} from "../moviesComponent/SearchMoviesFormStyledComponents";
import { StyledLoadingAnimation } from "../Animations";
import {
  ButtonAndInputContainer,
  OneInputFormButton,
  OneInputFormInput,
} from "./OneInputFormStyledComponents";
import { FormMessage } from "../StyledComponents";

const OneInputForm = ({
  //   updateMovies,
  onSearchSubmit,
  inputName,
  value,
  onValueChange,
  submitRequest,
}) => {
  return (
    <>
      <StyledForm onSubmit={onSearchSubmit}>
        <ButtonAndInputContainer>
          <OneInputFormButton>Search</OneInputFormButton>
          <OneInputFormInput
            type="text"
            name={inputName}
            value={value}
            onChange={onValueChange}
          />
        </ButtonAndInputContainer>
      </StyledForm>

      <FormMessageStyledContainer>
        {submitRequest.error && (
          <FormMessage>{submitRequest.errorMessage}</FormMessage>
        )}

        {submitRequest.isLoading && (
          <StyledLoadingAnimation
            loading={submitRequest.isLoading}
            size={11}
            color="#d2d2d2"
            speedMultiplier={4}
          />
        )}
      </FormMessageStyledContainer>
    </>
  );
};

export default OneInputForm;
