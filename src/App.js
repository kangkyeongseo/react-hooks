import React, { useEffect, useRef, useState } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggleFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRquestFullscreen) {
        element.current.mozRquestFullscreen();
      } else if (element.current.webkitRquestFullscreen) {
        element.current.webkitRquestFullscreen();
      } else if (element.current.msRquestFullscreen) {
        element.current.msRquestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggleFullscreen, exitFullscreen };
};

const App = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggleFullscreen, exitFullscreen } = useFullscreen(onFulls);
  return (
    <div>
      <h1>useFullscreen</h1>
      <div ref={element}>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzEyMzFfMjA2/MDAxNTE0NjQ2Nzk2Mzkx.G5vVj-MzaAaRsLQHHMTrN4DkkrXlJnWtwPc0SM74Cg4g.C8xO8ljwLeflHBgCxDdgaHj7Gtueo0_4n8_2fElZ4Iwg.JPEG.wedcats/IMG_4582.jpg?type=w800" />
        <button onClick={triggleFullscreen}>Make Fullscreen</button>
        <button onClick={exitFullscreen}>Exit Fullscreen</button>
      </div>
    </div>
  );
};

export default App;
