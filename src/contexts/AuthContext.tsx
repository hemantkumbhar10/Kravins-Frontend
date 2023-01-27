import React, { useState, createContext, useEffect, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfoType {
  username: string | null;
  profilepic: string | null;
  email: string | null;
  fullname?: string | null;
  birthdate?: Date | null;
}

interface authStateType {
  token?: string | null;
  expiresAt?: number | null;
  userInfo: UserInfoType;
}

interface AuthContextType {
  isAuthenticated: () => boolean;
  setAuthState: (authInfo: authStateType) => void;
  updateAuthInfo: (userInfo: UserInfoType) => void;
  updateProfilePic: (pic:string) => void;
  logout: () => void;
  authState: authStateType;
  loading?: boolean;
  error?: any;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const { Provider } = AuthContext;

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  //Best to put these in useEffect
  var userInfo = localStorage.getItem("userInfo");
  const expiresAtValue = localStorage.getItem("expiresAt");
  var expiresAt = expiresAtValue ? parseInt(expiresAtValue) : null;

  const [authState, setAuthState] = useState<authStateType>({
    token: null,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  const setAuthInfo = useCallback(({ token, userInfo, expiresAt }: authStateType) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt));
    setAuthState({ token, userInfo, expiresAt });
    // console.log('From login....', token, expiresAt, userInfo)
  },[authState])


  const updateAuthInfo = (userInfo: UserInfoType) => {    
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setAuthState((prevAuthstate)=>{
      // console.log('from update state...', prevAuthstate);
      return {...prevAuthstate,userInfo}
    });
  };

  const updateProfilePic = (pic:string)=>{
    var user = JSON.parse(localStorage.getItem('userInfo')!);
    user.profilepic = pic;
    localStorage.setItem('userInfo',JSON.stringify(user));

    setAuthState((prevState)=>{
      return {...prevState, userInfo:user};
    });
  }



  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: { username: null, profilepic: null, email: null },
    });
    navigate("/home");
  };

  const isAuthenticated = () => {
    if (!authState.userInfo || !authState.expiresAt) {
      return false;
    }

    //Dividing by 1000 we get miliseconds value and expires at is in seconds

    return new Date().getTime() / 1000 < authState.expiresAt;
  };

  // setAuthstate1, loading, token, expiresAt, userInfo
  const authValues = {
    authState,
    setAuthState: (authInfo: authStateType) => setAuthInfo(authInfo),
    isAuthenticated,
    updateProfilePic,
    logout,
    updateAuthInfo,
  };

  return <Provider value={authValues}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
