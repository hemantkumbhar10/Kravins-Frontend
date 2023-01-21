import React, { useContext } from "react";
import { FetchContext } from "../../contexts/PrivateFetchContext";

interface ProfileType {
  fullname: string;
  username: string;
  profilepic: string;
  email: string;
  birthdate: Date;
}

interface userProfileHookType {
  getprofile: () => Promise<ProfileType>;
  updateprofile: (data: ProfileType) => Promise<ProfileType>;
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

  return {
    getprofile,
    updateprofile,
  };
};

export { useUserProfile };
