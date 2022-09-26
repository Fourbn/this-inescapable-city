import React from "react";
import ReactPlayer from "react-player/vimeo";

import { videoWrapper, caption } from "./VideoPlayer.module.scss";

const VideoPlayer = ({
  children,
  url,
  playing = false,
  controls = true,
  onEnded,
  label,
  description,
  captions,
}) => {
  return (
    <div className={videoWrapper}>
      <ReactPlayer url={url} playing={playing} onEnded={onEnded} controls={controls} width="100%" height="560px" />
      {children && <div className={caption}>{children}</div>}
    </div>
  );
};

export default VideoPlayer;
