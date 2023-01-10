import React, { useEffect, useRef } from "react";

const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number") {
      return;
    }
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn();
  const fadeInP = useFadeIn(10);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeInP}>content</p>
    </div>
  );
};

export default App;
