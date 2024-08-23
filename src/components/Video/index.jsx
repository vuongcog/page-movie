import { Slider } from "@mui/material";
import videojs from "../../Recording 2024-08-23 124021.mp4";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ name }) => {
  const playerRef = useRef(null);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div onClick={handlePlayPause} className="video-container">
      {isPlaying && (
        <ReactPlayer
          ref={playerRef}
          url={videojs}
          playing={isPlaying}
          controls={false}
          onProgress={handleProgress}
          onDuration={handleDuration}
          width={"100%"}
          height={"100%"}
        />
      )}

      <div className="controls-overlay">
        {!isPlaying && <span className="chapter">{name}</span>}
        <div className="container-content-slider">
          {!isPlaying && (
            <p>
              The chapter about geuinea just want to go out fromhis palace to
              get freedom...
            </p>
          )}
          {isPlaying && (
            <div className="flex-range-slider">
              <span className="elapsed-time">
                {formatTime(played * duration)}
              </span>
              {
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={0}
                  max={1}
                  step={"any"}
                  value={played}
                  onChange={(e) =>
                    playerRef.current.seekTo(parseFloat(e.target.value))
                  }
                  sx={{
                    color: "#00925d",
                    height: "6px",
                    padding: "0px",
                    "& .MuiSlider-root": {
                      height: "6px", // Thay đổi chiều cao của track
                      padding: "0px",
                    },
                    "& .MuiSlider-track": {
                      height: "5px", // Thay đổi chiều cao của track
                    },
                    "& .MuiSlider-rail": {
                      height: "5px", // Thay đổi chiều cao của rail (phần chưa tiến trình)
                    },
                    "& .MuiSlider-thumb": {
                      width: "10px", // Thay đổi kích thước thumb
                      height: "10px", // Thay đổi kích thước thumb
                    },
                  }}
                />
              }
              <span className="total-time">{formatTime(duration)}</span>
            </div>
          )}
        </div>
        {/* <button className="play-pause-btn" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button> */}
      </div>
    </div>
  );
};

export default VideoPlayer;
