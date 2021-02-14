import React, { useState } from "react";

const initial = [];
const ListContext = React.createContext(initial);

const ListProvider = ({ children }) => {
  const [list, setList] = useState(initial);
  return (
    <ListContext.Provider value={[list, setList]}>
      {children}
    </ListContext.Provider>
  );
};
export { ListProvider, ListContext };
