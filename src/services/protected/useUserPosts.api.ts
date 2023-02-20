import React, {useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';
import { AxiosHeaders } from 'axios';
import {publicFetch} from '../../utils/fetch';


interface UserPostsData{
    title:string,
    brief?:string,
    recipe?:string,
    image?:File | string,
}

interface UserGroupData {
    groupname:string,
    groupbio:string,
    image:File | string,
}



interface UserPost{
    createUserPost: (data:any)=>Promise<UserPostsData>
    createUserGroup: (data:any)=>Promise<UserGroupData>
    pagination:(page:number)=>Promise<[]>;
}



const useUserPosts = ():UserPost =>{

    const {privateAxios} = useContext(FetchContext);

    const headers= {
        'Content-Type':'multipart/form-data'
    }

    const createUserPost = async (data:any):Promise<UserPostsData> =>{
        privateAxios.defaults.headers['Content-Type'] = 'multipart/form-data';
        const response : UserPostsData = await privateAxios.post('/mypost',data,);

        return response;
    }

    const createUserGroup = async (data:any):Promise<UserGroupData> =>{
        privateAxios.defaults.headers['Content-Type'] = 'multipart/form-data';
        const response :UserGroupData = await privateAxios.post('/mygroup',data,);

        return response;
    }

    const pagination = async (page:number):Promise<[]>=>{
        const response:[] = await publicFetch.get('/pagination', {params:{page:page}});
        return response
    }

    return {
        createUserPost,
        createUserGroup,
        pagination
    }
}

export {useUserPosts}