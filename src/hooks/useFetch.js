import { useEffect, useState } from "react";
import api from "api";

const useFetch = (endpoint) => {
  const [load, setload] = useState(false);
  const [error, seterror] = useState(null);
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setload(true);
      seterror(null);
      try {
        const res = await fetch(`${api}${endpoint}`);
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          const result = await res.json();
          setdata(result.filter((t) => t !== null));
        }
      } catch (e) {
        console.error(e);
        seterror(e);
      }
      setload(false);
    };
    fetchData();
  }, [endpoint]);
  return { data, load, error };
};

export default useFetch;
