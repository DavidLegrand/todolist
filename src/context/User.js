import React, { useState } from "react";

const initial = { id: 1, firstName: "John", lastName: "Doe" };
const UserContext = React.createContext(initial);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initial);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
