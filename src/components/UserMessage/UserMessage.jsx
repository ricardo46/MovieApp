import { ErrorMessage, SuccessMessage } from "../StyledComponents";

const UserMessage = ({ type, messageContent }) => {
  <>
    {type == "error" && <ErrorMessage>{messageContent}</ErrorMessage>}
    {type == "success" && <SuccessMessage>{messageContent}</SuccessMessage>}
  </>;
};

export default UserMessage;
