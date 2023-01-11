import React from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(loading, data, error);
  return (
    <div>
      <h1>useAxios</h1>
      <h2>{data && data.status}</h2>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
