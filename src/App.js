import React, { useState } from "react";

const App = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem((pre) => pre + 1);
  const decrementItem = () => setItem((pre) => pre - 1);
  return (
    <div>
      {item}
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
};

export default App;
