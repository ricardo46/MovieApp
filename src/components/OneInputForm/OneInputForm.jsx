import {
  FormMessageStyledContainer,
  StyledForm,
} from "../moviesComponents/SearchFormStyledComponents";
import { StyledLoadingAnimation } from "../Components/Animations";
import { FormMessage } from "../Components/StyledComponents";
import {
  ButtonAndInputContainer,
  OneInputFormButton,
  OneInputFormInput,
} from "./OneInputFormStyledComponents";

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
