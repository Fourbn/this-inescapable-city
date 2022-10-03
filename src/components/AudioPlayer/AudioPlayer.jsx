import React, { useState, useEffect, useRef } from "react";
import { HiVolumeUp, HiOutlinePause, HiOutlinePlay } from "react-icons/hi";
import useFade from "../../hooks/useFade";

import {
  controlPanel,
  icon,
  audioButton,
  volumeStyles,
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
  progressBar,
  disabledPlayers = [],
  setDisabledPlayers,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackVolume, setTrackVolume] = useState(0.5);

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const [volumeIsVisible, setVolumeIsVisible, volumeFadeProps] = useFade();

  const { volume } = audioRef.current;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (setActivePlayer && !isPlaying) {
      setActivePlayer(id);
    }
    if (setActivePlayer && isPlaying) {
      setActivePlayer("");
    }
  };

  const handleVolumeChange = (value) => {
    audioRef.current.volume = value;
    setTrackVolume(audioRef.current.volume);
  };

  const handleShowVolSlider = (boolean) => {
    if (disabledPlayers.includes(id)) {
      setVolumeIsVisible(false);
      return;
    }
    setVolumeIsVisible(boolean);
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
        setVolumeIsVisible(false);
      }
      setTrackProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      if (progressBar) {
        startTimer();
      }
    } else {
      audioRef.current.pause();
      if (progressBar) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isPlaying, progressBar]);

  useEffect(() => {
    if (multiplePlayers && id !== activePlayer) {
      setIsPlaying(false);
    }
  }, [activePlayer, multiplePlayers, id]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      currentAudio.pause();
      if (progressBar) {
        clearInterval(intervalRef.current);
      }
    };
  }, [progressBar]);

  const currentVolumePercentage = volume ? `${(trackVolume / 1) * 100}%` : "0%";
  const trackVolumeStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentVolumePercentage}, #08a3c9), color-stop(${currentVolumePercentage}, #0f252e))
  `;

  const { duration } = audioRef.current;
  const currentDuration = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackProgressStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentDuration}, #08a3c9), color-stop(${currentDuration}, #0f252e))
  `;

  return (
    <div className={`${controlPanel} ${className}`}>
      <div
        className={`${volumeStyles} ${
          disabledPlayers.includes(id) ? disabled : ""
        }`}
        onMouseEnter={() => handleShowVolSlider(true)}
        onMouseLeave={() => handleShowVolSlider(false)}
      >
        <button
          className={`${audioButton} ${
            disabledPlayers.includes(id) ? disabled : ""
          }`}
          type="button"
          onClick={() => handleShowVolSlider(true)}
          disabled={disabledPlayers.includes(id)}
          aria-label="Use range input below to control volume"
        >
          <HiVolumeUp className={icon} />
        </button>
        {volumeIsVisible && (
          <input
            {...volumeFadeProps}
            type="range"
            value={trackVolume}
            step="0.05"
            min="0"
            max="1"
            onChange={(e) => handleVolumeChange(e.target.value)}
            style={{ background: trackVolumeStyling }}
            aria-label="slide to increase or decrease the volume"
          />
        )}
      </div>
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
      {progressBar && (
        <div
          className={progress}
          style={{ background: trackProgressStyling }}
          aria-label={`tracking progress of ${audioTitle}: ${
            (trackProgress / duration) * 100
          }% complete`}
        />
      )}
    </div>
  );
};

export default AudioPlayer;
