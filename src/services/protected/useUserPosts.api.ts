import React, {useContext} from 'react';
import { FetchContext } from '../../contexts/PrivateFetchContext';
import { AxiosHeaders, AxiosResponse } from 'axios';
import {publicFetch} from '../../utils/fetch';


interface UserPostsData{
    _id:string;
    title:string,
    brief?:string,
    recipe?:string,
    image?:string,
    createdAt:string
}

interface UserProfile{
    fullname:string;
    profilepic:string;
}

interface GroupOwner{
    groupname:string;
    groupimage:string;
    groupowner:string;
}

interface UserPosts extends UserPostsData{
    user_profile:UserProfile;
    groupid:GroupOwner;
}

interface UserGroupData {
    groupname:string,
    groupbio:string,
    image:File | string,
}



interface UserPost{
    createUserPost: (data:any)=>Promise<UserPostsData>
    createUserGroup: (data:any)=>Promise<UserGroupData>
    updateUserPost:(data:any)=>Promise<UserPostsData>
    deleteUserPost: (data:any)=>any
    pagination:(page:number)=>Promise<AxiosResponse<UserPosts[]>>;
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

    const updateUserPost = async(data:any):Promise<UserPostsData> => {
        const response : UserPostsData = await privateAxios.patch('/mypost', data);
        return response;
    }

    const deleteUserPost =async (data:any)=>{
        const response: AxiosResponse = await privateAxios.delete('/mypost',  {params:{postid:data}});
        return response;
    }

    const pagination = async (page:number):Promise<AxiosResponse<UserPosts[]>>=>{
        const response:AxiosResponse<UserPosts[]> = await publicFetch.get('/pagination', {params:{page:page}});
        return response
    }

    return {
        createUserPost,
        createUserGroup,
        updateUserPost,
        deleteUserPost,
        pagination
    }
}

export {useUserPosts}