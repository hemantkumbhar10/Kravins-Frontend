import React, {useContext} from 'react';
import axios from "axios"
import { publicFetch } from '../../utils/fetch';


interface ProfileType{
    fullname:string,
    username:string,
    profilepic:string,
    email:string,
    birthdate:Date
}

let axiosConfig = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials:true,
  };



export async function UpdateProfile (data:ProfileType):Promise<ProfileType>{

    const response: ProfileType = await publicFetch.patch('/myprofile', data)
    return response;

}