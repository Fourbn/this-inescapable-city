import React from "react";
import loadable from "@loadable/component";

import { audioControls } from "./DylanAudioGroup.module.scss";

const AudioPlayer = loadable(() => import("../AudioPlayer/AudioPlayer"));

const DylanAudioGroup = ({
  audioGroup,
  activePlayer,
  setActivePlayer,
  disabledPlayers,
  setDisabledPlayers,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default DylanAudioGroup;
