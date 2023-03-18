import { createContext, ReactNode, useState } from "react";

interface ContextType {
  usersHistory?: any[],
  setUsersHistory?: any;
}

export const UsersHistoryContext = createContext<ContextType>({});

const UsersProviderComponent = ({ children }: { children: ReactNode }) => {
  const [usersHistory, setUsersHistory] = useState([]);

  return (
    <UsersHistoryContext.Provider value={{ usersHistory, setUsersHistory }}>
      {children}
    </UsersHistoryContext.Provider>
  );
};

export default UsersProviderComponent;
