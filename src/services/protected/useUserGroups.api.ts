import React, {useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';
import { AxiosResponse } from 'axios';


interface UserPost{
    getMyGroups:()=>Promise<AxiosResponse>;
}


const useUserGroups = ():UserPost =>{

    const {privateAxios} = useContext(FetchContext);

    const getMyGroups = async():Promise<AxiosResponse>=>{
        const response:AxiosResponse= await privateAxios.get('/groups');
        return response;
    }


    return {
        getMyGroups,
    }
}

export {useUserGroups}