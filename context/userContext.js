import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
export const UserContextProvider = ({ children }) => {
  const [isMenu, setMenu] = useState(false);
  const [page, setPage] = useState("");
  const [songNum, setSongNum] = useState(3);
  const [audioSrc, setAudioSrc] = useState("");
  const [audioName, setAudioName] = useState("");
  const [audioImg, setAudioImg] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const contextValue = {
    isMenu,
    setMenu,
    page,
    setPage,
    songNum,
    setSongNum,
    audioSrc,
    setAudioSrc,
    audioName,
    setAudioName,
    audioImg,
    setAudioImg,
    artist,
    setArtist,
    year,
    setYear,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
