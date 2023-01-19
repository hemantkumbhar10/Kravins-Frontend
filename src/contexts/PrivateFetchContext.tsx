// import React, { createContext, useEffect, useContext, ReactNode } from "react";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";

import axios, { AxiosInstance } from "axios";
import React, { useState, useEffect, createContext, ReactNode } from "react";

type privateUserInfo = {}

interface FetchContextProps {
  authAxios: any;
  setUserProfileInfo:(data:privateUserInfo)=>void,

}

const FetchContext = createContext<FetchContextProps>({} as FetchContextProps);
const { Provider } = FetchContext;

const FetchProvider = ({ children }: { children: ReactNode }) => {
  const [userProfileInfo, setUserProfileInfo] = useState<
  privateUserInfo
  >({} as privateUserInfo);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

  //   useEffect(() => {
  //     // const getCsrfToken = async () => {
  //     //   const { data } = await authAxios.get("/api/csrf-prot");
  //       authAxios.defaults.headers["X-CSRF-Token"] = ''
  //     // };
  //     // getCsrfToken();
  //   }, []);

  const setPrivateProfileInfo =(data:privateUserInfo)=>{
    setUserProfileInfo(data);
  }

  const privateValues = {
    authAxios,
    userProfileInfo,
    setUserProfileInfo:(data:privateUserInfo)=>setPrivateProfileInfo(data),
    
  }
  return (
    <Provider
      value={privateValues}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };

// import axios, { AxiosInstance } from 'axios';
// import React, {useState, useEffect, createContext,ReactNode} from 'react';

// interface FetchContextProps{
//     privateAuthAxios:any
// }

// interface FetchProviderProps{
//     value:FetchContextProps
// }

// const privateContext= createContext<FetchContextProps | null>({}as FetchContextProps);

// const {Provider} = privateContext;

// const PrivateFetchProvider=({children}:{children:ReactNode})=>{

//     const privateAuthAxios = axios.create({
//         baseURL:process.env.REACT_APP_BACKEND_URL,
//         withCredentials:true
//     });
//     useEffect(()=>{
//         const getCsrfToken = async()=>{
//             const {data} = await privateAuthAxios.get('/csrf-prot');
//             privateAuthAxios.defaults.headers['X-CSRF-TOKEN'] = data.csrfToken;
//         }
//         // getCsrfToken();
//         },[]);
//     return(
//         <Provider value={{privateAuthAxios}}>
//             {children}
//         </Provider>
//     )

// }

// export {privateContext, PrivateFetchProvider};
