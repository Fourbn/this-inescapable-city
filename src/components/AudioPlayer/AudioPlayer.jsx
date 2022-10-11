import React, { useState, useEffect, useRef } from "react";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi";

import {
  controlPanel,
  icon,
  audioButton,
  progress,
  disabled,
} from "./AudioPlayer.module.scss";

// code for this audio player came from this blog: https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

const AudioPlayer = ({
  audioTitle,
  audioSrc,
  className,
  multiplePlayers = false,
  id,
  activePlayer,
  setActivePlayer,
  disabledPlayers = [],
  setDisabledPlayers,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (setActivePlayer && !isPlaying) {
      setActivePlayer(id);
    }
    if (setActivePlayer && isPlaying) {
      setActivePlayer("");
    }
  };

  const updateDisabledPlayersState = () => {
    if (disabledPlayers.includes(id)) {
      return;
    }
    setDisabledPlayers([...disabledPlayers, id]);
  };

  const [trackProgress, setTrackProgress] = useState(0);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        clearInterval(intervalRef.current);
        updateDisabledPlayersState();
      }
      setTrackProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (multiplePlayers && id !== activePlayer) {
      setIsPlaying(false);
    }
  }, [activePlayer, multiplePlayers, id]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      currentAudio.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const { duration } = audioRef.current;
  const currentDuration = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackProgressStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentDuration}, #08a3c9), color-stop(${currentDuration}, #f0f0f0))
  `;

  return (
    <div className={`${controlPanel} ${className}`}>
      {isPlaying ? (
        <button
          className={`${audioButton} ${
            disabledPlayers.includes(id) ? disabled : ""
          }`}
          type="button"
          onClick={() => handlePlayPause()}
          aria-label="Pause audio"
          disabled={disabledPlayers.includes(id)}
        >
          <HiOutlinePause className={icon} />
        </button>
      ) : (
        <button
          className={`${audioButton} ${
            disabledPlayers.includes(id) ? disabled : ""
          }`}
          type="button"
          onClick={() => handlePlayPause()}
          aria-label="Play audio"
          disabled={disabledPlayers.includes(id)}
        >
          <HiOutlinePlay className={icon} />
        </button>
      )}
      <div
        className={progress}
        style={{ background: trackProgressStyling }}
        aria-label={`tracking progress of ${audioTitle}: ${
          (trackProgress / duration) * 100
        }% complete`}
      />
    </div>
  );
};

export default AudioPlayer;
