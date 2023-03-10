import React, {useContext} from 'react';
import { FetchContext } from "../contexts/PrivateFetchContext";



const useSessions = ():any =>{
  const {privateAxios} = useContext(FetchContext);

   async function login (data:UserType):Promise<UserType>{
    const response:UserType = await privateAxios.post(`login`, data);
    return response;
  }

  async function signUp(data:UserType):Promise<UserType>{
    const response:UserType = await privateAxios.post(`signup`,data);
    return response;
  }

  async function signout(){
    const response = await privateAxios.post(`logout`);
    return response;
  }

  return{
    login,
    signUp,
    signout,
  }

}



export {useSessions};












// import axios from "axios";
// import { publicFetch } from "../utils/fetch";

// const URL = process.env.REACT_APP_BACKEND_URL;
// // const URL = "/signup";

// let axiosConfig = {
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials:true,
// };
// let axiosConfiged = {
//   withCredentials:true,
// };

// export async function signUp(data: UserType): Promise<UserType> {
//   const response: UserType = await publicFetch.post(`signup`, data,axiosConfig);
//   return response;
// }

// export async function login(data: UserType): Promise<UserType> {
//   const response: UserType = await publicFetch.post('login', data,axiosConfig);
//   return response;
// }


// export async function signout(){
//   const response = await publicFetch.post('logout', axiosConfig);
//   return response;
// }


// export async function posts(){
//   const response = await publicFetch.get('dummy', axiosConfig);
//   return response;
// }


