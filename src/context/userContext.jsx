import { createContext, useContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [userIsLoaded, setUserIsLoaded] = useState(false);

  const [auth, setAuth] = useState(false);

  

  return (
    <UserContext.Provider
      value={{ user, setUser, auth, setAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
