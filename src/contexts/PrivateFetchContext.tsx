import React, { createContext, useEffect, useContext, ReactNode } from "react";
import axios, { AxiosInstance } from "axios";


interface FetchContextProps {
 privateAxios: AxiosInstance;

}

const FetchContext = createContext<FetchContextProps>({} as FetchContextProps);
const { Provider } = FetchContext;

const FetchProvider = ({ children }: { children: ReactNode }) => {

  const privateAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  });

  useEffect(()=>{
    const getCSRFToken = async()=>{
      const {data} = await privateAxios.get('/csrf-token');
      privateAxios.defaults.headers['X-CSRF-Token'] = data.csrfToken;
      // console.log(data)
    };
    getCSRFToken();
  },[]) ;




  const privateValues = {
    privateAxios,
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
