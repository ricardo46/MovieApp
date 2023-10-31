import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const FormMessage = styled.p`
  color: #ff8000;
  font-size: 0.6rem;
  margin: 0;
  white-space: pre;
  /* word-wrap: break-word; */
  /* height: 3rem; */
`;

const ErrorMessage = styled.h3`
  color: orange;
`;

const StyledInput = styled.input`
  height: 2rem;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: rgb(48, 48, 48);
  outline: none;
  padding: 0.3rem;
  border: gray 2px solid;
  color: white;
  text-align: center;
  &:focus {
    outline: #ffffffb6;
    box-shadow: 0px 0px 2px red;
    background-color: #00000042;
  }
`;

const StyledButton = styled.button`
  padding: 0.3rem;
  height: 2rem;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 0.8rem;
  border-radius: 1rem;
  border: gray 2px solid;
  color: white;

`;

const StyledSelect = styled.select`
  padding: 0 0 0 0.5rem;
  height: 2rem;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  font-weight: 400;
  text-decoration: none;
`;

const SectionContainer = styled.section`
  width: 95vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border: 2px green solid;
  box-sizing: border-box;
  overflow-x: auto;
  gap: 0.5rem;
`;

export {
  FormMessage,
  ErrorMessage,
  StyledInput,
  StyledButton,
  StyledLink,
  SectionContainer,
  StyledSelect,
};
