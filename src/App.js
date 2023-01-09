import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};
const App = () => {
  const updateTitle = useTitle("Loading...");
  setTimeout(() => {
    updateTitle("Home");
  }, 3000);
  return (
    <div>
      <h1>useTitle</h1>
    </div>
  );
};

export default App;
