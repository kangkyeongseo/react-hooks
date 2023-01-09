import React, { useEffect, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(() => {
    console.log("Hello");
  }, []);
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={() => setNumber((pre) => pre + 1)}>{number}</button>
      <button onClick={() => setANumber((pre) => pre + 1)}>{aNumber}</button>
    </div>
  );
};

export default App;
