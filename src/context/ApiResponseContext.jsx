import { createContext, useContext, useState } from "react";

const ApiResponseContext = createContext({});

export const ApiResponseProvider = ({ children }) => {
  const [apiResponse, setApiResponse] = useState({});

  return (
    <ApiResponseContext.Provider
      value={{
        apiResponse,
        setApiResponse,
      }}
    >
      {children}
    </ApiResponseContext.Provider>
  );
};

export const useApiResponse = () => {
  const context = useContext(ApiResponseContext);
  if (!context) {
    throw new Error("useApiResponse must be used within a ApiResponseProvider");
  }
  return context;
};
