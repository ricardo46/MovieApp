import { createContext, useContext, useState } from "react";

const PageContext = createContext({});

export const PageProvider = ({ children }) => {
  const [subPageData, setSubPageData] = useState({ name: "Sub Page Name" });

  return (
    <PageContext.Provider value={{ subPageData, setSubPageData }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
