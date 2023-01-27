import React, { useContext } from "react";
import { FetchContext } from "../../contexts/PrivateFetchContext";

interface ProfileType {
  fullname: string;
  username: string;
  profilepic?: string;
  email: string;
  birthdate: Date;
}

interface userProfileHookType {
  getprofile: () => Promise<ProfileType>;
  updateprofile: (data: ProfileType) => Promise<ProfileType>;
  postAvatar: (data: any) => Promise<any>;
}

const useUserProfile = (): userProfileHookType => {
  const { privateAxios } = useContext(FetchContext);

  async function getprofile(): Promise<ProfileType> {
    const response: ProfileType = await privateAxios.get("myprofile"); ///no csrf route, change url authAxios/fetch
    return response;
  }

  async function updateprofile(data: ProfileType): Promise<ProfileType> {
    const response: ProfileType = await privateAxios.patch("/myprofile", data);
    return response;
  }


  async function postAvatar(data: any): Promise<any> {
    const response: any = await privateAxios.post("/uploadavatar", data);
    return response;
  }

  return {
    getprofile,
    updateprofile,
    postAvatar,
  };
};

export { useUserProfile };
