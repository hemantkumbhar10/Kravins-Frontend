import { AxiosResponse } from 'axios';
import React,{useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';


interface SFHook {
    searchFriendsAndGroups:(queryKey:any)=>Promise<AxiosResponse>
}



const useSearchFriends = ():SFHook =>{

    const {privateAxios} = useContext(FetchContext);

    const searchFriendsAndGroups = async(queryKey:any)=>{
        const response: AxiosResponse = await privateAxios.get('/search', {params:{fg_name:queryKey}});
        return response;
    }

    return {
        searchFriendsAndGroups
    }

}

export {
    useSearchFriends
}