import { createContext, useState } from "react";

const UserContext = createContext({
  user: { name: "" },
  dispatch: () => {},
});

const UserProvider = ({ children }) => {
  const [name, setName] = useState("Hyeok Choi");

  const value = { user: { name }, dispatch: setName };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const UserCustomer = UserContext.Consumer;

export { UserProvider, UserCustomer };
export default UserContext;
