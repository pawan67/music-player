import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [isMenu, setMenu] = useState(false);
  const [page, setPage] = useState("");
  const [songNum, setSongNum] = useState(Math.floor(Math.random() * 9));
  const contextValue = {
    isMenu,
    setMenu,
    page,
    setPage,
    songNum,
    setSongNum,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
