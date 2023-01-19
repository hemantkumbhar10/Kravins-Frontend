import React, {useContext} from 'react';
import axios from "axios"
import { FetchContext } from '../../contexts/PrivateFetchContext';



interface ProfileType{
    fullname:string,
    username:string,
    profilepic:string,
    email:string,
    birthdate:string
}


//  const {} = useContext(FetchContext);

// export async function userprofileapi ():Promise<ProfileType>{

//     const response: ProfileType = await get('/')
//     return response;

// }