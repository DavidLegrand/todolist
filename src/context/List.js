import React, { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";

const initial = [];
const ListContext = React.createContext(initial);

const ListProvider = ({ children }) => {
  const { data } = useFetch("tasks.json");
  const [list, setList] = useState(null);
  useEffect(() => {
    setList(data);
  }, [data]);

  return (
    <ListContext.Provider value={[list, setList]}>
      {children}
    </ListContext.Provider>
  );
};
export { ListProvider, ListContext };
