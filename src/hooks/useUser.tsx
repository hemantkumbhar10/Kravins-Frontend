import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {useNavigate,useLocation} from 'react-router-dom';
import { signUp } from "../services/Auth/Signup.api";
import Cookies from 'js-cookie';
import axios from "axios";


interface AuthContextType{
  user?: UserType;
  loading:boolean;
  error?:any;
  authenticated?:boolean;
  setAuthenticated?:(arg:boolean)=>void;
  register:(data:UserType)=>void;
}

//MOVE THIS IN THE CONTEXT
const AuthContext = createContext<AuthContextType>({} as AuthContextType);


//PROVIDER TO EXPORT KEEP THIS IN THE HOOK

const AuthProvider=({children}:{children:ReactNode}):JSX.Element=>{

  const [user, setUser] = useState<UserType>();
  const [authenticated, setAuthenticated] =useState(false);
  const [error,setError] = useState<any>();
  const [loading,setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const navigate = useNavigate();
  const location = useLocation();

  //CHANGING ERROR STATE IF WE CHANGE PAGE
  useEffect(()=>{
    if(error){
      setError(null);
    }
  },[location.pathname]);


  
  //MAKE SIGNUP CALL AND FILL THE CONTEXT UP WITH DETAILS
  function register(data:UserType){
    setLoading(true);
    // axios.defaults.withCredentials = true;
    signUp(data).then((user)=>{
      setUser(user);
      setAuthenticated(true);
      navigate('/home');
    }).catch((error)=>setError(error)).finally(()=>setLoading(false));
   
  }

  //PROVIDED SHOULD ONLY UPDATE WHEN THER IS NEED
  //JUST BECAUSE ONE THING CHAGES WE SHOULD NOT CHANGINg
  //WHOLE TREE. THAT WOULD BE COSTLY
  //SO WE USE USE MEMO

  const memoedValue = useMemo(
    ()=>({
      user,
      loading,
      error,
      authenticated,
      setAuthenticated,
      register,
    }),[user,loading,error]
  ) ;

  return(
    <AuthContext.Provider value={memoedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthProvider}

//USING CONTEXT AND RETURNING ITS VALUE
export default function useAuth(){
  return useContext(AuthContext);
}