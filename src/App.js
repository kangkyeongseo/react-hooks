import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (evnet) => {
    const {
      target: { value },
    } = evnet;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length < 10;
  const name = useInput("username", maxLen);
  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
