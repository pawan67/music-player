import React from "react";
import { useUserContext } from "../context/userContext";
import Container from "./Container";
import MusicLibrary from "./MusicLibrary";
import PlayingNow from "./PlayingNow";
import SearchComponent from "./SearchComponent";
import SettingsComponent from "./SettingsComponent";

const COMPONENT = () => {
  const { page, isMenu } = useUserContext();

  if (page === "") {
    return <Container />;
  }
  if (page === "settings") {
    return <SettingsComponent />;
  }
  if (page === "search") {
    return <SearchComponent />;
  }
  if (page === "musiclib") {
    return <MusicLibrary />;
  }
  if (page === "playingnow") {
    return <PlayingNow />;
  }

  return <div></div>;
};

export default COMPONENT;
