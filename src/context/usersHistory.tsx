import { createContext, ReactNode, useState } from "react";

export const UsersHistoryContext = createContext({});

const UsersProviderComponent = ({ children }: { children: ReactNode }) => {
  const [usersHistory, setUsersHistory] = useState([]);

  return (
    <UsersHistoryContext.Provider value={{ usersHistory, setUsersHistory }}>
      {children}
    </UsersHistoryContext.Provider>
  );
};

export default UsersProviderComponent;
