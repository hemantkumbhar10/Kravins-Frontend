import React, {useState, createContext, ReactNode} from "react";
import { useNavigate } from "react-router-dom";


interface authStateType{
  token:string | null, expiresAt:number | null, userInfo: {}
}


interface AuthContextType{
  isAuthenticated:()=>boolean,
  setAuthState:(authInfo:authStateType)=>void,
  logout:()=>void,
  loading?:boolean;
  error?:any;
}



const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const {Provider} = AuthContext;

const AuthProvider = ({children}:{children:ReactNode})=>{

  const navigate = useNavigate();

  //Best to put these in useEffect
  const userInfo = localStorage.getItem("userInfo");
  const expiresAtValue = localStorage.getItem("expiresAt");
  const expiresAt = expiresAtValue ? parseInt(expiresAtValue) : null;
  
  const [authState, setAuthState] = useState<authStateType>({
    token:null,
    expiresAt,
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });


  const setAuthInfo =({token, userInfo, expiresAt}:authStateType)=>{

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt));
    setAuthState({token, userInfo, expiresAt});
  }

  const logout = () =>{
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    setAuthState({token:null,expiresAt:null, userInfo:{}});
    navigate('/home');
  }


  

  const isAuthenticated = () =>{
    if(!authState.userInfo || !authState.expiresAt){
      return false;
    }

    //Dividing by 1000 we get miliseconds value and expires at is in seconds
   
    return new Date().getTime() / 1000 < authState.expiresAt;
  }

  // setAuthstate1, loading, token, expiresAt, userInfo
  const authValues = {
    authState,
    setAuthState:(authInfo:authStateType)=>setAuthInfo(authInfo),
    isAuthenticated,
    logout,
  }


  return(
    <Provider value={authValues}>
      {children}
    </Provider>
  );

};

export {AuthContext, AuthProvider}



