import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";

const UserWelcomeMessage = ({ apiResponse }) => {
  const { user } = useUser();
  const [message, setMessage] = useState("");

  useEffect(() => {
    user.id
      ? setMessage(`Welcome: ${user.name}`)
      : setMessage("Please login or register");
  }, [user]);

  return <>{apiResponse.responseReceived && message}</>;
};

export default UserWelcomeMessage;
