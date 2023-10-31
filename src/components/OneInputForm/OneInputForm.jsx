// import {
//   FormMessageStyledContainer,
//   StyledForm,
// } from "../moviesComponent/SearchMoviesFormStyledComponents";
// import { LoadingAnimation } from "../LoadingAnimation";
// import {
//   ButtonAndInputContainer,
//   OneInputFormButton,
//   OneInputFormInput,
// } from "../MultipleInputForm/FormStyledComponents";
// import { FormMessage } from "../StyledComponents";
// import { useState } from "react";

// const OneInputForm = ({
//   //   updateMovies,
//   onFormSubmit,
//   inputName,
//   submitRequest,
//   submitButtonName,
//   inputValue,
//   setInputValue,
// }) => {
//   // const [formMessage,setFormMessage]=useState('')

//   const onValueChange = (e) => {
//     // console.log("Search movies e.target", e.target.value);

//     setInputValue(e.target.value);
//   };

//   const clearInput = (e) => {
//     e.preventDefault();
//     setInputValue("");
//   };

//   return (
//     <>
//       <StyledForm
//         onSubmit={(e) => {
//           clearInput(e);
//           onFormSubmit(e);
//         }}
//       >
//         <ButtonAndInputContainer>
//           <OneInputFormButton>{submitButtonName}</OneInputFormButton>
//           <OneInputFormInput
//             type="text"
//             name={inputName}
//             value={inputValue}
//             onChange={onValueChange}
//           />
//         </ButtonAndInputContainer>
//       </StyledForm>

//       <FormMessageStyledContainer>
//         {submitRequest?.message && (
//           <FormMessage>{submitRequest.message}</FormMessage>
//         )}
//         {submitRequest?.errorMessage && (
//           <FormMessage>{submitRequest.errorMessage}</FormMessage>
//         )}

//         {submitRequest.isLoading && (
//           <LoadingAnimation submitRequest={submitRequest} />
//         )}
//       </FormMessageStyledContainer>
//     </>
//   );
// };

// export default OneInputForm;
