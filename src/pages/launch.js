import React from "react";
import { useRef } from "react";
import { Fireworks } from "@fireworks-js/react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { useHref, useNavigate } from "react-router-dom";

import "/index.css";
const LaunchButton = () => {
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [showWebsiteButton, setShowWebsiteButton] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    setShowSecondVideo(true);
    setTimeout(() => {
      setShowSecondVideo(false);
      setShowWebsiteButton(true);
    }, 10000);
  };

  return (
    <div className="Launch">
      <div className="video-container">
        {!showSecondVideo && (
          <video autoPlay muted loop>
            <source
              src="https://cdn.pixabay.com/video/2024/09/16/231792_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {showSecondVideo && (
          <video ref={videoRef} autoPlay muted>
            <source
              src="https://cdn.pixabay.com/video/2024/02/25/201955-916877816_large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {!showSecondVideo && !showWebsiteButton && (
        <button className="launch-button" onClick={handleClick}>
          🚀 Launch Website
        </button>
      )}

      {showWebsiteButton && (
        <div className="website-intro">
          <p className="website-paragraph">
            Welcome to our innovative website, where we turn ideas into reality.
          </p>
          <button
            className="open-website-button"
            onClick={() => (window.location.href = "/")}
          >
            Let's Start..
          </button>
        </div>
      )}
    </div>
  );
};

export default LaunchButton;
