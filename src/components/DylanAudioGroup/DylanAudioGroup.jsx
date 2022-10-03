import React, { useEffect } from "react";
import loadable from "@loadable/component";

import {
  audioCardStyles,
  audioControls,
  placeholder,
} from "./DylanAudioGroup.module.scss";
import useFade from "../../hooks/useFade";

const AudioPlayer = loadable(() => import("../AudioPlayer/AudioPlayer"));

const DylanAudioGroup = ({
  audioGroup,
  activePlayer,
  setActivePlayer,
  disabledPlayers,
  setDisabledPlayers,
  availablePlayers,
}) => {
  const [fadePlaceholder, setFadePlaceholder, placeholderFadeProps] = useFade();

  useEffect(() => {
    if (!availablePlayers.includes(audioGroup)) {
      setFadePlaceholder(true);
      return;
    }
    const timer = setTimeout(() => {
      setFadePlaceholder(false);
    }, 1200)

    return () => clearTimeout(timer);
  }, [audioGroup, availablePlayers, setFadePlaceholder]);

  return (
    <div className={audioCardStyles}>
      <h3>{audioGroup.title}</h3>
      <AudioPlayer
        id={audioGroup.id}
        audioTitle={audioGroup.title}
        audioSrc={audioGroup.audio.url}
        className={audioControls}
        multiplePlayers
        progressBar
        activePlayer={activePlayer}
        setActivePlayer={setActivePlayer}
        disabledPlayers={disabledPlayers}
        setDisabledPlayers={setDisabledPlayers}
      />
      {fadePlaceholder && (
        <div
          className={`${placeholder} ${placeholderFadeProps.className}`}
          onAnimationEnd={placeholderFadeProps.onAnimationEnd}
        />
      )}
    </div>
  );
};

export default DylanAudioGroup;
