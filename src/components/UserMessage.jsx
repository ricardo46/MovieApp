import { ErrorMessage, Message, SuccessMessage } from "./StyledComponents";

const UserMessage = ({ type, messageContent }) => {
  if (type == "error") {
    return <ErrorMessage>{messageContent}</ErrorMessage>;
  } 
  if(type=='success') {
    return <SuccessMessage>{messageContent}</SuccessMessage>;
  }
  return <Message>{messageContent}</Message>;
};

export default UserMessage;
