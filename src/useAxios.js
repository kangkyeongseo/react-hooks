import defaultAxious from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstnace = defaultAxious) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(new Date());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstnace(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default useAxios;
