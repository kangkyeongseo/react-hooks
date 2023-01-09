import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  if (typeof onClick !== "function") {
    return;
  }
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayTitle = () => console.log("say title");
  const title = useClick(sayTitle);
  return (
    <div>
      <h1 ref={title}>useClick</h1>
    </div>
  );
};

export default App;
