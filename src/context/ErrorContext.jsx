// import { createContext, useContext, useState } from "react";

// const ErrorContext = createContext({});

// export const ErrorProvider = ({ children }) => {
//   const [error, setError] = useState(false);

//   return (
//     <ErrorContext.Provider value={{ error, setError }}>
//       {children}
//     </ErrorContext.Provider>
//   );
// };

// export const useError = () => {
//   const context = useContext(ErrorContext);
//   if (!context) {
//     throw new Error("useError must be used within a ErrorProvider");
//   }
//   return context;
// };
