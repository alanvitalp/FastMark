  
import React, { useContext, useState } from "react";

const AuthContext = React.createContext({});

export const useAuthProvider = () => {
  return useContext(AuthContext) as AuthContextTypes;
};

type Props = {
  children?: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState<any>(
    null
  );

  const updateAuthenticatedUser = (user: any) => {
    setAuthenticatedUser(user);
  };

  return (
    <AuthContext.Provider
      value={{ authenticatedUser, updateAuthenticatedUser, setAuthenticatedUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;