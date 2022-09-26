import React, { useState, useEffect, useRef } from "react";
import { HiVolumeUp, HiOutlinePause, HiOutlinePlay } from "react-icons/hi";
import useFade from "../../hooks/useFade";

import {
  controlPanel,
  icon,
  audioButton,
  volumeStyles,
} from "./AudioPlayer.module.scss";

// code for this audio player came from this blog: https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackVolume, setTrackVolume] = useState(0.5);

  const audioRef = useRef(new Audio(audioSrc));

  const [volumeIsVisible, setVolumeIsVisible, volumeFadeProps] = useFade();

  const { volume } = audioRef.current;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value) => {
    audioRef.current.volume = value;
    setTrackVolume(audioRef.current.volume);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const currentAudio = audioRef.current;
    return () => {
      currentAudio.pause();
    };
  }, []);

  const currentVolumePercentage = volume ? `${(trackVolume / 1) * 100}%` : "0%";
  const trackVolumeStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentVolumePercentage}, #08a3c9), color-stop(${currentVolumePercentage}, #0f252e))
  `;

  return (
    <div className={controlPanel}>
      <div
        className={volumeStyles}
        onMouseEnter={() => setVolumeIsVisible(true)}
        onMouseLeave={() => setVolumeIsVisible(false)}
      >
        <button
          className={audioButton}
          type="button"
          onClick={() => setVolumeIsVisible(true)}
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
          />
        )}
      </div>
      {isPlaying ? (
        <button
          className={audioButton}
          type="button"
          onClick={() => handlePlayPause()}
          aria-label="Pause audio"
        >
          <HiOutlinePause className={icon} />
        </button>
      ) : (
        <button
          className={audioButton}
          type="button"
          onClick={() => handlePlayPause()}
          aria-label="Play audio"
        >
          <HiOutlinePlay className={icon} />
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;
