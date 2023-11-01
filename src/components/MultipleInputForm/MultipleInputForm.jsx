import { LoadingAnimation } from "../LoadingAnimation";

import { FormMessage } from "../StyledComponents";
import { FormContainer, FormButton, FormInput, StyledForm, FormMessageStyledContainer } from "./FormStyledComponents";

const MultipleInputForm = ({
  //   updateMovies,
  inputs,
  onFormSubmit,
  submitRequest,
  submitButtonName,
  onInputChange,
}) => {
  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <FormContainer>
          <FormButton>{submitButtonName}</FormButton>
          {inputs.map((input) => (
            <FormInput
              key={input.name}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={onInputChange}
            />
          ))}
        </FormContainer>

        <FormMessageStyledContainer>
          {submitRequest?.message && (
            <FormMessage>{submitRequest.message}</FormMessage>
          )}
          {submitRequest?.errorMessage && (
            <FormMessage>{submitRequest.errorMessage}</FormMessage>
          )}
          {submitRequest.isLoading && (
            <LoadingAnimation submitRequest={submitRequest} />
          )}
        </FormMessageStyledContainer>
      </StyledForm>
    </>
  );
};

export default MultipleInputForm;
