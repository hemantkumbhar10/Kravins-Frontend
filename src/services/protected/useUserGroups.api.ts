import React, {useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';
import { AxiosResponse } from 'axios';


interface UserGroup{
    getMyGroups:()=>Promise<AxiosResponse>;
    getGroupById:(id:any)=>Promise<AxiosResponse>;
}

interface UserPostsData{
    title:string,
    brief?:string,
    recipe?:string,
    image?:File | string,
}


const useUserGroups = ():UserGroup =>{

    const {privateAxios} = useContext(FetchContext);

    const getMyGroups = async():Promise<AxiosResponse>=>{
        const response:AxiosResponse= await privateAxios.get('/groups');
        return response;
    }

    const getGroupById = async(id:any):Promise<AxiosResponse>=>{
        const response: AxiosResponse = await privateAxios.get('/group', {params:{id:id}});
        return response;
    }


    return {
        getMyGroups,
        getGroupById,
    }
}

export {useUserGroups}