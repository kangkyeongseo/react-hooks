import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (onLine) => {
    console.log(onLine ? "We just went online" : "We are offLine");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>useNetwork</h1>
      <h2>{onLine ? "Online" : "Offline"}</h2>
    </div>
  );
};

export default App;
