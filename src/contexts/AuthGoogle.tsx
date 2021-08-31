import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth, firebase } from '../../config'

import * as Google from "expo-google-app-auth";


type User = {
  user: {
    email: string;
    name: string;
    photoUrl: string;
  }
}

type AuthContextType = {
  user: User | undefined;
  googleSignIn: () => Promise<void>;
  typeAction: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext({});

export const useGoogle = () => {
  return useContext(AuthContext) as AuthContextType;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [typeAction, setTypeAction] = useState('');

  const googleSignIn = async () => {
    try {
      const { type, user }:any = await Google.logInAsync({
        iosClientId: `<YOUR_IOS_CLIENT_ID>`,
        androidClientId: `643449095127-del7hehjjfht33u22msfaoigftcla1oa.apps.googleusercontent.com`,
      });

      setUser({
        user
      })

      setTypeAction(type)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{
        user,
        googleSignIn,
        typeAction,
      }}>
      {children}
    </AuthContext.Provider>

  );
}

