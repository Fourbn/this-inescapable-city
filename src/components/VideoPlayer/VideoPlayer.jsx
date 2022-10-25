import React from "react";
import { useState } from "react";
import ReactPlayer from "react-player/lazy";

import { videoWrapper, caption, dividerStyles, noDivider, videoPlayer } from "./VideoPlayer.module.scss";

const VideoPlayer = ({
  children,
  url,
  playing = false,
  controls = true,
  muted = false,
  onEnded,
  divider = true,
  dividerClass,
  // label,
  // description,
  // captions,
}) => {
  const [hideDivider, setHideDivider] = useState(false);

  const handleProgress = () => {
    setHideDivider(true);
  };

  return (
    <div className={videoWrapper}>
      <div
        className={`${dividerStyles} ${dividerClass} ${hideDivider ? "fading-out" : ""} ${
          divider ? "" : noDivider
        }`}
      />
      <ReactPlayer
        url={url}
        playing={playing}
        muted={muted}
        onEnded={onEnded}
        controls={controls}
        width="100%"
        onProgress={() => handleProgress()}
        className={videoPlayer}
        playsinline={true}
      />
      {children && <div className={caption}>{children}</div>}
    </div>
  );
};

export default VideoPlayer;
