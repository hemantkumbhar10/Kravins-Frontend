import axios from "axios";
import { publicFetch } from "../../utils/fetch";

const URL = process.env.REACT_APP_BACKEND_URL;
// const URL = "/signup";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
};

export async function signUp(data: UserType): Promise<UserType> {
  const response: UserType = await axios.post(`${URL}signup`, data,axiosConfig);
  return response;
}

export async function login(data: UserType): Promise<UserType> {
  const response: UserType = await publicFetch.post('login', data,axiosConfig);
  return response;
}
