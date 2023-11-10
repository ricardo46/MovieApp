import { LoadingAnimation } from "./LoadingAnimation";

import UserMessage from "../UserMessage/UserMessage";
import { useState } from "react";
import { MESSAGE_DURATION } from "../../globalVariables";
import {
  FormButton,
  FormContainer,
  FormInput,
  FormMessageStyledContainer,
  StyledForm,
} from "./FormStyledComponents";

const MultipleInputForm = ({
  inputs,
  onFormSubmit,
  submitRequest,
  submitButtonName,
  onInputChange,
  handleClick,
}) => {
  const [messageIsVisible, setMessageIsVisible] = useState(false);

  const onButtonClick = () => {
    setMessageIsVisible(true);
    setTimeout(() => {
      setMessageIsVisible(false);
    }, MESSAGE_DURATION);
  };

  return (
    <>
      {submitRequest.error &&
        console.log("submitRequest.errorMessage", submitRequest.errorMessage)}
      <StyledForm
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <FormContainer>
          <FormButton onClick={onButtonClick}>{submitButtonName}</FormButton>
          {inputs.map((input) => (
            <FormInput
              key={input.name}
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={onInputChange}
              onClick={handleClick}
            />
          ))}
        </FormContainer>

        {messageIsVisible && (
          <FormMessageStyledContainer>
            
            {submitRequest.error ? (
              <UserMessage
                type={"error"}
                messageContent={submitRequest.errorMessage}
              />
            ) : (
              <UserMessage
                type={"success"}
                messageContent={submitRequest.message}
              />
            )}

            {submitRequest?.isLoading && (
              <LoadingAnimation submitRequest={submitRequest} />
            )}
          </FormMessageStyledContainer>
        )}
      </StyledForm>
    </>
  );
};

export default MultipleInputForm;
