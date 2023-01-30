import React, {useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';


interface UserPostsData{
    title:string,
    brief?:string,
    recipe?:string,
    image?:string,
}



interface UserPost{
    createUserPost: (data:UserPostsData)=>Promise<UserPostsData>
}



const useUserPosts = ():UserPost =>{

    const {privateAxios} = useContext(FetchContext);

    const createUserPost = async (data:UserPostsData):Promise<UserPostsData> =>{

        const response : UserPostsData = await privateAxios.post('mypost', data);

        return response;
    }

    return {
        createUserPost
    }
}

export {useUserPosts}